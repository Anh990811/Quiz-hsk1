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

const EXAMPLES = {
  '你': [{ cn:'你好！', vn:'Xin chào!' }, { cn:'你叫什么名字？', vn:'Bạn tên là gì?' }],
  '我': [{ cn:'我是学生。', vn:'Tôi là học sinh.' }, { cn:'我很好。', vn:'Tôi rất khỏe.' }],
  '好': [{ cn:'你好！', vn:'Xin chào!' }, { cn:'好吃极了！', vn:'Ngon tuyệt!' }],
  '是': [{ cn:'我是越南人。', vn:'Tôi là người Việt Nam.' }, { cn:'这是什么？', vn:'Đây là cái gì?' }],
  '大': [{ cn:'这个很大。', vn:'Cái này rất to.' }, { cn:'大学很好。', vn:'Đại học rất tốt.' }],
  '小': [{ cn:'我有一只小猫。', vn:'Tôi có một con mèo nhỏ.' }, { cn:'这个杯子太小了。', vn:'Cái cốc này quá nhỏ.' }],
  '人': [{ cn:'他是好人。', vn:'Anh ấy là người tốt.' }, { cn:'中国人很多。', vn:'Người Trung Quốc rất đông.' }],
  '中': [{ cn:'我在学中文。', vn:'Tôi đang học tiếng Trung.' }, { cn:'中国很大。', vn:'Trung Quốc rất to.' }],
  '国': [{ cn:'中国是大国。', vn:'Trung Quốc là đất nước lớn.' }, { cn:'我爱我的国家。', vn:'Tôi yêu đất nước của mình.' }],
  '学': [{ cn:'我在学汉语。', vn:'Tôi đang học tiếng Trung.' }, { cn:'学习很重要。', vn:'Học tập rất quan trọng.' }],
  '吃': [{ cn:'你想吃什么？', vn:'Bạn muốn ăn gì?' }, { cn:'我喜欢吃饺子。', vn:'Tôi thích ăn há cảo.' }],
  '喝': [{ cn:'我想喝茶。', vn:'Tôi muốn uống trà.' }, { cn:'你喝水吗？', vn:'Bạn có uống nước không?' }],
  '爱': [{ cn:'我爱你。', vn:'Tôi yêu bạn.' }, { cn:'我爱学习。', vn:'Tôi yêu học tập.' }],
  '看': [{ cn:'我看书。', vn:'Tôi đọc sách.' }, { cn:'你看什么电影？', vn:'Bạn xem phim gì?' }],
  '听': [{ cn:'我听音乐。', vn:'Tôi nghe nhạc.' }, { cn:'听老师说话。', vn:'Nghe thầy giáo nói.' }],
  '买': [{ cn:'我想买书。', vn:'Tôi muốn mua sách.' }, { cn:'你买什么？', vn:'Bạn mua gì?' }],
  '家': [{ cn:'我家很大。', vn:'Nhà tôi rất to.' }, { cn:'你家在哪里？', vn:'Nhà bạn ở đâu?' }],
};

function getExamples(char) {
  return EXAMPLES[char] || [
    { cn: char + '很重要。', vn: char + ' rất quan trọng.' },
    { cn: '我喜欢' + char + '。', vn: 'Tôi thích ' + char + '.' },
  ];
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
  WriteState.charList = (lessonsData && lessonsData.writing && lessonsData.writing[level]) ? lessonsData.writing[level] : [];
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
    card.innerHTML =
      '<span class="char-han">' + item.char + '</span>' +
      '<div class="char-py">' + item.pinyin + '</div>' +
      '<div class="char-meaning">' + item.meaning + '</div>';
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

  // small delay so DOM is ready
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
      // info.strokesRemaining tells us how many left
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
