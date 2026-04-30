/* ============================================
   APP.JS – Main Application Controller
   ============================================ */

'use strict';

// ---- Global State ----
const AppState = {
  currentPage: 'dashboard',
  stats: {
    sentences: 0,
    chars: 0,
    streak: 0,
    minutes: 0,
    lastStudied: null,
    learnedChars: new Set(),
    doneSentences: new Set(),
    srsVocab: {},
  },
  sessionStart: Date.now(),
  lessonsFilter: 'all',  // 'all' | 'HSK 1' | 'HSK 2' | 'HSK 3'
};

// lessonsData is set from LESSONS_DATA (data.js)
let lessonsData = null;

// ---- Init ----
function init() {
  lessonsData = (typeof LESSONS_DATA !== 'undefined')
    ? LESSONS_DATA
    : { shadowing: [], writing: { hsk1: [], hsk2: [], hsk3: [] } };

  loadState();
  setupEventListeners();

  // Show app after splash animation
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if (splash) splash.classList.add('fade-out');
    setTimeout(() => {
      if (splash) splash.remove();
      const app = document.getElementById('app');
      if (app) app.classList.remove('hidden');
      renderDashboard();
    }, 600);
  }, 1800);

  // Track session time every minute
  setInterval(trackSessionTime, 60000);
}

// ---- State Persistence ----
function loadState() {
  try {
    const saved = localStorage.getItem('cn_app_state');
    if (saved) {
      const p = JSON.parse(saved);
      AppState.stats.sentences = p.sentences || 0;
      AppState.stats.chars = p.chars || 0;
      AppState.stats.streak = p.streak || 0;
      AppState.stats.minutes = p.minutes || 0;
      AppState.stats.heatmap = p.heatmap || {};
      AppState.stats.learnedChars = new Set(p.learnedChars || []);
      AppState.stats.doneSentences = new Set(p.doneSentences || []);
      AppState.stats.srsVocab = p.srsVocab || {};
      checkStreak();
    }
  } catch (e) { console.error('loadState error', e); }
}

function saveState() {
  try {
    localStorage.setItem('cn_app_state', JSON.stringify({
      sentences: AppState.stats.sentences,
      chars: AppState.stats.chars,
      streak: AppState.stats.streak,
      minutes: AppState.stats.minutes,
      heatmap: AppState.stats.heatmap,
      learnedChars: [...AppState.stats.learnedChars],
      doneSentences: [...AppState.stats.doneSentences],
      srsVocab: AppState.stats.srsVocab,
    }));
  } catch (e) { console.error('saveState error', e); }
}

function checkStreak() {
  const yesterday = getDateStr(-1);
  const last = AppState.stats.lastStudied;
  if (last && last < yesterday) {
    AppState.stats.streak = 0;
    saveState();
  }
}

function recordStudyToday() {
  const today = getTodayStr();
  const yesterday = getDateStr(-1);
  const last = AppState.stats.lastStudied;

  if (last !== today) {
    AppState.stats.streak = (last === yesterday) ? AppState.stats.streak + 1
      : (!last) ? 1
        : 1;
    AppState.stats.lastStudied = today;
  }
  AppState.stats.heatmap[today] = (AppState.stats.heatmap[today] || 0) + 1;
  saveState();
  updateStreakUI();
}

function trackSessionTime() {
  const elapsed = Math.floor((Date.now() - AppState.sessionStart) / 60000);
  if (elapsed > AppState.stats.minutes) {
    AppState.stats.minutes = elapsed;
    saveState();
    const el = document.getElementById('stat-minutes');
    if (el) el.textContent = AppState.stats.minutes;
  }
}

// ---- Page Navigation ----
function goToPage(page) {
  AppState.currentPage = page;

  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });
  document.querySelectorAll('.page').forEach(el => {
    el.classList.toggle('active', el.id === `page-${page}`);
  });

  const titles = {
    dashboard: 'Tổng quan',
    lessons: 'Bài học',
    shadowing: 'Shadowing',
    writing: 'Luyện viết',
    vocab: 'Từ vựng SRS',
  };
  const titleEl = document.getElementById('mobile-title');
  if (titleEl) titleEl.textContent = titles[page] || '';

  closeSidebar();

  if (page === 'dashboard') renderDashboard();
  if (page === 'lessons') initLessonsPage();
  if (page === 'shadowing') initShadowing();
  if (page === 'writing') initWriting();
  if (page === 'vocab') initVocab();
}

