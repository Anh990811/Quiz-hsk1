/* ============================================
   SHADOWING.JS – Shadowing Module
   ============================================ */

'use strict';

const ShadowState = {
  topics: [],           // all loaded topics
  displayTopics: [],    // filtered for current level
  currentLevelFilter: 'all',
  currentTopicIndex: null,  // index in displayTopics
  currentSentenceIndex: 0,
  speed: 0.75,
  isLooping: false,
  isAutoNext: false,
  isRecording: false,
  recognition: null,
  loopTimer: null,
  autoNextTimer: null,
};

// ---- Init ----
function initShadowing() {
  ShadowState.topics = (lessonsData && lessonsData.shadowing) ? lessonsData.shadowing : [];
  filterShadowByLevel(ShadowState.currentLevelFilter);
  showTopicView();
}

// ---- Level Filter ----
function filterShadowByLevel(level) {
  ShadowState.currentLevelFilter = level;

  // Update tab UI
  document.querySelectorAll('#shadow-level-tabs .hsk-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === level);
  });

  if (level === 'all') {
    ShadowState.displayTopics = [...ShadowState.topics];
  } else {
    ShadowState.displayTopics = ShadowState.topics.filter(t => t.level === level);
  }

  renderTopicGrid();
}

// ---- Views ----
function showTopicView() {
  document.getElementById('shadow-topic-view').classList.remove('hidden');
  document.getElementById('shadow-lesson-view').classList.add('hidden');
  stopEverything();
}

function showLessonView(topicIndex) {
  // topicIndex can be relative to displayTopics, or we search by raw index
  let idx = topicIndex;
  // If called from openLessonFromCard with global index, map to displayTopics
  if (ShadowState.displayTopics.length > 0) {
    const lesson = ShadowState.topics[topicIndex];
    if (lesson) {
      const dispIdx = ShadowState.displayTopics.findIndex(t => t.id === lesson.id);
      if (dispIdx >= 0) idx = dispIdx;
    }
  }

  ShadowState.currentTopicIndex = idx;
  ShadowState.currentSentenceIndex = 0;
  document.getElementById('shadow-topic-view').classList.add('hidden');
  document.getElementById('shadow-lesson-view').classList.remove('hidden');

  const topic = ShadowState.displayTopics[idx];
  if (!topic) return;

  document.getElementById('lesson-icon').textContent     = topic.icon || '📝';
  document.getElementById('lesson-title').textContent    = `Bài ${topic.lesson}: ${topic.topic}`;
  document.getElementById('lesson-level-badge').textContent = topic.level;

  // Grammar note
  const grammarEl = document.getElementById('lesson-grammar-note');
  if (grammarEl) {
    if (topic.grammar) {
      grammarEl.textContent = '📌 Ngữ pháp: ' + topic.grammar;
      grammarEl.style.display = '';
    } else {
      grammarEl.style.display = 'none';
    }
  }

  renderSentenceList();
  loadSentence(0);
  setupRecognition();
}

// ---- Topic Grid ----
function renderTopicGrid() {
  const grid = document.getElementById('topic-grid');
  if (!grid) return;
  grid.innerHTML = '';

  ShadowState.displayTopics.forEach(function(topic, index) {
    const total = topic.sentences.length;
    const done  = topic.sentences.filter(function(s) {
      return AppState.stats.doneSentences.has(topic.id + '_' + s.id);
    }).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;

    const card = document.createElement('div');
    card.className = 'topic-card' + (done === total && total > 0 ? ' topic-done' : '');
    card.id = 'topic-card-' + index;

    card.innerHTML =
      '<span class="topic-lesson-num">Bài ' + topic.lesson + '</span>' +
      '<span class="topic-icon">' + (topic.icon || '📝') + '</span>' +
      '<div class="topic-name">' + topic.topic + '</div>' +
      '<div class="topic-grammar">' + (topic.grammar || '') + '</div>' +
      '<div class="topic-progress-bar"><div class="topic-progress-fill" style="width:' + pct + '%"></div></div>' +
      '<div class="topic-count">' + done + '/' + total + ' câu · ' + pct + '%</div>' +
      '<span class="topic-level">' + topic.level + '</span>';
    card.addEventListener('click', function() { showLessonView(index); });
    grid.appendChild(card);
  });

  if (ShadowState.displayTopics.length === 0) {
    grid.innerHTML = '<div class="empty-state">Không có chủ đề nào.</div>';
  }
}

