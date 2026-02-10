// ========================================
// FLASHCARD MODULE
// ========================================

let flashcardWords = [];
let currentCardIndex = 0;
let flashcardGroupFilter = 'all';

// Initialize flashcard mode with optional group filter
function initFlashcard(groupId = 'all') {
    flashcardGroupFilter = groupId;

    // Get vocabulary filtered by group
    let vocabulary;
    if (groupId === 'all') {
        vocabulary = getVocabulary();
    } else {
        vocabulary = getVocabularyByGroup(groupId);
    }

    // Check if there are words
    if (vocabulary.length === 0) {
        document.querySelector('.flashcard-container').style.display = 'none';
        document.getElementById('flashcardEmpty').style.display = 'block';
        return;
    }

    document.querySelector('.flashcard-container').style.display = 'flex';
    document.getElementById('flashcardEmpty').style.display = 'none';

    // Shuffle words
    flashcardWords = [...vocabulary].sort(() => Math.random() - 0.5);
    currentCardIndex = 0;

    updateFlashcardDisplay();
}

// Writing practice navigation functions
function updateWritingDisplay() {
    if (flashcardWords.length === 0) return;

    const word = flashcardWords[currentCardIndex];

    // Update progress
    document.getElementById('writingCurrent').textContent = currentCardIndex + 1;
    document.getElementById('writingTotal').textContent = flashcardWords.length;

    // Update hints
    document.getElementById('writingPinyin').textContent = word.pinyin;
    document.getElementById('writingMeaning').textContent = word.meaning;

    // Update overlay character
    document.getElementById('overlayCharacter').textContent = word.chinese;

    // Clear canvas for new character
    if (typeof clearWritingCanvas === 'function') {
        clearWritingCanvas();
    }
}

function nextWritingCard() {
    if (currentCardIndex < flashcardWords.length - 1) {
        currentCardIndex++;
        updateWritingDisplay();
    } else {
        currentCardIndex = 0;
        updateWritingDisplay();
        showToast('Đã xem hết! Bắt đầu lại từ đầu.', 'info');
    }
}

function prevWritingCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateWritingDisplay();
    }
}

// Update flashcard display
function updateFlashcardDisplay() {
    if (flashcardWords.length === 0) return;

    const word = flashcardWords[currentCardIndex];

    // Update progress
    document.getElementById('flashcardCurrent').textContent = currentCardIndex + 1;
    document.getElementById('flashcardTotal').textContent = flashcardWords.length;

    // Update card content
    document.getElementById('flashcardChinese').textContent = word.chinese;
    document.getElementById('flashcardPinyin').textContent = word.pinyin;
    document.getElementById('flashcardMeaning').textContent = word.meaning;
    document.getElementById('flashcardExample').textContent = word.example || '';

    // Reset card flip state
    document.getElementById('flashcard').classList.remove('flipped');
}

// Flip card
function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

// Next card
function nextCard() {
    if (currentCardIndex < flashcardWords.length - 1) {
        currentCardIndex++;
        updateFlashcardDisplay();
    } else {
        // Loop back to start
        currentCardIndex = 0;
        updateFlashcardDisplay();
        showToast('Đã xem hết! Bắt đầu lại từ đầu.', 'info');
    }
}

// Previous card
function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcardDisplay();
    }
}

// Mark word as learned/not learned (also updates SRS)
function markWord(learned) {
    if (flashcardWords.length === 0) return;

    const word = flashcardWords[currentCardIndex];

    // Update SRS data
    if (typeof updateWordSRS === 'function') {
        updateWordSRS(word.id, learned);
    } else {
        // Fallback if SRS not loaded
        let vocabulary = getVocabulary();
        vocabulary = vocabulary.map(v => {
            if (v.id === word.id) {
                return { ...v, learned };
            }
            return v;
        });
        saveVocabularyToStorage(vocabulary);
    }

    // Update local state
    flashcardWords[currentCardIndex].learned = learned;

    showToast(learned ? '✅ Đã đánh dấu thuộc!' : '❌ Đã đánh dấu chưa thuộc', 'success');

    // Move to next card
    nextCard();
    updateHomeStats();
}

// Keyboard navigation for flashcards
document.addEventListener('keydown', (e) => {
    if (typeof currentScreen === 'undefined' || currentScreen !== 'flashcard') return;

    switch (e.key) {
        case ' ':
        case 'Enter':
            e.preventDefault();
            flipCard();
            break;
        case 'ArrowRight':
            nextCard();
            break;
        case 'ArrowLeft':
            prevCard();
            break;
        case '1':
            markWord(false);
            break;
        case '2':
            markWord(true);
            break;
    }
});
