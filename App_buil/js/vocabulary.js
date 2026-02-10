// ========================================
// VOCABULARY MANAGEMENT
// ========================================

const STORAGE_KEY = 'chinese_vocabulary';

// Get vocabulary from localStorage
function getVocabulary() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

// Save vocabulary to localStorage
function saveVocabularyToStorage(vocabulary) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(vocabulary));
}

// Generate unique ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Create default SRS values for new word
function createDefaultSRS() {
    return {
        interval: 0,           // Days until next review
        easeFactor: 2.5,       // SM-2 ease factor
        repetitions: 0,        // Successful repetitions in a row
        nextReview: null,      // ISO date of next review
        lastReview: null,      // ISO date of last review
        correctCount: 0,       // Total correct answers
        wrongCount: 0          // Total wrong answers
    };
}

// Add or update vocabulary
function saveVocabulary(event) {
    event.preventDefault();

    const id = document.getElementById('editId').value;
    const chinese = document.getElementById('inputChinese').value.trim();
    const pinyin = document.getElementById('inputPinyin').value.trim();
    const meaning = document.getElementById('inputMeaning').value.trim();
    const example = document.getElementById('inputExample').value.trim();
    const groupId = document.getElementById('inputGroup')?.value || 'default';

    if (!chinese || !pinyin || !meaning) {
        showToast('Vui lòng điền đầy đủ thông tin!', 'error');
        return;
    }

    let vocabulary = getVocabulary();

    if (id) {
        // Update existing
        vocabulary = vocabulary.map(v => {
            if (v.id === id) {
                return { ...v, chinese, pinyin, meaning, example, groupId };
            }
            return v;
        });
        showToast('Đã cập nhật từ vựng!', 'success');
    } else {
        // Add new with SRS fields
        vocabulary.push({
            id: generateId(),
            chinese,
            pinyin,
            meaning,
            example,
            groupId,
            learned: false,
            createdAt: new Date().toISOString(),
            ...createDefaultSRS()
        });
        showToast('Đã thêm từ vựng mới!', 'success');
    }

    saveVocabularyToStorage(vocabulary);
    closeModal();
    renderVocabularyList();
    updateHomeStats();
}

// Delete vocabulary
function deleteVocabulary(id) {
    if (!confirm('Bạn có chắc muốn xóa từ này?')) return;

    let vocabulary = getVocabulary();
    vocabulary = vocabulary.filter(v => v.id !== id);
    saveVocabularyToStorage(vocabulary);

    showToast('Đã xóa từ vựng!', 'success');
    renderVocabularyList();
    updateHomeStats();
}

// Toggle learned status
function toggleLearned(id) {
    let vocabulary = getVocabulary();
    vocabulary = vocabulary.map(v => {
        if (v.id === id) {
            return { ...v, learned: !v.learned };
        }
        return v;
    });
    saveVocabularyToStorage(vocabulary);
    renderVocabularyList();
    updateHomeStats();
}

// Search vocabulary
function searchVocabulary() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    renderVocabularyList(query);
}

