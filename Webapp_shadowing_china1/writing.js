/* ============================================
   WRITING.JS – Writing Practice Module
   ============================================ */

'use strict';

const WriteState = {
  currentLevel: 'hsk1',
  currentIndex: 0,
  currentMode: 'learn',
  charList: [],
  writer: null,
  strokeCount: 0,
  totalStrokes: 0,
};

/* ---- Ví dụ theo chữ: lấy từ LESSONS_DATA.shadowing ---- */
function getExamplesFromData(char) {
  const examples = [];
  if (window.LESSONS_DATA && LESSONS_DATA.shadowing) {
    LESSONS_DATA.shadowing.forEach(lesson => {
      lesson.sentences.forEach(s => {
        if (s.chinese.includes(char) && examples.length < 3) {
          examples.push({ cn: s.chinese, vn: s.vietnamese });
        }
      });
    });
  }
  if (examples.length === 0) {
    examples.push(
      { cn: char + '很重要。', vn: char + ' rất quan trọng.' },
      { cn: '我喜欢' + char + '。', vn: 'Tôi thích ' + char + '.' }
    );
  }
  return examples;
}

function getExamples(char) {
  return getExamplesFromData(char);
}

// ---- Init ----
function initWriting() {
  if (!lessonsData) return;
  switchHSKLevel(WriteState.currentLevel, true);
  showCharListView();
}

function showCharListView() {
  document.getElementById('writing-list-view').classList.remove('hidden');
  document.getElementById('writing-practice-view').classList.add('hidden');
  destroyWriter();
}

function showPracticeView(index) {
  WriteState.currentIndex = index;
  document.getElementById('writing-list-view').classList.add('hidden');
  document.getElementById('writing-practice-view').classList.remove('hidden');
  loadCharacter(index);
}

// ---- Level ----
function switchHSKLevel(level, silent) {
  WriteState.currentLevel = level;
  WriteState.charList = (lessonsData && lessonsData.writing && lessonsData.writing[level])
    ? lessonsData.writing[level]
    : [];
  document.querySelectorAll('.hsk-tab').forEach(t => t.classList.toggle('active', t.dataset.level === level));
  renderCharGrid();
  if (!silent) showToast('Đang xem ' + level.toUpperCase());
}

