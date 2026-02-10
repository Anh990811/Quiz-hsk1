// ========================================
// CARD MATCHING GAME MODULE (COLUMN STYLE)
// ========================================

let matchingGameWords = [];
let leftItems = [];
let rightItems = [];
let selectedLeft = null;
let selectedRight = null;
let matchedPairs = 0;
let gameTimer = null;
let gameStartTime = null;
let gameSeconds = 0;
let matchingGameFilter = 'all';

// Difficulty levels
const DIFFICULTY_LEVELS = {
    easy: { pairs: 5 },
    medium: { pairs: 7 },
    hard: { pairs: 10 }
};

// Start matching game
function startMatchingGame(difficulty = 'easy', groupId = 'all') {
    matchingGameFilter = groupId;
    const level = DIFFICULTY_LEVELS[difficulty];

    // Get vocabulary
    let vocabulary;
    if (groupId === 'all') {
        vocabulary = getVocabulary();
    } else {
        vocabulary = getVocabularyByGroup(groupId);
    }

    // Check minimum (need at least pairs count)
    if (vocabulary.length < level.pairs) {
        showToast(`❌ Cần ít nhất ${level.pairs} từ vựng!`, 'error');
        return;
    }

    // Select random words
    matchingGameWords = [...vocabulary]
        .sort(() => Math.random() - 0.5)
        .slice(0, level.pairs);

    // Prepare Left (Chinese) and Right (Meaning) items
    leftItems = matchingGameWords.map((word, index) => ({
        id: `left-${index}`,
        wordId: word.id,
        content: word.chinese,
        matched: false
    })).sort(() => Math.random() - 0.5); // Shuffle left

    rightItems = matchingGameWords.map((word, index) => ({
        id: `right-${index}`,
        wordId: word.id,
        content: word.meaning,
        matched: false
    })).sort(() => Math.random() - 0.5); // Shuffle right

    // Reset State
    selectedLeft = null;
    selectedRight = null;
    matchedPairs = 0;
    gameSeconds = 0;

    // UI Setup
    document.getElementById('matchingSetup').style.display = 'none';
    document.getElementById('matchingGame').style.display = 'block';
    document.getElementById('matchingResult').style.display = 'none';

    renderMatchingColumns();
    startGameTimer();
}

// Render Columns
function renderMatchingColumns() {
    const container = document.getElementById('matchingGrid');
    container.className = 'matching-game-area'; // Change class to new flex layout

    // Create Layout
    container.innerHTML = `
        <div class="matching-column" id="col-left">
            ${leftItems.map(item => createCardHTML(item, 'left')).join('')}
        </div>
        <div class="matching-column" id="col-right">
            ${rightItems.map(item => createCardHTML(item, 'right')).join('')}
        </div>
    `;

    updateMatchingStats();
}

// Create Card HTML
function createCardHTML(item, side) {
    if (item.matched) return `<div class="word-card matched placeholder"></div>`;

    const isSelected = (side === 'left' && selectedLeft === item.id) ||
        (side === 'right' && selectedRight === item.id);

    return `
        <div class="word-card ${isSelected ? 'selected' : ''} ${side}" 
             onclick="handleCardClick('${item.id}', '${side}')"
             id="${item.id}">
            ${item.content}
        </div>
    `;
}

// Handle Card Click
function handleCardClick(id, side) {
    // Determine item
    const list = side === 'left' ? leftItems : rightItems;
    const item = list.find(i => i.id === id);

    if (!item || item.matched) return;

    // Update Selection
    if (side === 'left') {
        if (selectedLeft === id) selectedLeft = null; // Toggle off
        else selectedLeft = id;
    } else {
        if (selectedRight === id) selectedRight = null; // Toggle off
        else selectedRight = id;
    }

    // Re-render to show selection
    updateCardStyles();

    // Check Match if both selected
    if (selectedLeft && selectedRight) {
        checkPairMatch();
    }
}

// Update Styles (instead of full re-render)
function updateCardStyles() {
    document.querySelectorAll('.word-card').forEach(el => {
        el.classList.remove('selected');
        if (el.id === selectedLeft || el.id === selectedRight) {
            el.classList.add('selected');
        }
    });
}

// Check Pair
function checkPairMatch() {
    const leftItem = leftItems.find(i => i.id === selectedLeft);
    const rightItem = rightItems.find(i => i.id === selectedRight);

    if (leftItem.wordId === rightItem.wordId) {
        // MATCH!
        handleCorrectMatch(leftItem, rightItem);
    } else {
        // WRONG
        handleIncorrectMatch();
    }
}

// Correct Match
function handleCorrectMatch(left, right) {
    // Visual Feedback
    const leftEl = document.getElementById(left.id);
    const rightEl = document.getElementById(right.id);

    leftEl.classList.add('correct');
    rightEl.classList.add('correct');

    // Update Data
    left.matched = true;
    right.matched = true;
    selectedLeft = null;
    selectedRight = null;
    matchedPairs++;

    updateMatchingStats();

    // Remove after short delay
    setTimeout(() => {
        renderMatchingColumns();

        // Check Win
        if (matchedPairs === matchingGameWords.length) {
            showMatchingResult();
        }
    }, 400);
}

// Incorrect Match
function handleIncorrectMatch() {
    const leftEl = document.getElementById(selectedLeft);
    const rightEl = document.getElementById(selectedRight);

    leftEl.classList.add('wrong');
    rightEl.classList.add('wrong');

    // Reset Selection after delay
    setTimeout(() => {
        leftEl?.classList.remove('wrong', 'selected');
        rightEl?.classList.remove('wrong', 'selected');
        selectedLeft = null;
        selectedRight = null;
    }, 500);
}

// --- Utils (Timer, Stats, Result) ---

function startGameTimer() {
    stopGameTimer();
    gameStartTime = Date.now();
    gameTimer = setInterval(() => {
        gameSeconds = Math.floor((Date.now() - gameStartTime) / 1000);
        document.getElementById('matchingTime').textContent = formatGameTime(gameSeconds);
    }, 1000);
}

function stopGameTimer() {
    if (gameTimer) {
        clearInterval(gameTimer);
        gameTimer = null;
    }
}

function updateMatchingStats() {
    document.getElementById('matchingPairs').textContent = `${matchedPairs}/${matchingGameWords.length}`;
}

function formatGameTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function showMatchingResult() {
    stopGameTimer();
    document.getElementById('matchingGame').style.display = 'none';
    document.getElementById('matchingResult').style.display = 'flex';

    // Simple Score: Base 1000 - Time
    const score = Math.max(0, 1000 - (gameSeconds * 5));

    document.getElementById('finalTime').textContent = formatGameTime(gameSeconds);
    document.getElementById('finalPairs').textContent = matchingGameWords.length;
    document.getElementById('matchingTotalScore').textContent = score;

    let message = score > 800 ? "🏆 Tuyệt vời!" : (score > 500 ? "🎉 Làm tốt lắm!" : "💪 Cố gắng hơn nhé!");
    document.getElementById('matchingResultMessage').textContent = message;
}

function resetMatchingGame() {
    stopGameTimer();
    document.getElementById('matchingSetup').style.display = 'block';
    document.getElementById('matchingGame').style.display = 'none';
    document.getElementById('matchingResult').style.display = 'none';
}
