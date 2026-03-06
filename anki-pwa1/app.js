/**
 * FlashMind – Full-featured Anki-like SRS App
 * ES Modules – requires HTTP server (not file://)
 */

import {
    getAllDecks, addDeck, updateDeck, deleteDeck,
    getCardsByDeck, addCard, updateCard, deleteCard, getAllCards, resetDeck
} from './db.js';
import { scheduleCard } from './srs.js';

// ──────────────────────────────────────────────────
// State
// ──────────────────────────────────────────────────
const state = {
    view: 'home',
    deck: null,         // currently active deck
    studyQueue: [],
    studyIdx: 0,
    flipped: false,
    settings: loadSettings(),
};

// ──────────────────────────────────────────────────
// Settings
// ──────────────────────────────────────────────────
function loadSettings() {
    try {
        return JSON.parse(localStorage.getItem('fm_settings') || '{}');
    } catch { return {}; }
}
function saveSettings() {
    localStorage.setItem('fm_settings', JSON.stringify(state.settings));
}
function getSetting(key, def) {
    return state.settings[key] !== undefined ? state.settings[key] : def;
}

// ──────────────────────────────────────────────────
// Routing
// ──────────────────────────────────────────────────
async function showView(id, skipNavHighlight = false) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const el = document.getElementById(`view-${id}`);
    if (el) el.classList.add('active');

    if (!skipNavHighlight) {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        const nav = document.querySelector(`.nav-item[data-view="${id}"]`);
        if (nav) nav.classList.add('active');
    }

    state.view = id;
    if (id === 'home') await renderHome();
    if (id === 'decks') await renderDecks();
    if (id === 'stats') await renderStats();
    if (id === 'settings') renderSettingsView();
}

// ──────────────────────────────────────────────────
// HOME
// ──────────────────────────────────────────────────
async function renderHome() {
    const cards = await getAllCards();
    const decks = await getAllDecks();
    const now = Date.now();
    const todayStart = new Date(); todayStart.setHours(0, 0, 0, 0);

    const due = cards.filter(c => c.due && c.due <= now);
    const newC = cards.filter(c => !c.reps || c.reps === 0);
    const studied = cards.filter(c => c.lastReviewed >= todayStart.getTime()).length;

    $('stat-due').textContent = due.length;
    $('stat-new').textContent = newC.length;
    $('stat-done').textContent = studied;

    const map = {};
    due.forEach(c => { map[c.deckId] = (map[c.deckId] || 0) + 1; });
    const ready = decks.filter(d => map[d.id]);

    const listEl = $('quick-deck-list');
    if (!ready.length) {
        listEl.innerHTML = `<div class="empty-state"><div class="empty-icon">🎉</div><p>Không còn thẻ nào cần ôn hôm nay!</p></div>`;
    } else {
        listEl.innerHTML = ready.map(d => `
      <div class="quick-deck-item" data-id="${d.id}">
        <div>
          <div class="quick-deck-name">${esc(d.name)}</div>
          <div class="quick-deck-meta">${map[d.id]} thẻ đến hạn</div>
        </div>
        <span class="due-badge">${map[d.id]}</span>
      </div>`).join('');
        listEl.querySelectorAll('.quick-deck-item').forEach(el =>
            el.addEventListener('click', () => startStudy(+el.dataset.id)));
    }
}

