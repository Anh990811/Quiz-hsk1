// ========================================
// CARD MATCHING GAME MODULE
// ========================================

let matchingGameWords = [];
let matchingCards = [];
let flippedCards = [];
let matchedPairs = 0;
let gameTimer = null;
let gameStartTime = null;
let gameSeconds = 0;
let gameMoves = 0;
let matchingGameFilter = 'all';
let gridSize = 8; // 4x2 grid = 8 cards (4 pairs)

// Difficulty levels
const DIFFICULTY_LEVELS = {
    easy: { pairs: 4, grid: '4x2' },
    medium: { pairs: 6, grid: '4x3' },
    hard: { pairs: 8, grid: '4x4' }
};

// Start matching game with difficulty
function startMatchingGame(difficulty = 'easy', groupId = 'all') {
    matchingGameFilter = groupId;
    const level = DIFFICULTY_LEVELS[difficulty];

    // Get vocabulary filtered by group
    let vocabulary;
    if (groupId === 'all') {
        vocabulary = getVocabulary();
    } else {
        vocabulary = getVocabularyByGroup(groupId);
    }

    // Check minimum words
    if (vocabulary.length < level.pairs) {
        showToast(`❌ Cần ít nhất ${level.pairs} từ vựng!`, 'error');
        return;
    }

    // Shuffle and select words
    matchingGameWords = [...vocabulary]
        .sort(() => Math.random() - 0.5)
        .slice(0, level.pairs);

    // Create card pairs (chinese and meaning)
    matchingCards = [];
    matchingGameWords.forEach((word, index) => {
        matchingCards.push({
            id: `chinese-${index}`,
            wordId: word.id,
            type: 'chinese',
            content: word.chinese,
            pairId: index
        });
        matchingCards.push({
            id: `meaning-${index}`,
            wordId: word.id,
            type: 'meaning',
            content: word.meaning,
            pairId: index
        });
    });

    // Shuffle cards
    matchingCards = matchingCards.sort(() => Math.random() - 0.5);

    // Reset game state
    flippedCards = [];
    matchedPairs = 0;
    gameMoves = 0;
    gameSeconds = 0;

    // Show game screen
    document.getElementById('matchingSetup').style.display = 'none';
    document.getElementById('matchingGame').style.display = 'block';
    document.getElementById('matchingResult').style.display = 'none';

    // Render grid
    renderMatchingGrid(level.grid);

    // Start timer
    startGameTimer();
}

// Render matching card grid
function renderMatchingGrid(gridClass) {
    const grid = document.getElementById('matchingGrid');
    grid.className = `matching-grid ${gridClass}`;

    grid.innerHTML = matchingCards.map((card, index) => `
        <div class="matching-card" data-index="${index}" onclick="flipMatchingCard(${index})">
            <div class="matching-card-inner">
                <div class="matching-card-front">
                    <span>${card.type === 'chinese' ? '汉' : 'A'}</span>
                </div>
                <div class="matching-card-back ${card.type}">
                    <span>${card.content}</span>
                </div>
            </div>
        </div>
    `).join('');

    updateMatchingStats();
}

// Flip matching card
function flipMatchingCard(index) {
    const cardElement = document.querySelector(`.matching-card[data-index="${index}"]`);
    const card = matchingCards[index];

    // Prevent flipping if already matched or max flipped
    if (cardElement.classList.contains('matched') ||
        cardElement.classList.contains('flipped') ||
        flippedCards.length >= 2) {
        return;
    }

    // Flip card
    cardElement.classList.add('flipped');
    flippedCards.push({ index, card, element: cardElement });

    // Check for match when 2 cards flipped
    if (flippedCards.length === 2) {
        gameMoves++;
        updateMatchingStats();
        setTimeout(checkMatch, 800);
    }
}

// Check if flipped cards match
function checkMatch() {
    const [first, second] = flippedCards;

    if (first.card.pairId === second.card.pairId) {
        // Match found
        first.element.classList.add('matched');
        second.element.classList.add('matched');
        matchedPairs++;

        showToast('✅ Đúng!', 'success');

        // Check if game complete
        if (matchedPairs === matchingGameWords.length) {
            setTimeout(showMatchingResult, 500);
        }
    } else {
        // No match
        setTimeout(() => {
            first.element.classList.remove('flipped');
            second.element.classList.remove('flipped');
        }, 400);
    }

    flippedCards = [];
}

// Start game timer
function startGameTimer() {
    gameStartTime = Date.now();
    gameTimer = setInterval(() => {
        gameSeconds = Math.floor((Date.now() - gameStartTime) / 1000);
        updateMatchingStats();
    }, 1000);
}

// Stop game timer
function stopGameTimer() {
    if (gameTimer) {
        clearInterval(gameTimer);
        gameTimer = null;
    }
}

// Update matching stats
function updateMatchingStats() {
    document.getElementById('matchingTime').textContent = formatGameTime(gameSeconds);
    document.getElementById('matchingMoves').textContent = gameMoves;
    document.getElementById('matchingPairs').textContent = `${matchedPairs}/${matchingGameWords.length}`;
}

// Format game time
function formatGameTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Show matching game result
function showMatchingResult() {
    stopGameTimer();

    document.getElementById('matchingGame').style.display = 'none';
    document.getElementById('matchingResult').style.display = 'flex';

    // Calculate score (lower is better)
    const timeBonus = Math.max(0, 300 - gameSeconds);
    const moveBonus = Math.max(0, (matchingGameWords.length * 4) - gameMoves);
    const totalScore = timeBonus + moveBonus;

    document.getElementById('finalTime').textContent = formatGameTime(gameSeconds);
    document.getElementById('finalMoves').textContent = gameMoves;
    document.getElementById('finalPairs').textContent = matchingGameWords.length;
    document.getElementById('matchingTotalScore').textContent = totalScore;

    // Performance message
    let message = '';
    if (gameMoves === matchingGameWords.length) {
        message = '🏆 Hoàn hảo! Perfect!';
    } else if (gameMoves <= matchingGameWords.length * 1.5) {
        message = '🎉 Xuất sắc!';
    } else if (gameMoves <= matchingGameWords.length * 2) {
        message = '👍 Tốt lắm!';
    } else {
        message = '💪 Cố gắng lên!';
    }

    document.getElementById('matchingResultMessage').textContent = message;
}

// Reset matching game
function resetMatchingGame() {
    stopGameTimer();
    document.getElementById('matchingSetup').style.display = 'block';
    document.getElementById('matchingGame').style.display = 'none';
    document.getElementById('matchingResult').style.display = 'none';
}