// Render vocabulary list with group filter support
function renderVocabularyList(searchQuery = '') {
    const vocabList = document.getElementById('vocabList');
    if (!vocabList) return;

    let vocabulary = getVocabulary();

    // Filter by group
    if (typeof currentGroupFilter !== 'undefined' && currentGroupFilter !== 'all') {
        vocabulary = vocabulary.filter(v => (v.groupId || 'default') === currentGroupFilter);
    }

    // Filter by search query
    if (searchQuery) {
        vocabulary = vocabulary.filter(v =>
            v.chinese.toLowerCase().includes(searchQuery) ||
            v.pinyin.toLowerCase().includes(searchQuery) ||
            v.meaning.toLowerCase().includes(searchQuery)
        );
    }

    if (vocabulary.length === 0) {
        vocabList.innerHTML = `
            <div class="empty-state">
                <p>${searchQuery ? '📭 Không tìm thấy từ vựng phù hợp' : '📭 Chưa có từ vựng nào. Hãy thêm từ mới!'}</p>
            </div>
        `;
        return;
    }

    vocabList.innerHTML = vocabulary.map(word => {
        const group = typeof getGroupById === 'function' ? getGroupById(word.groupId || 'default') : null;
        const groupBadge = group ? `<span class="vocab-group-badge" style="background: ${group.color}">${group.name}</span>` : '';
        const reviewStatus = getReviewStatusBadge(word);
        const isSelected = selectedWords.has(word.id);
        const checkboxHtml = selectMode ? `
            <label class="vocab-checkbox">
                <input type="checkbox" ${isSelected ? 'checked' : ''} onchange="toggleWordSelection('${word.id}')">
            </label>
        ` : '';

        return `
            <div class="vocab-item ${word.learned ? 'learned' : ''} ${selectMode ? 'select-mode' : ''} ${isSelected ? 'selected' : ''}" data-id="${word.id}">
                ${checkboxHtml}
                <div class="vocab-chinese">${word.chinese}</div>
                <div class="vocab-info">
                    <div class="vocab-pinyin">${word.pinyin}</div>
                    <div class="vocab-meaning">${word.meaning}</div>
                    <div class="vocab-meta">
                        ${groupBadge}
                        ${reviewStatus}
                    </div>
                </div>
                <div class="vocab-actions" ${selectMode ? 'style="display:none"' : ''}>
                    <button onclick="speakChinese('${word.chinese}')" title="Phát âm">🔊</button>
                    <button onclick="toggleLearned('${word.id}')" title="${word.learned ? 'Đánh dấu chưa thuộc' : 'Đánh dấu đã thuộc'}">${word.learned ? '✅' : '⬜'}</button>
                    <button onclick="openEditModal('${word.id}')" title="Sửa">✏️</button>
                    <button onclick="deleteVocabulary('${word.id}')" title="Xóa">🗑️</button>
                </div>
            </div>
        `;
    }).join('');
}

// Get review status badge based on SRS
function getReviewStatusBadge(word) {
    if (!word.nextReview) return '';

    const now = new Date();
    const nextReview = new Date(word.nextReview);
    const diffDays = Math.ceil((nextReview - now) / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
        return '<span class="review-badge due">Cần ôn</span>';
    } else if (diffDays <= 7) {
        return `<span class="review-badge soon">${diffDays} ngày</span>`;
    } else {
        return '<span class="review-badge ok">✓</span>';
    }
}

// Add vocabulary in bulk (for import) with group support
function addVocabularyBulk(words, groupId = 'default') {
    let vocabulary = getVocabulary();

    words.forEach(word => {
        vocabulary.push({
            id: generateId(),
            chinese: word.chinese,
            pinyin: word.pinyin,
            meaning: word.meaning,
            example: word.example || '',
            groupId: groupId,
            learned: false,
            createdAt: new Date().toISOString(),
            ...createDefaultSRS()
        });
    });

    saveVocabularyToStorage(vocabulary);
    updateHomeStats();
}

// Get vocabulary by group
function getVocabularyByGroup(groupId) {
    const vocabulary = getVocabulary();
    if (groupId === 'all') return vocabulary;
    return vocabulary.filter(v => (v.groupId || 'default') === groupId);
}

// Get words due for review
function getWordsDueForReview() {
    const vocabulary = getVocabulary();
    const now = new Date();

    return vocabulary.filter(word => {
        if (!word.nextReview) return false;
        return new Date(word.nextReview) <= now;
    });
}

// Get words due for review by group
function getWordsDueForReviewByGroup(groupId) {
    const words = getWordsDueForReview();
    if (groupId === 'all') return words;
    return words.filter(v => (v.groupId || 'default') === groupId);
}