// ──────────────────────────────────────────────────
// DECKS VIEW
// ──────────────────────────────────────────────────
async function renderDecks() {
    const decks = await getAllDecks();
    const listEl = $('deck-list');
    const now = Date.now();

    if (!decks.length) {
        listEl.innerHTML = `<div class="empty-state"><div class="empty-icon">📚</div><p>Chưa có bộ thẻ nào.<br>Nhấn <strong>+</strong> để tạo!</p></div>`;
        return;
    }

    const rows = await Promise.all(decks.map(async d => {
        const cards = await getCardsByDeck(d.id);
        const due = cards.filter(c => !c.due || c.due <= now).length;
        const newC = cards.filter(c => !c.reps || c.reps === 0).length;
        return { deck: d, total: cards.length, due, newC };
    }));

    listEl.innerHTML = rows.map(({ deck: d, total, due, newC }) => `
    <div class="glass-card deck-card" data-id="${d.id}">
      <div class="deck-card-header">
        <div style="flex:1;min-width:0">
          <div class="deck-name">${esc(d.name)}</div>
          ${d.description ? `<div class="deck-desc">${esc(d.description)}</div>` : ''}
        </div>
        <div class="deck-actions" onclick="event.stopPropagation()">
          <button class="icon-btn" data-action="edit-deck" data-id="${d.id}" title="Chỉnh sửa">✏️</button>
          <button class="icon-btn" data-action="manage-cards" data-id="${d.id}" title="Quản lý thẻ">📝</button>
          <button class="icon-btn" data-action="reset-deck" data-id="${d.id}" data-name="${esc(d.name)}" title="Reset tiến độ">🔄</button>
          <button class="icon-btn danger" data-action="delete-deck" data-id="${d.id}" data-name="${esc(d.name)}" title="Xóa">🗑️</button>
        </div>
      </div>
      <div class="deck-card-footer">
        <span class="deck-stat"><span>${total}</span> thẻ</span>
        <span class="deck-stat"><span style="color:var(--accent-yellow)">${due}</span> đến hạn</span>
        <span class="deck-stat"><span style="color:var(--secondary)">${newC}</span> mới</span>
        <div style="margin-left:auto;display:flex;gap:6px;align-items:center">
          ${due > 0 ? `<button class="btn btn-primary" style="padding:6px 14px;font-size:13px" data-action="study" data-id="${d.id}">▶ Ôn tập</button>` : `<span style="font-size:12px;color:var(--accent-green)">✓ Xong</span>`}
          <button class="btn btn-secondary" style="padding:6px 12px;font-size:12px" data-action="quiz" data-id="${d.id}">🧠 Quiz</button>
        </div>
      </div>
    </div>`).join('');

    listEl.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const { action, id, name } = btn.dataset;
            if (action === 'study') startStudy(+id);
            if (action === 'quiz') startQuiz(+id);
            if (action === 'edit-deck') openEditDeck(+id);
            if (action === 'manage-cards') openDeckDetail(+id);
            if (action === 'reset-deck') confirmResetDeck(+id, name);
            if (action === 'delete-deck') confirmDeleteDeck(+id, name);
        });
    });
}

// ── Edit Deck ──
async function openEditDeck(deckId) {
    const decks = await getAllDecks();
    const deck = decks.find(d => d.id === deckId);
    if (!deck) return;
    $('edit-deck-id').value = deckId;
    $('edit-deck-name').value = deck.name;
    $('edit-deck-desc').value = deck.description || '';
    openModal('modal-edit-deck');
}

// ── Delete Deck ──
async function confirmDeleteDeck(deckId, name) {
    if (!confirm(`Xóa bộ thẻ "${name}"?\nTất cả thẻ sẽ bị xóa.`)) return;
    await deleteDeck(deckId);
    toast('Đã xóa bộ thẻ');
    renderDecks();
}

// ── Reset Deck SRS Progress ──
async function confirmResetDeck(deckId, name) {
    if (!confirm(`Reset tiến độ SRS của "${name}"?\nTất cả thẻ sẽ về trạng thái mới.`)) return;
    await resetDeck(deckId);
    toast('Đã reset tiến độ!', '🔄');
    renderDecks();
}

// ──────────────────────────────────────────────────
// DECK DETAIL (Card Management)
// ──────────────────────────────────────────────────
async function openDeckDetail(deckId) {
    const decks = await getAllDecks();
    state.deck = decks.find(d => d.id === deckId);
    if (!state.deck) return;
    $('detail-deck-name').textContent = state.deck.name;
    $('detail-search').value = '';
    await renderCardList();
    openModal('modal-deck-detail');
}
window.openDeckDetail = openDeckDetail;

async function renderCardList(filter = '') {
    const cards = await getCardsByDeck(state.deck.id);
    const now = Date.now();
    const query = filter.toLowerCase();
    const filtered = query
        ? cards.filter(c => c.front.toLowerCase().includes(query) || c.back.toLowerCase().includes(query) || (c.tags || '').toLowerCase().includes(query))
        : cards;

    const listEl = $('card-list');
    if (!filtered.length) {
        listEl.innerHTML = `<div class="empty-state" style="padding:20px 0"><div class="empty-icon">🃏</div><p>${query ? 'Không tìm thấy' : 'Chưa có thẻ'}</p></div>`;
        return;
    }

    listEl.innerHTML = filtered.map(c => {
        const statusDot = !c.reps ? 'new' : c.due <= now ? 'due' : 'ok';
        const statusLabel = { new: 'Mới', due: 'Đến hạn', ok: 'Đã học' }[statusDot];
        return `
    <div class="card-item" data-cid="${c.id}">
      <div class="card-item-content">
        <div class="card-front">${esc(c.front)}</div>
        <div class="card-back">${esc(c.back)}</div>
        ${c.tags ? `<div class="card-tags">${c.tags.split(',').map(t => `<span class="tag">${esc(t.trim())}</span>`).join('')}</div>` : ''}
      </div>
      <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
        <span class="status-dot ${statusDot}" title="${statusLabel}"></span>
        <button class="icon-btn" data-action="edit-card" data-cid="${c.id}">✏️</button>
        <button class="icon-btn danger" data-action="del-card" data-cid="${c.id}">🗑️</button>
      </div>
    </div>`;
    }).join('');

    listEl.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', () => {
            const { action, cid } = btn.dataset;
            const card = filtered.find(c => c.id === +cid);
            if (action === 'del-card') deleteCardById(+cid);
            if (action === 'edit-card') openEditCard(card);
        });
    });
}

