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
    heatmap: {},
    learnedChars: new Set(),
    doneSentences: new Set(),
  },
  sessionStart: Date.now(),
};

// lessonsData is set from LESSONS_DATA (data.js)
let lessonsData = null;

// ---- Init ----
function init() {
  // Use embedded data - no fetch needed
  lessonsData = (typeof LESSONS_DATA !== 'undefined') ? LESSONS_DATA : { shadowing: [], writing: { hsk1: [], hsk2: [], hsk3: [] } };

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
      AppState.stats.sentences   = p.sentences  || 0;
      AppState.stats.chars       = p.chars       || 0;
      AppState.stats.streak      = p.streak      || 0;
      AppState.stats.minutes     = p.minutes     || 0;
      AppState.stats.lastStudied = p.lastStudied || null;
      AppState.stats.heatmap     = p.heatmap     || {};
      AppState.stats.learnedChars  = new Set(p.learnedChars  || []);
      AppState.stats.doneSentences = new Set(p.doneSentences || []);
      checkStreak();
    }
  } catch (e) { console.error('loadState error', e); }
}

function saveState() {
  try {
    localStorage.setItem('cn_app_state', JSON.stringify({
      sentences:     AppState.stats.sentences,
      chars:         AppState.stats.chars,
      streak:        AppState.stats.streak,
      minutes:       AppState.stats.minutes,
      lastStudied:   AppState.stats.lastStudied,
      heatmap:       AppState.stats.heatmap,
      learnedChars:  [...AppState.stats.learnedChars],
      doneSentences: [...AppState.stats.doneSentences],
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
                          : (!last)              ? 1
                          :                        1;
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

  const titles = { dashboard: 'Tổng quan', shadowing: 'Shadowing', writing: 'Luyện viết' };
  const titleEl = document.getElementById('mobile-title');
  if (titleEl) titleEl.textContent = titles[page] || '';

  closeSidebar();

  if (page === 'dashboard') renderDashboard();
  if (page === 'shadowing') initShadowing();
  if (page === 'writing')   initWriting();
}

// ---- DASHBOARD ----
function renderDashboard() {
  const s = AppState.stats;
  animateNumber('stat-sentences', s.sentences);
  animateNumber('stat-chars',     s.chars);
  animateNumber('stat-streak',    s.streak);
  animateNumber('stat-minutes',   s.minutes);

  const now  = new Date();
  const days = ['Chủ nhật','Thứ hai','Thứ ba','Thứ tư','Thứ năm','Thứ sáu','Thứ bảy'];
  const dateEl = document.getElementById('dashboard-date');
  if (dateEl) {
    dateEl.textContent = `${days[now.getDay()]}, ${pad(now.getDate())}/${pad(now.getMonth()+1)}/${now.getFullYear()}`;
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
    const date  = getDateStr(-i);
    const count = heatmap[date] || 0;
    const cell  = document.createElement('div');
    cell.className = `heatmap-cell ${getHeatLevel(count)}`;
    cell.title = `${formatDate(date)}: ${count} hoạt động`;
    hm.appendChild(cell);
  }
}

function getHeatLevel(count) {
  if (count === 0) return 'l0';
  if (count <= 2)  return 'l1';
  if (count <= 5)  return 'l2';
  if (count <= 10) return 'l3';
  return 'l4';
}

function renderHSKProgress() {
  const container = document.getElementById('hsk-progress');
  if (!container) return;
  container.innerHTML = '';

  const levels = [
    { key: 'hsk1', label: 'HSK 1', total: (lessonsData?.writing?.hsk1?.length || 40) },
    { key: 'hsk2', label: 'HSK 2', total: (lessonsData?.writing?.hsk2?.length || 20) },
    { key: 'hsk3', label: 'HSK 3', total: (lessonsData?.writing?.hsk3?.length || 20) },
  ];

  const learned = AppState.stats.learnedChars;
  levels.forEach(({ key, label, total }) => {
    const chars = lessonsData?.writing?.[key] || [];
    const count = chars.filter(c => learned.has(c.char)).length;
    const pct   = total > 0 ? Math.round((count / total) * 100) : 0;

    const row = document.createElement('div');
    row.className = 'hsk-level-row';
    row.innerHTML = `
      <span class="hsk-level-label">${label}</span>
      <div class="hsk-bar-bg">
        <div class="hsk-bar-fill" style="width:0%" data-target="${pct}"></div>
      </div>
      <span class="hsk-progress-pct">${count}/${total}</span>`;
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
  const sb  = document.getElementById('sidebar');
  const ov  = document.getElementById('sidebar-overlay');
  if (sb) sb.classList.remove('open');
  if (ov) ov.classList.remove('open');
}

// ---- Helpers ----
function getTodayStr()      { return getDateStr(0); }
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