// ---- Load Sentence ----
function loadSentence(index) {
  const topic = ShadowState.displayTopics[ShadowState.currentTopicIndex];
  if (!topic) return;
  const sentences = topic.sentences;
  if (index < 0 || index >= sentences.length) return;

  ShadowState.currentSentenceIndex = index;
  const s = sentences[index];

  document.getElementById('sentence-num').textContent     = index + 1;
  document.getElementById('sentence-chinese').textContent = s.chinese;
  document.getElementById('sentence-pinyin').textContent  = s.pinyin;

  const transEl = document.getElementById('sentence-translation');
  if (transEl) {
    transEl.textContent = '🇻🇳 ' + s.vietnamese + '   |   🇬🇧 ' + s.english;
    transEl.classList.add('hidden');
  }
  const toggleBtn = document.getElementById('trans-toggle');
  if (toggleBtn) toggleBtn.textContent = '👁️ Hiện nghĩa';

  const pct = ((index + 1) / sentences.length) * 100;
  document.getElementById('lesson-progress-fill').style.width = pct + '%';
  document.getElementById('lesson-progress-text').textContent = (index + 1) + ' / ' + sentences.length + ' câu';

  // Highlight active in list
  document.querySelectorAll('.sentence-item').forEach(function(el, i) {
    el.classList.toggle('active', i === index);
  });

  clearResult();
  stopSpeaking();
}

// ---- Sentence List ----
function renderSentenceList() {
  const topic = ShadowState.displayTopics[ShadowState.currentTopicIndex];
  const list  = document.getElementById('sentence-list');
  if (!list || !topic) return;
  list.innerHTML = '';

  topic.sentences.forEach(function(s, i) {
    const isDone = AppState.stats.doneSentences.has(topic.id + '_' + s.id);
    const item   = document.createElement('div');
    item.className = 'sentence-item' + (isDone ? ' done' : '');
    item.id = 'sitem-' + i;
    item.innerHTML =
      '<span class="s-num">' + (i + 1) + '</span>' +
      '<div class="s-text">' +
        '<div class="s-chinese">' + s.chinese + '</div>' +
        '<div class="s-pinyin">' + s.pinyin + '</div>' +
      '</div>' +
      (isDone ? '<span class="s-check">✓</span>' : '');
    item.addEventListener('click', function() { loadSentence(i); stopSpeaking(); });
    list.appendChild(item);
  });
}

// ---- Playback ----
function playSentence() {
  const topic = ShadowState.displayTopics[ShadowState.currentTopicIndex];
  if (!topic) return;
  const s = topic.sentences[ShadowState.currentSentenceIndex];
  if (!s) return;

  stopSpeaking();
  speakText(s.chinese, function() {
    const key = topic.id + '_' + s.id;
    if (!AppState.stats.doneSentences.has(key)) {
      AppState.stats.doneSentences.add(key);
      AppState.stats.sentences++;
      recordStudyToday();
      saveState();
      const statEl = document.getElementById('stat-sentences');
      if (statEl) statEl.textContent = AppState.stats.sentences;
      markSentenceDone(ShadowState.currentSentenceIndex, topic.id, ShadowState.currentTopicIndex);
    }

    if (ShadowState.isLooping) {
      ShadowState.loopTimer = setTimeout(playSentence, 900);
    } else if (ShadowState.isAutoNext) {
      ShadowState.autoNextTimer = setTimeout(nextSentence, 1500);
    }
  });
}

