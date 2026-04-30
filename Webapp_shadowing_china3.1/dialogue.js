/* ============================================
   DIALOGUE.JS – Dialogue & Role-play Module
   ============================================ */

'use strict';

const DialogueState = {
  currentLessonIndex: null,   // index in lessonsData.shadowing
  currentLesson: null,        // lesson object
  dialogue: null,             // current sub-dialogue data
  subIndex: 0,                // which dialogue is active
  mode: 'view',               // 'view' | 'roleplay'
  roleCharacter: null,        // 0 or 1 – which character user plays
  currentLineIndex: 0,
  isPlaying: false,
  isRecording: false,
  recognition: null,
  lineResults: [],            // scores per line
  speakTimer: null,
};

function switchSubDialogue(index) {
  stopDialogueSpeech();
  const lesson = DialogueState.currentLesson;
  if (!lesson || !lesson.dialogues || !lesson.dialogues[index]) return;
  
  DialogueState.subIndex = index;
  DialogueState.dialogue = lesson.dialogues[index];
  DialogueState.mode = 'view';
  DialogueState.roleCharacter = null;
  DialogueState.currentLineIndex = 0;
  DialogueState.lineResults = [];
  
  renderDialogueView();
}

// =========================================
// INIT
// =========================================
function initDialogue(lessonIndex) {
  const lesson = lessonsData && lessonsData.shadowing
    ? lessonsData.shadowing[lessonIndex]
    : null;
  if (!lesson) return;

  // Support old format or new array format
  let dlgs = lesson.dialogues;
  if (!dlgs || dlgs.length === 0) {
    if (lesson.dialogue) dlgs = [lesson.dialogue];
    else return;
  }

  DialogueState.currentLessonIndex = lessonIndex;
  DialogueState.currentLesson = lesson;
  DialogueState.subIndex = 0;
  DialogueState.dialogue = dlgs[0];
  DialogueState.mode = 'view';
  DialogueState.roleCharacter = null;
  DialogueState.currentLineIndex = 0;
  DialogueState.lineResults = [];

  renderDialogueView();
}

// =========================================
// DIALOGUE VIEW – chat bubbles
// =========================================
function renderDialogueView() {
  const lesson = DialogueState.currentLesson;
  const dlg = DialogueState.dialogue;
  if (!lesson || !dlg) return;

  const container = document.getElementById('dialogue-content');
  if (!container) return;

  const charA = dlg.characters[0] || 'A';
  const charB = dlg.characters[1] || 'B';

  let tabsHtml = '';
  if (lesson.dialogues && lesson.dialogues.length > 1) {
    tabsHtml = '<div class="sub-dialogue-tabs">';
    lesson.dialogues.forEach(function(d, i) {
      const activeClass = i === DialogueState.subIndex ? 'active' : '';
      tabsHtml += `<button class="sub-dlg-tab ${activeClass}" onclick="switchSubDialogue(${i})">H.Thoại ${i + 1}</button>`;
    });
    tabsHtml += '</div>';
  }

  container.innerHTML = `
    ${tabsHtml}
    <div class="dialogue-title">
      <span class="dlg-title-icon">💬</span>
      <span>${dlg.title || 'Hội thoại'}</span>
    </div>
    <div class="dialogue-characters">
      <div class="char-badge char-a">🧑 ${charA}</div>
      <div class="char-vs">vs</div>
      <div class="char-badge char-b">👩 ${charB}</div>
    </div>
    <div class="chat-bubbles" id="chat-bubbles"></div>
    <div class="dialogue-actions">
      <button class="dlg-btn dlg-play-all" id="dlg-play-all-btn" onclick="playAllDialogue()">
        ▶ Nghe toàn bộ
      </button>
      <button class="dlg-btn dlg-roleplay" id="dlg-roleplay-btn" onclick="showRoleplaySelect()">
        🎭 Đóng vai
      </button>
    </div>
  `;

  const bubblesEl = document.getElementById('chat-bubbles');
  dlg.lines.forEach(function(line, i) {
    const isLeft = line.speaker === 0;
    const name   = isLeft ? charA : charB;
    const bubble = document.createElement('div');
    bubble.className = 'chat-row ' + (isLeft ? 'chat-left' : 'chat-right');
    bubble.id = 'chat-line-' + i;
    bubble.innerHTML = `
      <div class="chat-avatar">${isLeft ? '🧑' : '👩'}</div>
      <div class="chat-bubble-wrap">
        <div class="chat-speaker">${name}</div>
        <div class="chat-bubble ${isLeft ? 'bubble-left' : 'bubble-right'}" id="bubble-${i}">
          <div class="bubble-chinese">${line.chinese}</div>
          <div class="bubble-pinyin">${line.pinyin}</div>
          <div class="bubble-trans hidden" id="bubble-trans-${i}">
            🇻🇳 ${line.vietnamese}
          </div>
        </div>
        <div class="bubble-footer">
          <button class="bubble-listen" onclick="playDialogueLine(${i})" title="Nghe câu này">
            🔊
          </button>
          <button class="bubble-trans-btn" onclick="toggleBubbleTrans(${i})" title="Xem nghĩa">
            👁️
          </button>
        </div>
      </div>
    `;
    bubblesEl.appendChild(bubble);

    // Animate in sequence
    setTimeout(function() {
      bubble.classList.add('chat-visible');
    }, i * 80);
  });
}