async function deleteCardById(cardId) {
    await deleteCard(cardId);
    toast('Đã xóa thẻ');
    renderCardList($('detail-search').value);
    renderDecks();
}

// ── Edit Card Modal ──
function openEditCard(card) {
    $('edit-card-id').value = card.id;
    $('edit-card-front').value = card.front;
    $('edit-card-back').value = card.back;
    $('edit-card-tags').value = card.tags || '';
    openModal('modal-edit-card');
}

// ── CSV Bulk Add ──
async function handleCsvImport(text) {
    if (!state.deck) return 0;
    const lines = text.trim().split('\n').filter(Boolean);
    let count = 0;
    for (const line of lines) {
        const [front, back, tags] = line.split(',').map(s => s.trim());
        if (front && back) {
            await addCard({ deckId: state.deck.id, front, back, tags: tags || '' });
            count++;
        }
    }
    return count;
}

// ──────────────────────────────────────────────────
// STUDY SESSION
// ──────────────────────────────────────────────────
async function startStudy(deckId) {
    const decks = await getAllDecks();
    const deck = decks.find(d => d.id === deckId);
    if (!deck) return;

    const cards = await getCardsByDeck(deckId);
    const now = Date.now();
    const limit = getSetting('dailyLimit', 20);
    let queue = cards.filter(c => !c.due || c.due <= now);

    if (!queue.length) { toast('Không có thẻ nào cần ôn hôm nay! 🎉'); return; }

    // Respect daily limit
    if (queue.length > limit) queue = queue.slice(0, limit);

    // Shuffle
    queue.sort(() => Math.random() - 0.5);

    state.deck = deck;
    state.studyQueue = queue;
    state.studyIdx = 0;
    state.flipped = false;

    $('study-deck-title').textContent = deck.name;
    $('session-done').style.display = 'none';
    $('flip-container').style.display = '';
    $('grade-buttons').style.display = '';

    // Switch to study mode (hide bottom nav active, show study view)
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-study').classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    state.view = 'study';

    renderStudyCard();
}

function renderStudyCard() {
    const { studyQueue: q, studyIdx: i } = state;
    if (i >= q.length) { showSessionDone(); return; }

    const card = q[i];
    const total = q.length;
    const pct = (i / total) * 100;

    document.querySelector('.progress-bar-fill').style.width = `${pct}%`;
    $('study-progress-text').textContent = `${i + 1} / ${total}`;

    $('card-front-text').textContent = card.front;
    $('card-back-text').textContent = card.back;

    // Reset
    $('flip-inner').classList.remove('flipped');
    state.flipped = false;
    $('grade-buttons').classList.remove('visible');

    // Show tags
    const tagEl = $('study-card-tags');
    if (tagEl) {
        tagEl.innerHTML = card.tags ? card.tags.split(',').map(t => `<span class="tag">${esc(t.trim())}</span>`).join('') : '';
    }

    // Update predicted intervals on grade buttons
    [0, 1, 2, 3].forEach(g => {
        const sim = scheduleCard(card, g);
        const names = ['again', 'hard', 'good', 'easy'];
        const intEl = document.querySelector(`.grade-btn.${names[g]} .grade-interval`);
        if (intEl) intEl.textContent = sim.interval === 1 ? '1 ngày' : `${sim.interval} ngày`;
    });

    // Auto speak front
    if (getSetting('autoSpeak', true)) {
        setTimeout(() => speak(card.front, detectLang(card.front)), 300);
    }
}

function showSessionDone() {
    $('flip-container').style.display = 'none';
    $('grade-buttons').style.display = 'none';
    const done = $('session-done');
    done.style.display = 'flex';

    // Update done stats
    const reviewed = state.studyQueue.length;
    $('done-count').textContent = reviewed;
    renderHome(); // update home badge counts
}

