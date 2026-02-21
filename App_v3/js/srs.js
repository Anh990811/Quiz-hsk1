// ========================================
// SPACED REPETITION SYSTEM (SM-2)
// ========================================

/**
 * SM-2 Algorithm Implementation
 * Based on SuperMemo 2 algorithm by Piotr Wozniak
 * 
 * Quality ratings:
 * 0 - Complete failure
 * 1 - Wrong, but recognized upon seeing answer
 * 2 - Wrong, but easy to recall once seen
 * 3 - Correct with serious difficulty
 * 4 - Correct with hesitation
 * 5 - Perfect response
 */

// Calculate next review based on SM-2 algorithm
function calculateSRS(word, quality) {
    // quality: 0-5, where 0-2 = fail, 3-5 = pass
    let { interval, easeFactor, repetitions } = word;

    // Initialize defaults if not set
    interval = interval || 0;
    easeFactor = easeFactor || 2.5;
    repetitions = repetitions || 0;

    if (quality >= 3) {
        // Correct response
        if (repetitions === 0) {
            interval = 1;
        } else if (repetitions === 1) {
            interval = 6;
        } else {
            interval = Math.round(interval * easeFactor);
        }
        repetitions++;
    } else {
        // Incorrect response - reset
        repetitions = 0;
        interval = 1;
    }

    // Update ease factor
    easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

    // Minimum ease factor is 1.3
    if (easeFactor < 1.3) {
        easeFactor = 1.3;
    }

    // Calculate next review date
    const now = new Date();
    const nextReview = new Date(now.getTime() + interval * 24 * 60 * 60 * 1000);

    return {
        interval,
        easeFactor,
        repetitions,
        nextReview: nextReview.toISOString(),
        lastReview: now.toISOString()
    };
}

// Update word with SRS data after review
function updateWordSRS(wordId, isCorrect) {
    let vocabulary = getVocabulary();

    vocabulary = vocabulary.map(word => {
        if (word.id === wordId) {
            // Quality: 5 for correct, 1 for incorrect
            const quality = isCorrect ? 5 : 1;
            const srsData = calculateSRS(word, quality);

            return {
                ...word,
                ...srsData,
                correctCount: (word.correctCount || 0) + (isCorrect ? 1 : 0),
                wrongCount: (word.wrongCount || 0) + (isCorrect ? 0 : 1),
                learned: isCorrect && srsData.interval >= 21 // Mark as learned if interval >= 21 days
            };
        }
        return word;
    });

    saveVocabularyToStorage(vocabulary);
}

// Get words due for review today
function getWordsDueToday() {
    const vocabulary = getVocabulary();
    const now = new Date();
    now.setHours(23, 59, 59, 999); // End of today

    return vocabulary.filter(word => {
        // Include words with no nextReview (never reviewed)
        if (!word.nextReview) return true;
        return new Date(word.nextReview) <= now;
    });
}

// Get words due for review today by group
function getWordsDueTodayByGroup(groupId) {
    const words = getWordsDueToday();
    if (groupId === 'all') return words;
    return words.filter(w => (w.groupId || 'default') === groupId);
}

// Get upcoming reviews (next 7 days)
function getUpcomingReviews() {
    const vocabulary = getVocabulary();
    const now = new Date();
    const weekLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

    return vocabulary.filter(word => {
        if (!word.nextReview) return false;
        const reviewDate = new Date(word.nextReview);
        return reviewDate > now && reviewDate <= weekLater;
    });
}

// Get review summary for home screen
function getReviewSummary() {
    const dueToday = getWordsDueToday().length;
    const upcoming = getUpcomingReviews().length;
    const vocabulary = getVocabulary();
    const learned = vocabulary.filter(w => w.learned).length;

    return {
        dueToday,
        upcoming,
        total: vocabulary.length,
        learned,
        mastery: vocabulary.length > 0 ? Math.round((learned / vocabulary.length) * 100) : 0
    };
}