// Migrate old vocabulary to include new fields
function migrateVocabulary() {
    let vocabulary = getVocabulary();
    let needsMigration = false;

    vocabulary = vocabulary.map(v => {
        if (typeof v.groupId === 'undefined') {
            needsMigration = true;
            return {
                ...v,
                groupId: 'default',
                ...createDefaultSRS()
            };
        }
        return v;
    });

    if (needsMigration) {
        saveVocabularyToStorage(vocabulary);
        console.log('Vocabulary migrated to new format');
    }
}

// Run migration on load
document.addEventListener('DOMContentLoaded', migrateVocabulary);

// ========================================
// BULK SELECT MODE
// ========================================

let selectMode = false;
let selectedWords = new Set();

// Toggle select mode on/off
function toggleSelectMode() {
    selectMode = !selectMode;
    selectedWords.clear();

    const toolbar = document.getElementById('bulkToolbar');
    const selectBtn = document.getElementById('selectModeBtn');

    if (selectMode) {
        toolbar.style.display = 'flex';
        selectBtn.textContent = '✖️ Hủy chọn';
        selectBtn.classList.add('active');
    } else {
        toolbar.style.display = 'none';
        selectBtn.textContent = '☑️ Chọn';
        selectBtn.classList.remove('active');
    }

    document.getElementById('selectAllCheckbox').checked = false;
    updateSelectedCount();
    renderVocabularyList();
}

// Cancel select mode
function cancelSelectMode() {
    selectMode = false;
    selectedWords.clear();

    document.getElementById('bulkToolbar').style.display = 'none';
    document.getElementById('selectModeBtn').textContent = '☑️ Chọn';
    document.getElementById('selectModeBtn').classList.remove('active');
    document.getElementById('selectAllCheckbox').checked = false;

    updateSelectedCount();
    renderVocabularyList();
}

// Toggle individual word selection
function toggleWordSelection(wordId) {
    if (selectedWords.has(wordId)) {
        selectedWords.delete(wordId);
    } else {
        selectedWords.add(wordId);
    }

    updateSelectedCount();

    // Update the visual state of the item
    const item = document.querySelector(`.vocab-item[data-id="${wordId}"]`);
    if (item) {
        item.classList.toggle('selected', selectedWords.has(wordId));
    }

    // Update select all checkbox state
    const vocabulary = getFilteredVocabulary();
    document.getElementById('selectAllCheckbox').checked =
        vocabulary.length > 0 && selectedWords.size === vocabulary.length;
}

// Toggle select all
function toggleSelectAll() {
    const checkbox = document.getElementById('selectAllCheckbox');
    const vocabulary = getFilteredVocabulary();

    if (checkbox.checked) {
        vocabulary.forEach(word => selectedWords.add(word.id));
    } else {
        selectedWords.clear();
    }

    updateSelectedCount();
    renderVocabularyList();
}

// Get filtered vocabulary (respecting current filter)
function getFilteredVocabulary() {
    let vocabulary = getVocabulary();

    if (typeof currentGroupFilter !== 'undefined' && currentGroupFilter !== 'all') {
        vocabulary = vocabulary.filter(v => (v.groupId || 'default') === currentGroupFilter);
    }

    return vocabulary;
}

// Update selected count display
function updateSelectedCount() {
    const countEl = document.getElementById('selectedCount');
    const deleteBtn = document.getElementById('deleteSelectedBtn');

    if (countEl) {
        countEl.textContent = selectedWords.size;
    }

    if (deleteBtn) {
        deleteBtn.disabled = selectedWords.size === 0;
    }
}

// Delete all selected words
function deleteSelected() {
    if (selectedWords.size === 0) return;

    const count = selectedWords.size;
    if (!confirm(`Bạn có chắc muốn xóa ${count} từ vựng đã chọn?`)) return;

    let vocabulary = getVocabulary();
    vocabulary = vocabulary.filter(v => !selectedWords.has(v.id));
    saveVocabularyToStorage(vocabulary);

    showToast(`Đã xóa ${count} từ vựng!`, 'success');

    // Reset select mode
    cancelSelectMode();
    updateHomeStats();
}

