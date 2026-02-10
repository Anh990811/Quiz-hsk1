// ========================================
// MAIN APP CONTROLLER
// ========================================

// Global state
let currentScreen = 'home';

// Navigation
function navigateTo(screen) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });

    // Show target screen
    const targetScreen = document.getElementById(screen + 'Screen');
    if (targetScreen) {
        targetScreen.classList.add('active');
        currentScreen = screen;
    }

    // Update bottom nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.screen === screen) {
            item.classList.add('active');
        }
    });

    // Screen-specific initialization
    switch (screen) {
        case 'home':
            updateHomeStats();
            renderHomeCalendar();
            updateReviewAlert();
            break;
        case 'groups':
            renderGroupsList();
            break;
        case 'vocabulary':
            renderGroupFilter();
            renderVocabularyList();
            break;
        case 'review':
            populateGroupSelect('reviewGroupSelect');
            initReviewSession('all');
            break;
        case 'flashcard':
            populateGroupSelect('flashcardGroupSelect');
            initFlashcard();
            break;
        case 'quiz':
            populateGroupSelect('quizGroupSelect');
            resetQuiz();
            break;
        case 'analytics':
            renderAnalytics();
            renderReviewCalendar();
            break;
        case 'import':
            populateGroupSelect('importGroupSelect');
            break;
        case 'matching':
            populateGroupSelect('matchingGroupSelect');
            resetMatchingGame();
            break;
        case 'backup':
            // Backup screen doesn't need initialization
            break;
    }
}

// Update home screen statistics
function updateHomeStats() {
    const vocabulary = getVocabulary();
    const total = vocabulary.length;
    const learned = vocabulary.filter(v => v.learned).length;
    const dueToday = getWordsDueToday().length;

    document.getElementById('totalWords').textContent = total;
    document.getElementById('learnedWords').textContent = learned;
    document.getElementById('dueToday').textContent = dueToday;

    // Update progress bar
    const progress = total > 0 ? Math.round((learned / total) * 100) : 0;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('progressText').textContent = progress + '%';

    // Update review badges
    updateReviewBadges(dueToday);
}

// Update review badges throughout the app
function updateReviewBadges(count) {
    const badges = ['reviewBadge', 'reviewCardBadge', 'navReviewBadge'];
    badges.forEach(id => {
        const badge = document.getElementById(id);
        if (badge) {
            if (count > 0) {
                badge.textContent = count > 99 ? '99+' : count;
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        }
    });
}

// Update review alert on home
function updateReviewAlert() {
    const dueCount = getWordsDueToday().length;
    const alert = document.getElementById('reviewAlert');
    const alertCount = document.getElementById('alertCount');

    if (alert && alertCount) {
        if (dueCount > 0) {
            alertCount.textContent = dueCount;
            alert.style.display = 'flex';
        } else {
            alert.style.display = 'none';
        }
    }
}

// Render home calendar preview
function renderHomeCalendar() {
    const container = document.getElementById('homeCalendar');
    if (!container) return;

    const calendar = getReviewCalendar();

    container.innerHTML = calendar.map(day => `
        <div class="calendar-day-mini ${day.isToday ? 'today' : ''} ${day.count > 0 ? 'has-reviews' : ''}">
            <span class="day-name">${day.dayName}</span>
            <span class="day-num">${day.dayNum}</span>
            ${day.count > 0 ? `<span class="day-badge">${day.count}</span>` : ''}
        </div>
    `).join('');
}

// Populate group select dropdowns
function populateGroupSelect(selectId, includeAll = true) {
    const select = document.getElementById(selectId);
    if (!select) return;

    const groups = getGroups();
    const currentValue = select.value;

    // For import, don't include "all" option
    if (selectId === 'importGroupSelect') {
        select.innerHTML = groups.map(g => `<option value="${g.id}">${g.name}</option>`).join('');
        // Default to first group (usually "Chưa phân loại")
        if (!currentValue) {
            select.value = 'default';
        }
    } else {
        select.innerHTML = `
            <option value="all">Tất cả</option>
            ${groups.map(g => `<option value="${g.id}">${g.name}</option>`).join('')}
        `;
    }

    // Restore previous value if exists
    if (currentValue && select.querySelector(`option[value="${currentValue}"]`)) {
        select.value = currentValue;
    }
}

// Toast notification
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast ' + type + ' show';

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Modal functions for vocabulary
function openAddModal() {
    document.getElementById('modalTitle').textContent = 'Thêm từ vựng';
    document.getElementById('vocabForm').reset();
    document.getElementById('editId').value = '';

    // Populate group dropdown
    const groupSelect = document.getElementById('inputGroup');
    if (groupSelect) {
        groupSelect.innerHTML = getGroupOptionsHTML(currentGroupFilter !== 'all' ? currentGroupFilter : 'default');
    }

    document.getElementById('vocabModal').classList.add('active');
}

function openEditModal(id) {
    const vocabulary = getVocabulary();
    const word = vocabulary.find(v => v.id === id);

    if (word) {
        document.getElementById('modalTitle').textContent = 'Sửa từ vựng';
        document.getElementById('editId').value = word.id;
        document.getElementById('inputChinese').value = word.chinese;
        document.getElementById('inputPinyin').value = word.pinyin;
        document.getElementById('inputMeaning').value = word.meaning;
        document.getElementById('inputExample').value = word.example || '';

        // Populate group dropdown
        const groupSelect = document.getElementById('inputGroup');
        if (groupSelect) {
            groupSelect.innerHTML = getGroupOptionsHTML(word.groupId || 'default');
        }

        document.getElementById('vocabModal').classList.add('active');
    }
}

function closeModal() {
    document.getElementById('vocabModal').classList.remove('active');
}

// Close modals on outside click
document.getElementById('vocabModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'vocabModal') {
        closeModal();
    }
});

document.getElementById('groupModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'groupModal') {
        closeGroupModal();
    }
});

// Start quiz with selected group
function startQuizWithGroup(mode) {
    const groupId = document.getElementById('quizGroupSelect')?.value || 'all';
    startQuiz(mode, groupId);
}

// Initialize flashcard with selected group
function initFlashcardWithGroup(groupId) {
    initFlashcard(groupId);
}

// Confirm import with selected group
function confirmImportWithGroup() {
    const groupId = document.getElementById('importGroupSelect')?.value || 'default';

    if (pendingImport.length === 0) return;

    addVocabularyBulk(pendingImport, groupId);

    const group = getGroupById(groupId);
    showToast(`Đã import ${pendingImport.length} từ vào nhóm "${group.name}"!`, 'success');

    // Reset
    cancelImport();

    // Navigate to vocabulary
    navigateTo('vocabulary');
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Ensure groups exist
    getGroups();

    // Update stats
    updateHomeStats();
    renderHomeCalendar();
    updateReviewAlert();

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeGroupModal();
        }
    });
});