// Get review summary by group
function getReviewSummaryByGroup(groupId) {
    const vocabulary = getVocabularyByGroup(groupId);
    const now = new Date();
    now.setHours(23, 59, 59, 999);

    const dueToday = vocabulary.filter(w => {
        if (!w.nextReview) return true;
        return new Date(w.nextReview) <= now;
    }).length;

    const learned = vocabulary.filter(w => w.learned).length;

    return {
        dueToday,
        total: vocabulary.length,
        learned,
        mastery: vocabulary.length > 0 ? Math.round((learned / vocabulary.length) * 100) : 0
    };
}

// Format next review date for display
function formatNextReview(nextReview) {
    if (!nextReview) return 'Chưa học';

    const now = new Date();
    const reviewDate = new Date(nextReview);
    const diffMs = reviewDate - now;
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
        return 'Cần ôn ngay';
    } else if (diffDays === 1) {
        return 'Ngày mai';
    } else if (diffDays <= 7) {
        return `${diffDays} ngày nữa`;
    } else if (diffDays <= 30) {
        return `${Math.ceil(diffDays / 7)} tuần nữa`;
    } else {
        return `${Math.ceil(diffDays / 30)} tháng nữa`;
    }
}

// Initialize review session
let reviewWords = [];
let currentReviewIndex = 0;
let reviewGroupFilter = 'all';

function initReviewSession(groupId = 'all') {
    reviewGroupFilter = groupId;
    reviewWords = getWordsDueTodayByGroup(groupId);
    currentReviewIndex = 0;

    if (reviewWords.length === 0) {
        document.getElementById('reviewContainer').style.display = 'none';
        document.getElementById('reviewEmpty').style.display = 'block';
        return false;
    }

    document.getElementById('reviewContainer').style.display = 'flex';
    document.getElementById('reviewEmpty').style.display = 'none';
    displayReviewCard();
    return true;
}

// Display current review card
function displayReviewCard() {
    if (currentReviewIndex >= reviewWords.length) {
        showReviewComplete();
        return;
    }

    const word = reviewWords[currentReviewIndex];

    document.getElementById('reviewCurrent').textContent = currentReviewIndex + 1;
    document.getElementById('reviewTotal').textContent = reviewWords.length;
    // document.getElementById('reviewChinese').textContent = word.chinese;
    document.getElementById('reviewChinese').innerHTML = `
        ${word.chinese}
        <button class="dict-btn" onclick="event.stopPropagation(); openDictionary('${word.chinese}')" title="Tra từ điển">📖</button>
    `;
    document.getElementById('reviewPinyin').textContent = word.pinyin;
    document.getElementById('reviewMeaning').textContent = word.meaning;

    // Example with TTS
    const example = word.example || '';
    if (example) {
        const escapedExample = example.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        document.getElementById('reviewExample').innerHTML = `
            ${example} 
            <button class="speak-btn-sm" onclick="event.stopPropagation(); speakChinese('${escapedExample}')" title="Nghe ví dụ">🔊</button>
        `;
    } else {
        document.getElementById('reviewExample').innerHTML = '';
    }

    // Reset card state
    document.getElementById('reviewCard').classList.remove('flipped');
    document.getElementById('reviewActions').style.display = 'none';
}

// Flip review card
function flipReviewCard() {
    document.getElementById('reviewCard').classList.add('flipped');
    document.getElementById('reviewActions').style.display = 'flex';
}

// Answer review (correct/incorrect)
function answerReview(isCorrect) {
    const word = reviewWords[currentReviewIndex];
    updateWordSRS(word.id, isCorrect);

    showToast(isCorrect ? '✅ Chính xác!' : '❌ Cần ôn lại!', isCorrect ? 'success' : 'error');

    currentReviewIndex++;
    displayReviewCard();
}

// Show review session complete
function showReviewComplete() {
    document.getElementById('reviewContainer').style.display = 'none';
    document.getElementById('reviewComplete').style.display = 'block';
    document.getElementById('reviewedCount').textContent = reviewWords.length;

    updateHomeStats();
}

// Reset review session
function resetReviewSession() {
    document.getElementById('reviewComplete').style.display = 'none';
    initReviewSession(reviewGroupFilter);
}

// Render review summary on home
function renderReviewBadge() {
    const summary = getReviewSummary();
    const badge = document.getElementById('reviewBadge');

    if (badge) {
        if (summary.dueToday > 0) {
            badge.textContent = summary.dueToday;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }
}