function speakText(text, onEnd) {
  if (!window.speechSynthesis) {
    showToast('⚠️ Trình duyệt không hỗ trợ giọng đọc');
    return;
  }
  const utter  = new SpeechSynthesisUtterance(text);
  utter.lang   = 'zh-CN';
  utter.rate   = ShadowState.speed;
  utter.pitch  = 1;

  const btn = document.getElementById('play-btn');
  if (btn) { btn.textContent = '⏸ Đang phát...'; btn.classList.remove('pulse-btn'); }

  utter.onend = function() {
    if (btn) { btn.textContent = '▶ Phát'; btn.classList.add('pulse-btn'); }
    if (onEnd) onEnd();
  };
  utter.onerror = function() {
    if (btn) { btn.textContent = '▶ Phát'; btn.classList.add('pulse-btn'); }
  };

  window.speechSynthesis.speak(utter);
}

function stopSpeaking() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  if (ShadowState.loopTimer)     { clearTimeout(ShadowState.loopTimer);    ShadowState.loopTimer    = null; }
  if (ShadowState.autoNextTimer) { clearTimeout(ShadowState.autoNextTimer); ShadowState.autoNextTimer = null; }
  const btn = document.getElementById('play-btn');
  if (btn) { btn.textContent = '▶ Phát'; btn.classList.add('pulse-btn'); }
}

function stopEverything() {
  stopSpeaking();
  stopRecording();
}

function setSpeed(speed) {
  ShadowState.speed = speed;
  document.querySelectorAll('.speed-btn').forEach(function(b) {
    b.classList.toggle('active', parseFloat(b.dataset.speed) === speed);
  });
  showToast('⚡ Tốc độ: ' + speed + '×');
}

function prevSentence() {
  stopEverything();
  const idx = ShadowState.currentSentenceIndex - 1;
  if (idx >= 0) loadSentence(idx);
  else showToast('Đây là câu đầu tiên');
}

function nextSentence() {
  stopEverything();
  const topic = ShadowState.displayTopics[ShadowState.currentTopicIndex];
  const idx   = ShadowState.currentSentenceIndex + 1;
  if (topic && idx < topic.sentences.length) loadSentence(idx);
  else showToast('🎉 Đã hoàn thành bài này!');
}

function toggleTranslation() {
  const el  = document.getElementById('sentence-translation');
  const btn = document.getElementById('trans-toggle');
  if (!el) return;
  const hidden = el.classList.contains('hidden');
  el.classList.toggle('hidden', !hidden);
  if (btn) btn.textContent = hidden ? '🙈 Ẩn nghĩa' : '👁️ Hiện nghĩa';
}

function toggleLoop(checkbox) {
  ShadowState.isLooping = checkbox.checked;
  if (ShadowState.isLooping) {
    ShadowState.isAutoNext = false;
    document.getElementById('auto-next-toggle').checked = false;
    showToast('🔁 Bật lặp lại');
  }
}

function toggleAutoNext(checkbox) {
  ShadowState.isAutoNext = checkbox.checked;
  if (ShadowState.isAutoNext) {
    ShadowState.isLooping = false;
    document.getElementById('loop-toggle').checked = false;
    showToast('⏭ Bật tự chuyển câu');
  }
}

// ---- Speech Recognition ----
function setupRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return;

  const r = new SR();
  r.lang = 'zh-CN';
  r.continuous = false;
  r.interimResults = true;
  r.maxAlternatives = 1;

  r.onresult = function(e) {
    const text    = Array.from(e.results).map(function(x) { return x[0].transcript; }).join('');
    const isFinal = e.results[e.results.length - 1].isFinal;
    displayResult(text, isFinal);
  };
  r.onend   = function() { if (ShadowState.isRecording) stopRecording(); };
  r.onerror = function(e) { if (e.error !== 'aborted') showToast('⚠️ Lỗi ghi âm: ' + e.error); stopRecording(); };

  ShadowState.recognition = r;
}

function toggleRecord() {
  if (ShadowState.isRecording) stopRecording();
  else startRecording();
}