// ──────────────────────────────────────────────────
// QUIZ MODE (Multiple Choice)
// ──────────────────────────────────────────────────
async function startQuiz(deckId) {
    const cards = await getCardsByDeck(deckId);
    if (cards.length < 4) { toast('Cần ít nhất 4 thẻ để làm quiz!'); return; }

    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    const quiz = shuffled.slice(0, Math.min(getSetting('quizLimit', 10), shuffled.length));

    state.quizQueue = quiz;
    state.quizIdx = 0;
    state.quizScore = 0;
    state.allCards = cards;

    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-quiz').classList.add('active');
    state.view = 'quiz';

    renderQuizCard();
}
window.startQuiz = startQuiz;

function renderQuizCard() {
    const { quizQueue: q, quizIdx: i, allCards } = state;
    if (i >= q.length) {
        showQuizDone();
        return;
    }

    const card = q[i];
    // Wrong options: pick 3 random from other cards
    const others = allCards
        .filter(c => c.id !== card.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    const options = [...others.map(c => c.back), card.back].sort(() => Math.random() - 0.5);

    $('quiz-question').textContent = card.front;
    $('quiz-progress').textContent = `${i + 1} / ${q.length}`;
    document.querySelector('#view-quiz .progress-bar-fill').style.width = `${(i / q.length) * 100}%`;

    const optionsEl = $('quiz-options');
    optionsEl.innerHTML = options.map(opt => `
    <button class="quiz-option" data-opt="${esc(opt)}">${esc(opt)}</button>
  `).join('');

    optionsEl.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => handleQuizAnswer(btn, card.back));
    });
}

function handleQuizAnswer(btn, correct) {
    const selected = btn.dataset.opt;
    const isRight = selected === correct;

    // Disable all, highlight
    $('quiz-options').querySelectorAll('.quiz-option').forEach(b => {
        b.disabled = true;
        if (b.dataset.opt === correct) b.classList.add('correct');
        else if (b === btn) b.classList.add('wrong');
    });

    if (isRight) state.quizScore++;

    setTimeout(() => {
        state.quizIdx++;
        renderQuizCard();
    }, 1000);
}

function showQuizDone() {
    const { quizScore, quizQueue } = state;
    const pct = Math.round((quizScore / quizQueue.length) * 100);
    $('quiz-final-score').textContent = `${quizScore}/${quizQueue.length}`;
    $('quiz-final-pct').textContent = `${pct}%`;
    $('quiz-result-msg').textContent = pct >= 80 ? '🏆 Xuất sắc!' : pct >= 50 ? '😊 Không tệ!' : '💪 Cố lên!';
    $('quiz-question-wrap').style.display = 'none';
    $('quiz-result-wrap').style.display = 'flex';
}

// ──────────────────────────────────────────────────
// STATS VIEW
// ──────────────────────────────────────────────────
async function renderStats() {
    const cards = await getAllCards();
    const decks = await getAllDecks();
    const now = Date.now();
    const todayStart = new Date(); todayStart.setHours(0, 0, 0, 0);

    const studied = cards.filter(c => c.lastReviewed && c.lastReviewed >= todayStart.getTime()).length;
    const mature = cards.filter(c => c.interval >= 21).length;
    const due = cards.filter(c => c.due && c.due <= now).length;
    const streak = calcStreak(cards);

    $('streak-number').textContent = streak;
    $('s-total').textContent = cards.length;
    $('s-due').textContent = due;
    $('s-studied').textContent = studied;
    $('s-mature').textContent = mature;
    $('s-decks').textContent = decks.length;

    renderHeatmap(cards);
    renderDeckStats(decks, cards, now);
}

async function renderDeckStats(decks, cards, now) {
    const container = $('deck-stats-list');
    if (!container) return;
    if (!decks.length) { container.innerHTML = ''; return; }

    container.innerHTML = decks.map(d => {
        const dc = cards.filter(c => c.deckId === d.id);
        const dDue = dc.filter(c => c.due && c.due <= now).length;
        const dMature = dc.filter(c => c.interval >= 21).length;
        const pct = dc.length ? Math.round((dMature / dc.length) * 100) : 0;
        return `
        <div class="glass-card" style="padding:14px 16px;margin-bottom:10px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <div style="font-weight:600;font-size:14px">${esc(d.name)}</div>
            <span style="font-size:12px;color:var(--text-muted)">${dc.length} thẻ</span>
          </div>
          <div style="background:rgba(255,255,255,0.08);border-radius:6px;height:6px;overflow:hidden;margin-bottom:8px">
            <div style="height:100%;width:${pct}%;background:var(--accent-green);border-radius:6px;transition:width 0.6s"></div>
          </div>
          <div style="display:flex;gap:14px;font-size:12px;color:var(--text-muted)">
            <span>🟡 ${dDue} đến hạn</span>
            <span>🟢 ${dMature} thuần thục</span>
            <span style="margin-left:auto;color:var(--accent-green)">${pct}% đã học</span>
          </div>
        </div>`;
    }).join('');
}