function toggleBubbleTrans(index) {
  const el = document.getElementById('bubble-trans-' + index);
  if (el) el.classList.toggle('hidden');
}

function highlightBubble(index, active) {
  const bubble = document.getElementById('bubble-' + index);
  if (!bubble) return;
  if (active) bubble.classList.add('bubble-active');
  else bubble.classList.remove('bubble-active');

  // scroll into view
  if (active) {
    const row = document.getElementById('chat-line-' + index);
    if (row) row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// =========================================
// PLAY ALL – sequential TTS
// =========================================
function playAllDialogue() {
  if (DialogueState.isPlaying) {
    stopDialogueSpeech();
    return;
  }
  const btn = document.getElementById('dlg-play-all-btn');
  if (btn) btn.textContent = '⏹ Dừng';
  DialogueState.isPlaying = true;
  DialogueState.currentLineIndex = 0;
  playNextDialogueLine();
}

function playNextDialogueLine() {
  if (!DialogueState.isPlaying) return;
  const dlg = DialogueState.dialogue;
  const idx  = DialogueState.currentLineIndex;
  if (!dlg || idx >= dlg.lines.length) {
    stopDialogueSpeech();
    return;
  }

  const line = dlg.lines[idx];
  highlightBubble(idx, true);

  speakDialogueText(line.chinese, function() {
    highlightBubble(idx, false);
    DialogueState.currentLineIndex++;
    DialogueState.speakTimer = setTimeout(playNextDialogueLine, 600);
  });
}

function playDialogueLine(index) {
  const dlg = DialogueState.dialogue;
  if (!dlg || !dlg.lines[index]) return;
  stopDialogueSpeech();
  highlightBubble(index, true);
  speakDialogueText(dlg.lines[index].chinese, function() {
    highlightBubble(index, false);
  });
}

function stopDialogueSpeech() {
  DialogueState.isPlaying = false;
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  if (DialogueState.speakTimer) {
    clearTimeout(DialogueState.speakTimer);
    DialogueState.speakTimer = null;
  }

  // reset all bubbles
  const dlg = DialogueState.dialogue;
  if (dlg) dlg.lines.forEach(function(_, i) { highlightBubble(i, false); });

  const btn = document.getElementById('dlg-play-all-btn');
  if (btn) btn.textContent = '▶ Nghe toàn bộ';
}

function speakDialogueText(text, onEnd) {
  if (!window.speechSynthesis) { if (onEnd) onEnd(); return; }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang  = 'zh-CN';
  utter.rate  = 0.85;
  utter.pitch = 1;
  utter.onend   = onEnd || null;
  utter.onerror = onEnd || null;
  window.speechSynthesis.speak(utter);
}

// =========================================
// ROLE-PLAY – CHARACTER SELECT
// =========================================
function showRoleplaySelect() {
  const dlg     = DialogueState.dialogue;
  if (!dlg) return;
  const charA   = dlg.characters[0] || 'A';
  const charB   = dlg.characters[1] || 'B';
  const container = document.getElementById('dialogue-content');
  if (!container) return;

  stopDialogueSpeech();

  container.innerHTML = `
    <div class="roleplay-select-screen">
      <div class="rp-title">🎭 Chọn nhân vật để đóng vai</div>
      <p class="rp-subtitle">Nhân vật còn lại sẽ được phát âm tự động</p>
      <div class="rp-char-cards">
        <button class="rp-char-card" id="rp-card-0" onclick="startRolePlay(0)">
          <div class="rp-char-avatar">🧑</div>
          <div class="rp-char-name">${charA}</div>
          <div class="rp-char-lines">${countLinesForSpeaker(0)} lượt thoại</div>
          <div class="rp-char-btn">Chọn vai này</div>
        </button>
        <div class="rp-or">hoặc</div>
        <button class="rp-char-card" id="rp-card-1" onclick="startRolePlay(1)">
          <div class="rp-char-avatar">👩</div>
          <div class="rp-char-name">${charB}</div>
          <div class="rp-char-lines">${countLinesForSpeaker(1)} lượt thoại</div>
          <div class="rp-char-btn">Chọn vai này</div>
        </button>
      </div>
      <button class="dlg-btn-back" onclick="renderDialogueView()">← Quay lại hội thoại</button>
    </div>
  `;
}

function countLinesForSpeaker(speakerIdx) {
  const dlg = DialogueState.dialogue;
  if (!dlg) return 0;
  return dlg.lines.filter(function(l) { return l.speaker === speakerIdx; }).length;
}

// =========================================
// ROLE-PLAY – MAIN FLOW
// =========================================
function startRolePlay(characterIndex) {
  DialogueState.mode          = 'roleplay';
  DialogueState.roleCharacter = characterIndex;
  DialogueState.currentLineIndex = 0;
  DialogueState.lineResults   = [];
  setupDialogueRecognition();
  renderRolePlayView();
  advanceRolePlay();
}

function renderRolePlayView() {
  const dlg   = DialogueState.dialogue;
  const myIdx = DialogueState.roleCharacter;
  if (!dlg) return;

  const myName  = dlg.characters[myIdx]     || 'Bạn';
  const oppName = dlg.characters[1 - myIdx] || 'Đối diện';

  const container = document.getElementById('dialogue-content');
  if (!container) return;

  container.innerHTML = `
    <div class="roleplay-header">
      <button class="dlg-btn-back" onclick="exitRolePlay()">← Thoát</button>
      <div class="rp-info">
        <span>🎭 Đóng vai: <strong>${myName}</strong></span>
      </div>
      <div class="rp-line-progress" id="rp-line-progress">0 / ${dlg.lines.length}</div>
    </div>

    <div class="rp-legend">
      <span class="rp-legend-opp">🤖 ${oppName} = Tự phát âm</span>
      <span class="rp-legend-me">🎙 ${myName} = Bạn nói</span>
    </div>

    <div class="rp-chat-area" id="rp-chat-area"></div>

    <div class="rp-current-area" id="rp-current-area">
      <div class="rp-current-card hidden" id="rp-current-card">
        <div class="rp-turn-label" id="rp-turn-label"></div>
        <div class="rp-current-chinese" id="rp-current-chinese"></div>
        <div class="rp-current-pinyin" id="rp-current-pinyin"></div>
        <div class="rp-current-viet hidden" id="rp-current-viet"></div>
        <button class="rp-hint-btn" id="rp-hint-btn" onclick="toggleRPHint()" style="display:none">
          👁️ Gợi ý nghĩa
        </button>
      </div>

      <div class="rp-action-area" id="rp-action-area"></div>

      <div class="rp-result" id="rp-result"></div>
    </div>

    <div class="rp-score-bar">
      <span class="rp-score-label">Điểm:</span>
      <span class="rp-score-value" id="rp-score-val">–</span>
    </div>
  `;
}

function advanceRolePlay() {
  const dlg   = DialogueState.dialogue;
  const myIdx = DialogueState.roleCharacter;
  const idx   = DialogueState.currentLineIndex;

  // Update progress
  const prog = document.getElementById('rp-line-progress');
  if (prog) prog.textContent = idx + ' / ' + dlg.lines.length;

  if (idx >= dlg.lines.length) {
    finishRolePlay();
    return;
  }

  const line    = dlg.lines[idx];
  const isMyTurn = (line.speaker === myIdx);

  // Show current card
  showRPCurrentCard(line, isMyTurn);

  if (!isMyTurn) {
    // Opponent line – auto TTS
    addRPChatBubble(line, false);
    setTimeout(function() {
      speakDialogueText(line.chinese, function() {
        DialogueState.currentLineIndex++;
        setTimeout(advanceRolePlay, 500);
      });
    }, 400);
  } else {
    // My turn – show record button
    showRPRecordUI();
  }
}

function showRPCurrentCard(line, isMyTurn) {
  const card = document.getElementById('rp-current-card');
  if (!card) return;

  const dlg   = DialogueState.dialogue;
  const myIdx = DialogueState.roleCharacter;
  const myName  = dlg.characters[myIdx] || 'Bạn';
  const oppName = dlg.characters[1 - myIdx] || 'Đối diện';

  const label = document.getElementById('rp-turn-label');
  const ch = document.getElementById('rp-current-chinese');
  const py = document.getElementById('rp-current-pinyin');
  const vt = document.getElementById('rp-current-viet');
  const hint = document.getElementById('rp-hint-btn');

  card.classList.remove('hidden');
  card.className = 'rp-current-card ' + (isMyTurn ? 'rp-my-card' : 'rp-opp-card');

  if (label) {
    label.textContent = isMyTurn
      ? '🎙 Đến lượt bạn! (Vai: ' + myName + ')'
      : '🤖 ' + oppName + ' đang nói...';
    label.className = 'rp-turn-label ' + (isMyTurn ? 'my-turn' : 'opp-turn');
  }

  if (isMyTurn) {
    // Show Chinese partially – show first char, hide rest
    if (ch) ch.textContent = line.chinese;
    if (py) py.textContent = line.pinyin;
    if (vt) { vt.textContent = '🇻🇳 ' + line.vietnamese; vt.classList.add('hidden'); }
    if (hint) hint.style.display = '';
  } else {
    if (ch) ch.textContent = line.chinese;
    if (py) py.textContent = line.pinyin;
    if (vt) { vt.textContent = '🇻🇳 ' + line.vietnamese; vt.classList.remove('hidden'); }
    if (hint) hint.style.display = 'none';
  }
}

function toggleRPHint() {
  const vt = document.getElementById('rp-current-viet');
  if (vt) vt.classList.toggle('hidden');
}

function showRPRecordUI() {
  const area = document.getElementById('rp-action-area');
  if (!area) return;

  area.innerHTML = `
    <div class="rp-record-section">
      <div class="rp-waveform hidden" id="rp-waveform">
        <div class="wave-bar" style="--i:0"></div>
        <div class="wave-bar" style="--i:1"></div>
        <div class="wave-bar" style="--i:2"></div>
        <div class="wave-bar" style="--i:3"></div>
        <div class="wave-bar" style="--i:4"></div>
        <div class="wave-bar" style="--i:5"></div>
        <div class="wave-bar" style="--i:6"></div>
        <div class="wave-bar" style="--i:7"></div>
      </div>
      <button class="rp-record-btn" id="rp-record-btn" onclick="toggleRPRecord()">
        <span class="record-dot"></span>
        <span id="rp-record-label">🎙️ Nhấn để ghi âm</span>
      </button>
      <button class="rp-skip-btn" onclick="skipRPLine()">Bỏ qua →</button>
    </div>
  `;

  const result = document.getElementById('rp-result');
  if (result) result.innerHTML = '';
}

function toggleRPRecord() {
  if (DialogueState.isRecording) {
    stopRPRecording();
  } else {
    startRPRecording();
  }
}

function startRPRecording() {
  if (!DialogueState.recognition) {
    showToast('⚠️ Hãy dùng Chrome để ghi âm!', 3000);
    return;
  }
  DialogueState.isRecording = true;
  DialogueState.recognition.start();

  const btn = document.getElementById('rp-record-btn');
  if (btn) btn.classList.add('recording');
  const lbl = document.getElementById('rp-record-label');
  if (lbl) lbl.textContent = '⏹ Dừng ghi âm';
  const wv = document.getElementById('rp-waveform');
  if (wv) { wv.classList.remove('hidden'); wv.classList.add('active'); }
  showToast('🎙️ Đang ghi âm – Hãy nói tiếng Trung!');
}

function stopRPRecording() {
  DialogueState.isRecording = false;
  if (DialogueState.recognition) {
    try { DialogueState.recognition.stop(); } catch(e) {}
  }
  const btn = document.getElementById('rp-record-btn');
  if (btn) btn.classList.remove('recording');
  const lbl = document.getElementById('rp-record-label');
  if (lbl) lbl.textContent = '🎙️ Nhấn để ghi âm';
  const wv = document.getElementById('rp-waveform');
  if (wv) { wv.classList.remove('active'); }
}

function skipRPLine() {
  stopRPRecording();
  const dlg   = DialogueState.dialogue;
  const line  = dlg.lines[DialogueState.currentLineIndex];
  if (line) addRPChatBubble(line, true, null);
  DialogueState.lineResults.push(null); // skipped
  DialogueState.currentLineIndex++;
  updateRPScore();
  setTimeout(advanceRolePlay, 300);
}

function setupDialogueRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { DialogueState.recognition = null; return; }

  const r = new SR();
  r.lang = 'zh-CN';
  r.continuous = false;
  r.interimResults = true;
  r.maxAlternatives = 1;

  r.onresult = function(e) {
    const text    = Array.from(e.results).map(function(x) { return x[0].transcript; }).join('');
    const isFinal = e.results[e.results.length - 1].isFinal;
    showRPInterimResult(text, isFinal);
  };
  r.onend = function() {
    if (DialogueState.isRecording) stopRPRecording();
  };
  r.onerror = function(err) {
    if (err.error !== 'aborted') showToast('⚠️ Lỗi ghi âm: ' + err.error);
    stopRPRecording();
  };

  DialogueState.recognition = r;
}

function showRPInterimResult(text, isFinal) {
  const result = document.getElementById('rp-result');
  if (!result) return;

  if (!isFinal) {
    result.innerHTML = '<span class="rp-interim">🎙️ ' + (text || '...') + '</span>';
    return;
  }

  // Final: score it
  const dlg  = DialogueState.dialogue;
  const line = dlg.lines[DialogueState.currentLineIndex];
  if (!line) return;

  const got      = text.trim().replace(/[，。！？\s]/g, '');
  const expected = line.chinese.trim().replace(/[，。！？\s]/g, '');
  const sim      = dialogueSimilarity(got, expected);
  const pct      = Math.round(sim * 100);

  DialogueState.lineResults.push(pct);

  let html, emoji;
  if (sim >= 0.85) {
    emoji = '🎉'; html = `<span class="rp-score-excellent">🎉 Xuất sắc! ${pct}%</span>`;
    showToast('🎉 Phát âm xuất sắc!');
  } else if (sim >= 0.55) {
    emoji = '👍'; html = `<span class="rp-score-good">👍 Khá tốt! ${pct}% – "${text}"</span>`;
    showToast('👍 Tiếp tục cố gắng!');
  } else {
    emoji = '💪'; html = `<span class="rp-score-retry">💪 Thử lại: "${text}"</span>`;
  }
  result.innerHTML = html;

  // Add to chat
  addRPChatBubble(line, true, pct);
  updateRPScore();

  // Advance after delay
  setTimeout(function() {
    DialogueState.currentLineIndex++;
    advanceRolePlay();
  }, 1800);
}

function addRPChatBubble(line, isMe, score) {
  const area = document.getElementById('rp-chat-area');
  if (!area) return;

  const dlg    = DialogueState.dialogue;
  const myIdx  = DialogueState.roleCharacter;
  const myName = dlg.characters[myIdx] || 'Bạn';
  const oppName= dlg.characters[1 - myIdx] || '...';

  const name   = isMe ? myName : oppName;
  const avatar = isMe
    ? (myIdx === 0 ? '🧑' : '👩')
    : (myIdx === 0 ? '👩' : '🧑');
  const side   = isMe ? 'chat-right' : 'chat-left';
  const bubSide= isMe ? 'bubble-right rp-my-bubble' : 'bubble-left rp-opp-bubble';

  const scoreBadge = (isMe && score !== null && score !== undefined)
    ? `<span class="rp-inline-score ${score >= 85 ? 'excellent' : score >= 55 ? 'good' : 'retry'}">${score}%</span>`
    : '';

  const row = document.createElement('div');
  row.className = 'chat-row ' + side + ' rp-history-bubble';
  row.innerHTML = `
    <div class="chat-avatar">${avatar}</div>
    <div class="chat-bubble-wrap">
      <div class="chat-speaker">${name} ${scoreBadge}</div>
      <div class="chat-bubble ${bubSide}">
        <div class="bubble-chinese">${line.chinese}</div>
        <div class="bubble-pinyin">${line.pinyin}</div>
      </div>
    </div>
  `;
  area.appendChild(row);
  row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function updateRPScore() {
  const results = DialogueState.lineResults.filter(function(r) { return r !== null; });
  if (results.length === 0) return;
  const avg = Math.round(results.reduce(function(a, b) { return a + b; }, 0) / results.length);
  const el = document.getElementById('rp-score-val');
  if (el) {
    el.textContent = avg + '%';
    el.className = 'rp-score-value ' + (avg >= 85 ? 'excellent' : avg >= 55 ? 'good' : 'retry');
  }
}

// =========================================
// ROLE-PLAY FINISH
// =========================================
function finishRolePlay() {
  stopRPRecording();
  if (window.speechSynthesis) window.speechSynthesis.cancel();

  const results  = DialogueState.lineResults.filter(function(r) { return r !== null; });
  const skipped  = DialogueState.lineResults.filter(function(r) { return r === null; }).length;
  const avg      = results.length > 0
    ? Math.round(results.reduce(function(a, b) { return a + b; }, 0) / results.length)
    : 0;
  const myLines  = countLinesForSpeaker(DialogueState.roleCharacter);

  let medal = '🥉', feedbackText = 'Cần luyện thêm!';
  if (avg >= 85) { medal = '🥇'; feedbackText = 'Xuất sắc! Phát âm rất chuẩn!'; }
  else if (avg >= 70) { medal = '🥈'; feedbackText = 'Tốt lắm! Tiếp tục cố gắng!'; }
  else if (avg >= 55) { medal = '🥉'; feedbackText = 'Khá ổn! Thực hành thêm nhé!'; }

  const currentArea = document.getElementById('rp-current-area');
  if (currentArea) {
    currentArea.innerHTML = `
      <div class="rp-finish-card">
        <div class="rp-finish-medal">${medal}</div>
        <div class="rp-finish-title">Hoàn thành hội thoại!</div>
        <div class="rp-finish-feedback">${feedbackText}</div>
        <div class="rp-finish-stats">
          <div class="rp-stat"><span class="rp-stat-val">${avg}%</span><span class="rp-stat-lbl">Điểm TB</span></div>
          <div class="rp-stat"><span class="rp-stat-val">${results.length}/${myLines}</span><span class="rp-stat-lbl">Câu đạt</span></div>
          <div class="rp-stat"><span class="rp-stat-val">${skipped}</span><span class="rp-stat-lbl">Bỏ qua</span></div>
        </div>
        <div class="rp-finish-actions">
          <button class="dlg-btn dlg-roleplay" onclick="startRolePlay(${DialogueState.roleCharacter})">
            🔄 Thử lại
          </button>
          <button class="dlg-btn dlg-play-all" onclick="exitRolePlay()">
            💬 Xem hội thoại
          </button>
        </div>
      </div>
    `;
  }

  // Track progress
  recordStudyToday();
  saveState();
}

function exitRolePlay() {
  stopRPRecording();
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  DialogueState.mode = 'view';
  DialogueState.isRecording = false;
  renderDialogueView();
}

// =========================================
// SIMILARITY HELPER
// =========================================
function dialogueSimilarity(a, b) {
  if (a === b) return 1;
  if (!a || !b) return 0;
  const longer  = a.length >= b.length ? a : b;
  const shorter = a.length >= b.length ? b : a;
  const dist    = dialogueLevenshtein(longer, shorter);
  return (longer.length - dist) / longer.length;
}

function dialogueLevenshtein(a, b) {
  const dp = Array.from({ length: b.length + 1 }, function(_, i) { return i; });
  for (let i = 1; i <= a.length; i++) {
    let prev = i;
    for (let j = 1; j <= b.length; j++) {
      const curr = a[i-1] === b[j-1] ? dp[j-1] : Math.min(dp[j-1], dp[j], prev) + 1;
      dp[j-1] = prev; prev = curr;
    }
    dp[b.length] = prev;
  }
  return dp[b.length];
}

// =========================================
// TAB SWITCHER (called from shadowing lesson view)
// =========================================
function switchLessonTab(tab) {
  // tab: 'sentences' | 'dialogue' | 'roleplay'
  document.querySelectorAll('.lesson-tab-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });

  document.getElementById('lesson-sentences-panel').classList.toggle('hidden', tab !== 'sentences');
  document.getElementById('lesson-dialogue-panel').classList.toggle('hidden', tab !== 'dialogue');

  if (tab === 'dialogue') {
    // Init dialogue for current topic
    const idx = ShadowState.currentTopicIndex;
    if (idx !== null) {
      const dispTopic = ShadowState.displayTopics[idx];
      if (dispTopic) {
        const globalIdx = lessonsData.shadowing.findIndex(function(l) { return l.id === dispTopic.id; });
        if (globalIdx >= 0) initDialogue(globalIdx);
      }
    }
  } else if (tab === 'roleplay') {
    showRoleplaySelect();
    document.getElementById('lesson-dialogue-panel').classList.remove('hidden');
  }

  if (tab !== 'dialogue') stopDialogueSpeech();
}