// ---- Grid ----
function renderCharGrid() {
  const grid = document.getElementById('char-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const learned = AppState.stats.learnedChars;
  WriteState.charList.forEach(function(item, index) {
    const isLearned = learned.has(item.char);
    const card = document.createElement('div');
    card.className = 'char-card' + (isLearned ? ' learned' : '');
    card.id = 'char-card-' + index;
    // Show lesson number if available
    const lessonTag = item.lesson ? `<div class="char-lesson-tag">Bài ${item.lesson}</div>` : '';
    card.innerHTML =
      '<span class="char-han">' + item.char + '</span>' +
      '<div class="char-py">' + item.pinyin + '</div>' +
      '<div class="char-meaning">' + item.meaning + '</div>' +
      lessonTag;
    card.addEventListener('click', function() { showPracticeView(index); });
    grid.appendChild(card);
  });
}

// ---- Load character ----
function loadCharacter(index) {
  const list = WriteState.charList;
  if (index < 0 || index >= list.length) return;
  const item = list[index];
  WriteState.currentIndex = index;
  WriteState.totalStrokes = item.strokes || 0;
  WriteState.strokeCount  = 0;

  setText('practice-char-display',   item.char);
  setText('practice-pinyin-display', item.pinyin);
  setText('practice-meaning-display', item.meaning);
  setText('char-nav-pos', (index + 1) + ' / ' + list.length);
  setText('stroke-total',   item.strokes);
  setText('stroke-current', 0);
  setStyle('stroke-bar-fill', 'width', '0%');

  hide('quiz-feedback');
  renderExamples(item.char);
  destroyWriter();

  setTimeout(function() {
    buildWriter(item.char);
    applyMode();
  }, 50);
}

// ---- Examples ----
function renderExamples(char) {
  const el = document.getElementById('example-sentences');
  if (!el) return;
  el.innerHTML = '';
  getExamples(char).forEach(function(ex) {
    const div = document.createElement('div');
    div.className = 'example-item';
    div.innerHTML =
      '<div class="example-cn">' + highlightChar(ex.cn, char) + '</div>' +
      '<div class="example-vn">' + ex.vn + '</div>';
    el.appendChild(div);
  });
}

function highlightChar(text, char) {
  return text.split(char).join('<span style="color:var(--accent-red-2);font-weight:700">' + char + '</span>');
}

// ---- HanziWriter ----
function buildWriter(char) {
  const container = document.getElementById('hanzi-writer-target');
  if (!container) return;
  container.innerHTML = '';

  if (!window.HanziWriter) {
    container.innerHTML =
      '<div style="display:flex;align-items:center;justify-content:center;height:100%">' +
      '<span style="font-family:serif;font-size:100px;color:rgba(255,255,255,0.2)">' + char + '</span></div>';
    return;
  }

  try {
    const size = container.parentElement.offsetWidth < 260 ? 200 : 220;
    WriteState.writer = HanziWriter.create(container, char, {
      width: size,
      height: size,
      padding: 10,
      showOutline: true,
      strokeColor: '#f0f0f8',
      outlineColor: 'rgba(255,255,255,0.1)',
      drawingColor: '#e8344a',
      drawingWidth: 6,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 400,
      showCharacter: true,
      radicalColor: '#f5a623',
    });
  } catch (e) {
    console.error('HanziWriter build error:', e);
  }
}

function destroyWriter() {
  WriteState.writer = null;
  const el = document.getElementById('hanzi-writer-target');
  if (el) el.innerHTML = '';
}

// ---- Mode ----
function setWritingMode(mode) {
  WriteState.currentMode = mode;
  document.querySelectorAll('.mode-btn').forEach(function(b) {
    b.classList.toggle('active', b.dataset.mode === mode);
  });
  hide('quiz-feedback');
  applyMode();
}

function applyMode() {
  const mode   = WriteState.currentMode;
  const writer = WriteState.writer;

  showEl('animate-btn', mode === 'learn');
  showEl('hint-btn',    mode === 'practice');
  showEl('reset-btn',   mode !== 'learn');

  if (!writer) return;

  if (mode === 'learn') {
    writer.showCharacter();
  } else if (mode === 'practice') {
    writer.hideCharacter();
    beginQuiz(false);
  } else if (mode === 'quiz') {
    writer.hideCharacter();
    beginQuiz(true);
  }
}

function beginQuiz(strict) {
  const writer = WriteState.writer;
  if (!writer) return;
  WriteState.strokeCount = 0;
  updateStrokeProgress(0);

  writer.quiz({
    onMistake: function(info) {
      if (!strict) writer.showHint({ duration: 900 });
    },
    onCorrectStroke: function(info) {
      WriteState.strokeCount++;
      const total = WriteState.strokeCount + (info.strokesRemaining || 0);
      if (total > WriteState.totalStrokes) WriteState.totalStrokes = total;
      updateStrokeProgress(WriteState.strokeCount);
    },
    onComplete: function(summary) {
      markLearned();
      showFeedback(summary.totalMistakes || 0);
    }
  });
}

function showFeedback(mistakes) {
  const el   = document.getElementById('quiz-feedback');
  const icon = document.getElementById('feedback-icon');
  const txt  = document.getElementById('feedback-text');
  if (!el) return;
  el.classList.remove('hidden');

  if (mistakes === 0) {
    icon.textContent = '🏆'; txt.textContent = 'Hoàn hảo! Không sai nét nào!';
    el.style.cssText = 'background:rgba(6,214,160,0.1);border:1px solid rgba(6,214,160,0.3);border-radius:var(--radius);padding:20px;text-align:center;margin-bottom:20px';
    showToast('🏆 Hoàn hảo!');
  } else if (mistakes <= 3) {
    icon.textContent = '✨'; txt.textContent = 'Giỏi! Chỉ sai ' + mistakes + ' lần.';
    el.style.cssText = 'background:rgba(245,166,35,0.1);border:1px solid rgba(245,166,35,0.3);border-radius:var(--radius);padding:20px;text-align:center;margin-bottom:20px';
    showToast('✨ Làm tốt lắm!');
  } else {
    icon.textContent = '💪'; txt.textContent = 'Cần luyện thêm! Sai ' + mistakes + ' lần.';
    el.style.cssText = 'background:rgba(232,52,74,0.1);border:1px solid rgba(232,52,74,0.3);border-radius:var(--radius);padding:20px;text-align:center;margin-bottom:20px';
    showToast('💪 Luyện thêm nhé!');
  }
}

function markLearned() {
  const item = WriteState.charList[WriteState.currentIndex];
  if (!item || AppState.stats.learnedChars.has(item.char)) return;
  AppState.stats.learnedChars.add(item.char);
  AppState.stats.chars++;
  recordStudyToday();
  saveState();
  const statEl = document.getElementById('stat-chars');
  if (statEl) statEl.textContent = AppState.stats.chars;
  const card = document.getElementById('char-card-' + WriteState.currentIndex);
  if (card && !card.classList.contains('learned')) {
    card.classList.add('learned');
  }
}

function updateStrokeProgress(current) {
  const total = WriteState.totalStrokes || 1;
  setText('stroke-current', current);
  setText('stroke-total',   total);
  setStyle('stroke-bar-fill', 'width', Math.min(100, Math.round(current / total * 100)) + '%');
}

// ---- Controls ----
function animateCharacter() {
  if (!WriteState.writer) return;
  WriteState.writer.animateCharacter({ onComplete: function() { showToast('✅ Hãy thử luyện tập!'); } });
}

function showHint() {
  if (!WriteState.writer) return;
  WriteState.writer.showHint({ duration: 1200 });
  showToast('💡 Gợi ý nét tiếp theo');
}

function resetDrawing() {
  if (!WriteState.writer) return;
  try { WriteState.writer.cancelQuiz(); } catch(e) {}
  hide('quiz-feedback');
  WriteState.strokeCount = 0;
  updateStrokeProgress(0);
  setTimeout(applyMode, 80);
  showToast('🔄 Đã xóa – thử lại nào!');
}

function prevCharacter() {
  if (WriteState.currentIndex > 0) loadCharacter(WriteState.currentIndex - 1);
  else showToast('Đây là chữ đầu tiên');
}

function nextCharacter() {
  if (WriteState.currentIndex < WriteState.charList.length - 1) loadCharacter(WriteState.currentIndex + 1);
  else showToast('🎉 Đã học hết! Chọn cấp độ tiếp theo!');
}

// ---- DOM helpers ----
function setText(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; }
function setStyle(id, prop, val) { const el = document.getElementById(id); if (el) el.style[prop] = val; }
function hide(id) { const el = document.getElementById(id); if (el) el.classList.add('hidden'); }
function showEl(id, visible) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = visible ? '' : 'none';
}

// ---- Back button ----
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('writing-back-btn');
  if (btn) btn.addEventListener('click', showCharListView);
});