function calcStreak(cards) {
    const days = new Set(cards.filter(c => c.lastReviewed).map(c => {
        const d = new Date(c.lastReviewed);
        return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    }));
    let streak = 0;
    const today = new Date();
    for (let i = 0; i < 365; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
        if (days.has(key)) streak++;
        else if (i > 0) break;
    }
    return streak;
}

function renderHeatmap(cards) {
    // Count reviews per day for last 77 days (11 weeks)
    const counts = {};
    for (const c of cards) {
        if (!c.lastReviewed) continue;
        const d = new Date(c.lastReviewed);
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        counts[key] = (counts[key] || 0) + 1;
    }

    const heatEl = $('heatmap');
    if (!heatEl) return;
    heatEl.innerHTML = '';

    const today = new Date();
    const days = 77;
    const cells = [];
    for (let i = days - 1; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        cells.push({ key, count: counts[key] || 0, date: d });
    }

    const max = Math.max(...cells.map(c => c.count), 1);
    cells.forEach(({ key, count, date }) => {
        const cell = document.createElement('div');
        cell.className = 'heatmap-cell';
        const intensity = count === 0 ? 0 : Math.ceil((count / max) * 4);
        cell.dataset.level = intensity;
        cell.title = `${date.toLocaleDateString('vi-VN')}: ${count} thẻ`;
        heatEl.appendChild(cell);
    });
}

// ──────────────────────────────────────────────────
// SETTINGS VIEW
// ──────────────────────────────────────────────────
function renderSettingsView() {
    $('setting-daily-limit').value = getSetting('dailyLimit', 20);
    $('setting-quiz-limit').value = getSetting('quizLimit', 10);
    $('setting-show-hint').checked = getSetting('showHint', true);
    $('setting-auto-flip').checked = getSetting('autoFlipEnabled', false);
    $('setting-auto-flip-time').value = getSetting('autoFlipTime', 3);
    $('setting-auto-speak').checked = getSetting('autoSpeak', true);
}

// ──────────────────────────────────────────────────
// Modals
// ──────────────────────────────────────────────────
function openModal(id) { $(id)?.classList.add('open'); }
function closeModal(id) { $(id)?.classList.remove('open'); }
window.closeModal = closeModal;

// ──────────────────────────────────────────────────
// Toast
// ──────────────────────────────────────────────────
let _toastTimer;
function toast(msg, emoji = '') {
    const el = $('toast');
    el.textContent = emoji ? `${emoji} ${msg}` : msg;
    el.classList.add('show');
    clearTimeout(_toastTimer);
    _toastTimer = setTimeout(() => el.classList.remove('show'), 2700);
}

// ──────────────────────────────────────────────────
// Demo deck
// ──────────────────────────────────────────────────
async function seedDemoIfEmpty() {
    const decks = await getAllDecks();
    if (decks.length > 0) return;

    // Demo Deck 1: English vocabulary
    const id1 = await addDeck({ name: '📖 Tiếng Anh – Giao tiếp', description: 'Từ vựng và câu giao tiếp cơ bản' });
    const demo1 = [
        ['Hello', 'Xin chào', 'giao tiếp'],
        ['Thank you', 'Cảm ơn', 'giao tiếp'],
        ['Goodbye', 'Tạm biệt', 'giao tiếp'],
        ['Please', 'Xin / Làm ơn', 'giao tiếp'],
        ['Sorry', 'Xin lỗi', 'giao tiếp'],
        ['Excuse me', 'Xin lỗi (để hỏi đường)', 'giao tiếp'],
        ['How are you?', 'Bạn có khỏe không?', 'giao tiếp'],
        ['I don\'t understand', 'Tôi không hiểu', 'giao tiếp'],
        ['Can you help me?', 'Bạn có thể giúp tôi không?', 'giao tiếp'],
        ['Where is...?', '...ở đâu?', 'giao tiếp'],
    ];
    for (const [f, b, t] of demo1) await addCard({ deckId: id1, front: f, back: b, tags: t });

    // Demo Deck 2: English vocabulary (things)
    const id2 = await addDeck({ name: '🏠 Tiếng Anh – Đồ vật', description: 'Từ vựng về đồ vật thường ngày' });
    const demo2 = [
        ['Water', 'Nước', 'đồ vật'],
        ['Food', 'Đồ ăn', 'đồ vật'],
        ['Book', 'Sách', 'đồ vật'],
        ['Phone', 'Điện thoại', 'đồ vật'],
        ['Computer', 'Máy tính', 'đồ vật'],
        ['Car', 'Xe ô tô', 'phương tiện'],
        ['Bicycle', 'Xe đạp', 'phương tiện'],
        ['House', 'Nhà', 'nơi chốn'],
        ['School', 'Trường học', 'nơi chốn'],
        ['Hospital', 'Bệnh viện', 'nơi chốn'],
    ];
    for (const [f, b, t] of demo2) await addCard({ deckId: id2, front: f, back: b, tags: t });

    // Demo Deck 3: Math
    const id3 = await addDeck({ name: '🔢 Toán học – Công thức', description: 'Các công thức toán phổ biến' });
    const demo3 = [
        ['S = πr²', 'Diện tích hình tròn (r = bán kính)', 'hình học'],
        ['C = 2πr', 'Chu vi hình tròn', 'hình học'],
        ['a² + b² = c²', 'Định lý Pythagorean', 'hình học'],
        ['S = ½ × b × h', 'Diện tích tam giác', 'hình học'],
        ['V = lwh', 'Thể tích hình hộp chữ nhật', 'hình học'],
        ['F = ma', 'Định luật 2 Newton', 'vật lý'],
        ['E = mc²', 'Tương đương khối lượng-năng lượng (Einstein)', 'vật lý'],
        ['P = V × I', 'Công suất điện', 'vật lý'],
        ['v = s/t', 'Vận tốc trung bình', 'vật lý'],
        ['a = (v - v₀) / t', 'Gia tốc', 'vật lý'],
    ];
    for (const [f, b, t] of demo3) await addCard({ deckId: id3, front: f, back: b, tags: t });

    toast('Đã tạo 3 bộ thẻ mẫu!', '🎉');
}