// ---- LESSONS PAGE ----
function initLessonsPage() {
  renderLessonsGrid(AppState.lessonsFilter);
}

function renderLessonsGrid(filter) {
  AppState.lessonsFilter = filter;
  const grid = document.getElementById('lessons-grid');
  if (!grid) return;
  grid.innerHTML = '';

  // Update tab states
  document.querySelectorAll('#lesson-level-tabs .lesson-level-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });

  const lessons = lessonsData && lessonsData.shadowing ? lessonsData.shadowing : [];
  const filtered = filter === 'all' ? lessons : lessons.filter(l => l.level === filter);

  filtered.forEach(lesson => {
    const total = lesson.sentences.length;
    const done = lesson.sentences.filter(s =>
      AppState.stats.doneSentences.has(lesson.id + '_' + s.id)
    ).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const isComplete = done === total && total > 0;

    const card = document.createElement('div');
    card.className = 'lesson-card' + (isComplete ? ' lesson-complete' : '');
    card.id = 'lesson-card-' + lesson.id;
    card.innerHTML = `
      <div class="lesson-card-header">
        <span class="lesson-card-num">Bài ${lesson.lesson}</span>
        <span class="lesson-card-level level-${lesson.level.replace(' ', '').toLowerCase()}">${lesson.level}</span>
      </div>
      <div class="lesson-card-icon">${lesson.icon}</div>
      <div class="lesson-card-topic">${lesson.topic}</div>
      <div class="lesson-card-grammar">${lesson.grammar || ''}</div>
      <div class="lesson-card-progress">
        <div class="lcp-bar-bg">
          <div class="lcp-bar-fill" style="width:${pct}%"></div>
        </div>
        <span class="lcp-text">${done}/${total}</span>
      </div>
      ${isComplete ? '<div class="lesson-complete-badge">✓ Hoàn thành</div>' : ''}
    `;
    card.addEventListener('click', () => openLessonFromCard(lesson.id));
    grid.appendChild(card);
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state">Không có bài học nào.</div>';
  }
}

function filterLessonsByLevel(filter) {
  renderLessonsGrid(filter);
}

/**
 * Mở một bài học từ trang Lessons → chuyển sang Shadowing, load bài đó ngay
 */
function openLessonFromCard(lessonId) {
  goToPage('shadowing');
  // Sau khi initShadowing chạy xong, mở bài học theo id
  setTimeout(() => {
    const idx = (lessonsData && lessonsData.shadowing)
      ? lessonsData.shadowing.findIndex(l => l.id === lessonId)
      : -1;
    if (idx >= 0) showLessonView(idx);
  }, 100);
}

// ---- DASHBOARD ----
function renderDashboard() {
  const s = AppState.stats;
  animateNumber('stat-sentences', s.sentences);
  animateNumber('stat-chars', s.chars);
  animateNumber('stat-streak', s.streak);
  animateNumber('stat-minutes', s.minutes);

  const now = new Date();
  const days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
  const dateEl = document.getElementById('dashboard-date');
  if (dateEl) {
    dateEl.textContent = `${days[now.getDay()]}, ${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`;
  }

  renderHeatmap();
  renderHSKProgress();
  updateStreakUI();
}

function animateNumber(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = parseInt(el.textContent) || 0;
  if (start === target) return;
  const steps = 30;
  let step = 0;
  const timer = setInterval(() => {
    step++;
    el.textContent = Math.round(start + (target - start) * (step / steps));
    if (step >= steps) { clearInterval(timer); el.textContent = target; }
  }, 16);
}

function renderHeatmap() {
  const hm = document.getElementById('heatmap');
  if (!hm) return;
  hm.innerHTML = '';
  const heatmap = AppState.stats.heatmap;
  for (let i = 27; i >= 0; i--) {
    const date = getDateStr(-i);
    const count = heatmap[date] || 0;
    const cell = document.createElement('div');
    cell.className = `heatmap-cell ${getHeatLevel(count)}`;
    cell.title = `${formatDate(date)}: ${count} hoạt động`;
    hm.appendChild(cell);
  }
}

function getHeatLevel(count) {
  if (count === 0) return 'l0';
  if (count <= 2) return 'l1';
  if (count <= 5) return 'l2';
  if (count <= 10) return 'l3';
  return 'l4';
}

function renderHSKProgress() {
  const container = document.getElementById('hsk-progress');
  if (!container) return;
  container.innerHTML = '';

  const lessons = lessonsData && lessonsData.shadowing ? lessonsData.shadowing : [];
  const hsk1Lessons = lessons.filter(l => l.level === 'HSK 1');
  const hsk2Lessons = lessons.filter(l => l.level === 'HSK 2');
  const hsk3Lessons = lessons.filter(l => l.level === 'HSK 3');

  function countDone(lessonArr) {
    let done = 0, total = 0;
    lessonArr.forEach(lesson => {
      lesson.sentences.forEach(s => {
        total++;
        if (AppState.stats.doneSentences.has(lesson.id + '_' + s.id)) done++;
      });
    });
    return { done, total };
  }

  const levels = [
    { label: 'HSK 1', ...countDone(hsk1Lessons), color: 'var(--accent-jade)' },
    { label: 'HSK 2', ...countDone(hsk2Lessons), color: 'var(--accent-gold)' },
    { label: 'HSK 3', ...countDone(hsk3Lessons), color: 'var(--accent-red-2)' },
  ];

  levels.forEach(({ label, done, total, color }) => {
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const row = document.createElement('div');
    row.className = 'hsk-level-row';
    row.innerHTML = `
      <span class="hsk-level-label">${label}</span>
      <div class="hsk-bar-bg">
        <div class="hsk-bar-fill" style="width:0%;background:${color}" data-target="${pct}"></div>
      </div>
      <span class="hsk-progress-pct">${done}/${total} câu</span>`;
    container.appendChild(row);
  });

  // Writing chars progress
  const writingLevels = [
    { key: 'hsk1', label: 'HSK 1 Viết', total: lessonsData?.writing?.hsk1?.length || 0 },
    { key: 'hsk2', label: 'HSK 2 Viết', total: lessonsData?.writing?.hsk2?.length || 0 },
    { key: 'hsk3', label: 'HSK 3 Viết', total: lessonsData?.writing?.hsk3?.length || 0 },
  ];
  const learned = AppState.stats.learnedChars;
  writingLevels.forEach(({ key, label, total }) => {
    const chars = lessonsData?.writing?.[key] || [];
    const count = chars.filter(c => learned.has(c.char)).length;
    const pct = total > 0 ? Math.round((count / total) * 100) : 0;
    const row = document.createElement('div');
    row.className = 'hsk-level-row';
    row.innerHTML = `
      <span class="hsk-level-label">${label}</span>
      <div class="hsk-bar-bg">
        <div class="hsk-bar-fill" style="width:0%" data-target="${pct}"></div>
      </div>
      <span class="hsk-progress-pct">${count}/${total} chữ</span>`;
    container.appendChild(row);
  });

  setTimeout(() => {
    document.querySelectorAll('.hsk-bar-fill').forEach(bar => {
      bar.style.width = (bar.dataset.target || 0) + '%';
    });
  }, 100);
}

function updateStreakUI() {
  const streak = AppState.stats.streak;
  const s1 = document.getElementById('sidebar-streak-count');
  const s2 = document.getElementById('mobile-streak-count');
  if (s1) s1.textContent = streak;
  if (s2) s2.textContent = streak;
  const s3 = document.getElementById('stat-streak');
  if (s3) s3.textContent = streak;
}

// ---- Event Listeners ----
function setupEventListeners() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => goToPage(btn.dataset.page));
  });

  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) menuToggle.addEventListener('click', toggleSidebar);
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebar-overlay').classList.toggle('open');
}
function closeSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebar-overlay');
  if (sb) sb.classList.remove('open');
  if (ov) ov.classList.remove('open');
}

// ---- Helpers ----
function getTodayStr() { return getDateStr(0); }
function getDateStr(offset) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().split('T')[0];
}
function formatDate(str) {
  const [y, m, d] = str.split('-');
  return `${d}/${m}/${y}`;
}
function pad(n) { return String(n).padStart(2, '0'); }

// ---- Toast ----
let toastTimer = null;
function showToast(msg, duration) {
  duration = duration || 2500;
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), duration);
}

// ---- Entry Point ----
document.addEventListener('DOMContentLoaded', init);