function startRecording() {
  if (!ShadowState.recognition) {
    showToast('⚠️ Trình duyệt không hỗ trợ – Hãy dùng Chrome!', 3000);
    return;
  }
  stopSpeaking();
  ShadowState.isRecording = true;
  ShadowState.recognition.start();

  const btn = document.getElementById('record-btn');
  if (btn) btn.classList.add('recording');
  const lbl = document.getElementById('record-label');
  if (lbl) lbl.textContent = '⏹ Dừng lại';
  const wv = document.getElementById('record-waveform');
  if (wv) wv.classList.add('active');
  showToast('🎙️ Đang ghi âm – Hãy nói tiếng Trung!');
}

function stopRecording() {
  ShadowState.isRecording = false;
  if (ShadowState.recognition) { try { ShadowState.recognition.stop(); } catch(e){} }
  const btn = document.getElementById('record-btn');
  if (btn) btn.classList.remove('recording');
  const lbl = document.getElementById('record-label');
  if (lbl) lbl.textContent = '🎙️ Ghi âm';
  const wv = document.getElementById('record-waveform');
  if (wv) wv.classList.remove('active');
}

function displayResult(text, isFinal) {
  const topic = ShadowState.displayTopics[ShadowState.currentTopicIndex];
  const s     = topic && topic.sentences[ShadowState.currentSentenceIndex];
  const el    = document.getElementById('recognition-result');
  if (!el) return;

  if (!isFinal) { el.innerHTML = '<span style="color:var(--accent-gold)">🎙️ ' + (text || '...') + '</span>'; return; }

  if (!s) return;
  const got      = text.trim().replace(/[，。！？\s]/g, '');
  const expected = s.chinese.trim().replace(/[，。！？\s]/g, '');
  const sim      = similarity(got, expected);

  let html;
  if (sim >= 0.85) {
    html = '<span style="color:var(--accent-jade);font-weight:600">🎉 Xuất sắc! (' + Math.round(sim * 100) + '%)</span>';
    showToast('🎉 Phát âm rất tốt!');
  } else if (sim >= 0.55) {
    html = '<span style="color:var(--accent-gold);font-weight:600">👍 Khá tốt! (' + Math.round(sim * 100) + '%) – Bạn nói: "' + text + '"</span>';
    showToast('👍 Tiếp tục cố gắng!');
  } else {
    html = '<span style="color:var(--accent-red-2)">💪 Thử lại nhé! Bạn nói: "' + text + '"</span>';
    showToast('💪 Luyện thêm nhé!');
  }
  el.innerHTML = html;
}

function clearResult() {
  const el = document.getElementById('recognition-result');
  if (el) el.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem">Nhấn Ghi âm rồi đọc câu phía trên</span>';
}

function similarity(a, b) {
  if (a === b) return 1;
  if (!a || !b) return 0;
  const longer  = a.length >= b.length ? a : b;
  const shorter = a.length >= b.length ? b : a;
  const dist    = levenshtein(longer, shorter);
  return (longer.length - dist) / longer.length;
}

function levenshtein(a, b) {
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

function markSentenceDone(sIndex, topicId, topicIndex) {
  const item = document.getElementById('sitem-' + sIndex);
  if (item && !item.classList.contains('done')) {
    item.classList.add('done');
    if (!item.querySelector('.s-check')) {
      const chk = document.createElement('span');
      chk.className = 's-check'; chk.textContent = '✓';
      item.appendChild(chk);
    }
  }
  // Update topic card count
  const topic = ShadowState.displayTopics[topicIndex];
  if (!topic) return;
  const total = topic.sentences.length;
  const done  = topic.sentences.filter(function(s) {
    return AppState.stats.doneSentences.has(topicId + '_' + s.id);
  }).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const card = document.getElementById('topic-card-' + topicIndex);
  if (card) {
    const cnt = card.querySelector('.topic-count');
    if (cnt) cnt.textContent = done + '/' + total + ' câu · ' + pct + '%';
    const fill = card.querySelector('.topic-progress-fill');
    if (fill) fill.style.width = pct + '%';
    if (done === total) card.classList.add('topic-done');
  }
}

// ---- Back button ----
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('shadow-back-btn');
  if (btn) btn.addEventListener('click', showTopicView);
});