// ──────────────────────────────────────────────────
// Text-to-Speech
// ──────────────────────────────────────────────────
function detectLang(text) {
    // Simple heuristic: if mainly ASCII letters → English, else Vietnamese
    const asciiRatio = (text.match(/[a-zA-Z]/g) || []).length / (text.length || 1);
    return asciiRatio > 0.5 ? 'en-US' : 'vi-VN';
}

function speak(text, lang) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang || detectLang(text);
    utter.rate = 0.9;
    utter.pitch = 1;
    // Try to find a matching voice
    const voices = window.speechSynthesis.getVoices();
    const match = voices.find(v => v.lang.startsWith(utter.lang.slice(0, 2)));
    if (match) utter.voice = match;
    window.speechSynthesis.speak(utter);
}

// Expose for HTML buttons
window.speakFront = () => {
    const text = $('card-front-text')?.textContent;
    if (text) speak(text, detectLang(text));
};
window.speakBack = () => {
    const text = $('card-back-text')?.textContent;
    if (text) speak(text, detectLang(text));
};


function $(id) { return document.getElementById(id); }
function esc(s) {
    return String(s || '')
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ──────────────────────────────────────────────────
// Auto-flip timer
// ──────────────────────────────────────────────────
let autoFlipTimer;
function startAutoFlip() {
    if (!getSetting('autoFlipEnabled', false)) return;
    const secs = getSetting('autoFlipTime', 3);
    clearTimeout(autoFlipTimer);
    autoFlipTimer = setTimeout(() => {
        if (!state.flipped) {
            $('flip-inner').classList.add('flipped');
            state.flipped = true;
            $('grade-buttons').classList.add('visible');
        }
    }, secs * 1000);
}
function clearAutoFlip() { clearTimeout(autoFlipTimer); }

// ──────────────────────────────────────────────────
// Swipe gesture + keyboard shortcuts
// ──────────────────────────────────────────────────
function initSwipeGesture() {
    let startY = 0, startX = 0;
    const flipEl = $('flip-container');
    if (!flipEl) return;

    flipEl.addEventListener('touchstart', e => {
        startY = e.touches[0].clientY;
        startX = e.touches[0].clientX;
    }, { passive: true });

    flipEl.addEventListener('touchend', e => {
        const dy = e.changedTouches[0].clientY - startY;
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dy) > 40 && Math.abs(dy) > Math.abs(dx)) {
            if (state.studyIdx >= state.studyQueue.length) return;
            clearAutoFlip();
            const card = state.studyQueue[state.studyIdx];
            if (!state.flipped) {
                // Vuốt xuống: lật sang mặt sau
                $('flip-inner').classList.add('flipped');
                state.flipped = true;
                $('grade-buttons').classList.add('visible');
                if (getSetting('autoSpeak', true)) speak(card.back, detectLang(card.back));
            } else {
                // Vuốt lên: lật về mặt trước
                $('flip-inner').classList.remove('flipped');
                state.flipped = false;
                $('grade-buttons').classList.remove('visible');
                if (getSetting('autoSpeak', true)) speak(card.front, detectLang(card.front));
            }
        }
    }, { passive: true });
}

function initKeyboardShortcuts() {
    document.addEventListener('keydown', async e => {
        if (state.view !== 'study') return;
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            if (state.studyIdx >= state.studyQueue.length) return;
            clearAutoFlip();
            const card = state.studyQueue[state.studyIdx];
            if (!state.flipped) {
                // Space/Enter: lật sang mặt sau
                $('flip-inner').classList.add('flipped');
                state.flipped = true;
                $('grade-buttons').classList.add('visible');
                if (getSetting('autoSpeak', true)) speak(card.back, detectLang(card.back));
            } else if (e.key === 'Enter') {
                // Enter khi đang ở mặt sau: lật về mặt trước
                $('flip-inner').classList.remove('flipped');
                state.flipped = false;
                $('grade-buttons').classList.remove('visible');
                if (getSetting('autoSpeak', true)) speak(card.front, detectLang(card.front));
            }
        }
        if (['1', '2', '3', '4'].includes(e.key) && state.flipped) {
            const grade = +e.key - 1; // 1→0(Again), 2→1(Hard), 3→2(Good), 4→3(Easy)
            clearAutoFlip();
            const card = state.studyQueue[state.studyIdx];
            await updateCard(scheduleCard(card, grade));
            state.studyIdx++;
            renderStudyCard();
            startAutoFlip();
        }
    });
}


function initEvents() {

    // ── Nav ──
    document.querySelectorAll('.nav-item').forEach(btn =>
        btn.addEventListener('click', () => showView(btn.dataset.view)));

    // ── Add Deck ──
    $('btn-add-deck').addEventListener('click', () => openModal('modal-add-deck'));

    $('form-add-deck').addEventListener('submit', async e => {
        e.preventDefault();
        const name = $('input-deck-name').value.trim();
        const desc = $('input-deck-desc').value.trim();
        if (!name) return;
        await addDeck({ name, description: desc });
        $('input-deck-name').value = '';
        $('input-deck-desc').value = '';
        closeModal('modal-add-deck');
        toast('Đã tạo bộ thẻ!', '✅');
        renderDecks();
    });

    // ── Edit Deck ──
    $('form-edit-deck').addEventListener('submit', async e => {
        e.preventDefault();
        const id = +$('edit-deck-id').value;
        const name = $('edit-deck-name').value.trim();
        const desc = $('edit-deck-desc').value.trim();
        if (!name) return;
        const decks = await getAllDecks();
        const deck = decks.find(d => d.id === id);
        await updateDeck({ ...deck, name, description: desc });
        closeModal('modal-edit-deck');
        toast('Đã cập nhật!', '✅');
        renderDecks();
    });

    // ── Add Card ──
    $('btn-add-card').addEventListener('click', () => openModal('modal-add-card'));

    $('form-add-card').addEventListener('submit', async e => {
        e.preventDefault();
        const front = $('input-card-front').value.trim();
        const back = $('input-card-back').value.trim();
        const tags = $('input-card-tags').value.trim();
        if (!front || !back || !state.deck) return;
        await addCard({ deckId: state.deck.id, front, back, tags });
        $('input-card-front').value = '';
        $('input-card-back').value = '';
        $('input-card-tags').value = '';
        toast('Đã thêm thẻ!', '🃏');
        renderCardList($('detail-search').value);
    });

    // ── Edit Card ──
    $('form-edit-card').addEventListener('submit', async e => {
        e.preventDefault();
        const id = +$('edit-card-id').value;
        const cards = await getCardsByDeck(state.deck.id);
        const card = cards.find(c => c.id === id);
        await updateCard({
            ...card,
            front: $('edit-card-front').value.trim(),
            back: $('edit-card-back').value.trim(),
            tags: $('edit-card-tags').value.trim(),
        });
        closeModal('modal-edit-card');
        toast('Đã cập nhật thẻ!', '✅');
        renderCardList($('detail-search').value);
    });

    // ── Search cards ──
    $('detail-search').addEventListener('input', e => renderCardList(e.target.value));

    // ── CSV import ──
    $('btn-csv-import').addEventListener('click', () => openModal('modal-csv'));

    $('form-csv').addEventListener('submit', async e => {
        e.preventDefault();
        const text = $('csv-text').value.trim();
        if (!text) return;
        const count = await handleCsvImport(text);
        closeModal('modal-csv');
        $('csv-text').value = '';
        toast(`Đã nhập ${count} thẻ!`, '📋');
        renderCardList($('detail-search').value);
    });

    // ── Flip card (hai chiều) ──
    $('flip-container').addEventListener('click', e => {
        // Bỏ qua nếu click vào nút loa
        if (e.target.closest('.speak-btn')) return;
        if (state.studyIdx >= state.studyQueue.length) return;
        clearAutoFlip();

        const card = state.studyQueue[state.studyIdx];
        if (!state.flipped) {
            // Lật sang mặt sau
            $('flip-inner').classList.add('flipped');
            state.flipped = true;
            $('grade-buttons').classList.add('visible');
            if (getSetting('autoSpeak', true)) {
                speak(card.back, detectLang(card.back));
            }
        } else {
            // Lật về mặt trước
            $('flip-inner').classList.remove('flipped');
            state.flipped = false;
            $('grade-buttons').classList.remove('visible');
            if (getSetting('autoSpeak', true)) {
                speak(card.front, detectLang(card.front));
            }
        }
    });

    // ── Grade buttons ──
    document.querySelectorAll('.grade-btn').forEach(btn =>
        btn.addEventListener('click', async () => {
            if (!state.flipped) return;
            clearAutoFlip();
            const grade = +btn.dataset.grade;
            const card = state.studyQueue[state.studyIdx];
            await updateCard(scheduleCard(card, grade));
            state.studyIdx++;
            renderStudyCard();
            startAutoFlip();
        })
    );

    // ── Study back ──
    $('btn-study-back').addEventListener('click', () => {
        clearAutoFlip();
        showView('decks');
        $('session-done').style.display = 'none';
        $('flip-container').style.display = '';
        $('grade-buttons').style.display = '';
    });

    // ── Session done – back ──
    $('btn-done-back').addEventListener('click', () => {
        $('session-done').style.display = 'none';
        $('flip-container').style.display = '';
        $('grade-buttons').style.display = '';
        showView('decks');
    });

    // ── Quiz back button ──
    $('btn-quiz-back').addEventListener('click', () => showView('decks'));

    // ── Quiz restart ──
    $('btn-quiz-restart').addEventListener('click', () => {
        $('quiz-question-wrap').style.display = '';
        $('quiz-result-wrap').style.display = 'none';
        startQuiz(state.deck.id);
    });

    // ── Settings ──
    $('form-settings').addEventListener('submit', e => {
        e.preventDefault();
        state.settings.dailyLimit = +$('setting-daily-limit').value;
        state.settings.quizLimit = +$('setting-quiz-limit').value;
        state.settings.showHint = $('setting-show-hint').checked;
        state.settings.autoFlipEnabled = $('setting-auto-flip').checked;
        state.settings.autoFlipTime = +$('setting-auto-flip-time').value;
        state.settings.autoSpeak = $('setting-auto-speak').checked;
        saveSettings();
        toast('Đã lưu cài đặt!', '⚙️');
    });

    // ── Export ──
    $('btn-export').addEventListener('click', async () => {
        const [decks, cards] = await Promise.all([getAllDecks(), getAllCards()]);
        const blob = new Blob([JSON.stringify({ decks, cards }, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = Object.assign(document.createElement('a'), { href: url, download: 'flashmind-backup.json' });
        a.click(); URL.revokeObjectURL(url);
        toast('Xuất dữ liệu thành công!', '📤');
    });

    // ── Import JSON ──
    $('btn-import').addEventListener('click', () => $('input-import-file').click());
    $('input-import-file').addEventListener('change', async e => {
        const file = e.target.files[0]; if (!file) return;
        const data = JSON.parse(await file.text());
        for (const deck of data.decks || []) {
            const { id: oldId, ...rest } = deck;
            const newId = await addDeck(rest);
            for (const card of (data.cards || []).filter(c => c.deckId === oldId)) {
                const { id, deckId, ...cr } = card;
                await addCard({ ...cr, deckId: newId });
            }
        }
        toast('Nhập dữ liệu thành công!', '📥');
        e.target.value = '';
        renderDecks();
    });

    // ── Reset app ──
    $('btn-reset').addEventListener('click', async () => {
        if (!confirm('Xóa toàn bộ dữ liệu? Hành động này không thể hoàn tác!')) return;
        const decks = await getAllDecks();
        for (const d of decks) await deleteDeck(d.id);
        toast('Đã xóa toàn bộ dữ liệu', '🗑️');
        renderDecks(); renderHome();
    });

    // ── Close modals on overlay click ──
    document.querySelectorAll('.modal-overlay').forEach(overlay =>
        overlay.addEventListener('click', e => {
            if (e.target === overlay) closeModal(overlay.id);
        })
    );
}

// ──────────────────────────────────────────────────
// Boot
// ──────────────────────────────────────────────────
async function init() {
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => { });
    initEvents();
    initSwipeGesture();
    initKeyboardShortcuts();
    await seedDemoIfEmpty();
    showView('home');
}

init();
