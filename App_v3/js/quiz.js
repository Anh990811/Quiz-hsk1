// ========================================
// QUIZ & MATCHING GAME MODULE
// ========================================

const MATCHING_PAIRS_COUNT = 8;
let matchingCards = [];
let flippedCards = [];
let matchedPairs = 0;
let isCheckingMatch = false;
let matchingTimerInterval;
let matchingSeconds = 0;

let quizMode = 'meaning'; // 'meaning' or 'character'
let quizWords = [];
let currentQuizIndex = 0;
let quizScore = 0;
let currentQuizWord = '';
let isAnswered = false;
let quizGroupFilter = 'all';
let quizQuestionCount = 10; // Variable question count
let quizAnswers = []; // Track all answers (true/false/null for unanswered)

const OPTIONS_COUNT = 4;
const QUIZ_STORAGE_KEY = 'savedQuizProgress';

// Typing quiz state
let typingWords = [];
let currentTypingIndex = 0;
let typingScore = 0;
let typingQuestionCount = 10;
let currentTypingWord = null;
let typingAnswered = false;

// Helper: hide all quiz panels
function hideAllQuizPanels() {
    ['quizSetup', 'quizEmpty', 'quizResult', 'quizGame', 'matchingGame', 'typingGame']
        .forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
}

// Start quiz with selected mode and optional group filter
function startQuiz(mode, groupId = 'all') {
    quizGroupFilter = groupId;

    // Get question count from slider
    const countSlider = document.getElementById('questionCountSlider');
    quizQuestionCount = countSlider ? parseInt(countSlider.value) : 10;

    // Get vocabulary filtered by group
    let vocabulary;
    if (groupId === 'all') {
        vocabulary = getVocabulary();
    } else {
        vocabulary = getVocabularyByGroup(groupId);
    }

    // Check minimum words
    if (vocabulary.length < OPTIONS_COUNT && mode !== 'matching') {
        showQuizEmptyState();
        return;
    }

    if (mode === 'matching') {
        if (vocabulary.length < MATCHING_PAIRS_COUNT) {
            showQuizEmptyState(MATCHING_PAIRS_COUNT);
            return;
        }
        startMatchingGame(vocabulary);
        return;
    }

    if (mode === 'typing') {
        if (vocabulary.length < 1) { showQuizEmptyState(); return; }
        startTypingQuiz(vocabulary);
        return;
    }

    if (mode === 'listening') {
        if (vocabulary.length < OPTIONS_COUNT) { showQuizEmptyState(); return; }
        // Listening uses normal quiz flow but auto-plays audio
        quizMode = 'listening';
        quizWords = [...vocabulary].sort(() => Math.random() - 0.5).slice(0, Math.min(quizQuestionCount, vocabulary.length));
        currentQuizIndex = 0;
        quizScore = 0;
        isAnswered = false;
        quizAnswers = new Array(quizWords.length).fill(null);
        hideAllQuizPanels();
        document.getElementById('quizGame').style.display = 'flex';
        document.getElementById('quizTotal').textContent = quizWords.length;
        displayQuizQuestion();
        return;
    }

    quizMode = mode;
    quizWords = [...vocabulary].sort(() => Math.random() - 0.5).slice(0, Math.min(quizQuestionCount, vocabulary.length));
    currentQuizIndex = 0;
    quizScore = 0;
    isAnswered = false;
    quizAnswers = new Array(quizWords.length).fill(null); // Initialize answers array

    // Update UI
    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizEmpty').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('typingGame').style.display = 'none';
    document.getElementById('quizGame').style.display = 'flex';

    document.getElementById('quizTotal').textContent = quizWords.length;

    displayQuizQuestion();
}

// Display current quiz question
function displayQuizQuestion() {
    if (currentQuizIndex >= quizWords.length) {
        showQuizResult();
        return;
    }

    isAnswered = false;
    const word = quizWords[currentQuizIndex];
    currentQuizWord = word.chinese;

    // Update progress
    document.getElementById('quizCurrent').textContent = currentQuizIndex + 1;
    document.getElementById('quizScore').textContent = quizScore;

    // Update question
    const questionContent = document.getElementById('questionContent');
    const speakBtn = document.getElementById('quizSpeakBtn');

    if (quizMode === 'meaning') {
        // Show Chinese character, choose meaning
        questionContent.innerHTML = `<span class="question-chinese">${word.chinese}</span>`;
        speakBtn.style.display = 'block';
    } else if (quizMode === 'listening') {
        // Hide text — only show speaker button, auto-play
        questionContent.innerHTML = `<span style="font-size:3rem;">🎧</span><span style="display:block;font-size:0.9rem;color:var(--text-secondary);margin-top:4px;">Nghe và chọn nghĩa đúng</span>`;
        speakBtn.style.display = 'block';
        setTimeout(() => speakChinese(word.chinese), 300);
    } else {
        // Show meaning, choose Chinese character
        questionContent.innerHTML = `<span class="question-meaning">${word.meaning}</span>`;
        speakBtn.style.display = 'none';
    }

    // Generate options
    generateQuizOptions(word);
}

// Generate quiz options
function generateQuizOptions(correctWord) {
    // Get vocabulary for options (use same group or all if not enough)
    let vocabulary = quizGroupFilter === 'all' ? getVocabulary() : getVocabularyByGroup(quizGroupFilter);

    // If not enough words in group, use all vocabulary
    if (vocabulary.length < OPTIONS_COUNT) {
        vocabulary = getVocabulary();
    }

    // Get wrong options (excluding current word)
    const wrongOptions = vocabulary
        .filter(v => v.id !== correctWord.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, OPTIONS_COUNT - 1);

    // Combine and shuffle options
    const options = [...wrongOptions, correctWord].sort(() => Math.random() - 0.5);

    // Render options
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = options.map((option, index) => {
        if (quizMode === 'meaning') {
            return `
                <button class="quiz-option" onclick="checkAnswer('${option.id}', '${correctWord.id}', this)">
                    ${String.fromCharCode(65 + index)}. ${option.meaning}
                </button>
            `;
        } else {
            return `
                <button class="quiz-option" onclick="checkAnswer('${option.id}', '${correctWord.id}', this)">
                    <span class="option-chinese">${option.chinese}</span>
                </button>
            `;
        }
    }).join('');
}

// Check answer (also updates SRS)
function checkAnswer(selectedId, correctId, buttonElement) {
    if (isAnswered) return;
    isAnswered = true;

    const isCorrect = selectedId === correctId;
    const word = quizWords[currentQuizIndex];

    // Record answer
    quizAnswers[currentQuizIndex] = isCorrect;

    // Update SRS data
    if (typeof updateWordSRS === 'function') {
        updateWordSRS(word.id, isCorrect);
    }

    // Update score
    if (isCorrect) {
        quizScore++;
        buttonElement.classList.add('correct');
        showToast('✅ Chính xác!', 'success');
    } else {
        buttonElement.classList.add('wrong');
        // Highlight correct answer
        document.querySelectorAll('.quiz-option').forEach(btn => {
            if (btn.onclick.toString().includes(correctId)) {
                btn.classList.add('correct');
            }
            btn.classList.add('disabled');
        });
        showToast('❌ Sai rồi!', 'error');
    }

    // Disable all options
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.classList.add('disabled');
    });

    // Move to next question after delay
    setTimeout(() => {
        currentQuizIndex++;
        displayQuizQuestion();
    }, 1500);
}

// Show quiz result
function showQuizResult(isIncomplete = false) {
    document.getElementById('quizGame').style.display = 'none';
    document.getElementById('quizResult').style.display = 'flex';

    // Count answered questions
    const answeredCount = quizAnswers.filter(a => a !== null).length;
    const unansweredCount = quizWords.length - answeredCount;

    document.getElementById('finalScore').textContent = quizScore;
    document.getElementById('scoreTotalDisplay').textContent = '/ ' + answeredCount;

    // Show stats for incomplete quiz
    const statsDiv = document.getElementById('resultStats');
    if (isIncomplete && unansweredCount > 0) {
        document.getElementById('resultTitle').textContent = '📝 Đã nộp bài!';
        statsDiv.innerHTML = `
            <p style="margin: 10px 0; font-size: 14px;">
                ✅ Đã trả lời: <strong>${answeredCount}/${quizWords.length}</strong> câu<br>
                ⏭️ Chưa trả lời: <strong>${unansweredCount}</strong> câu
            </p>
        `;
    } else {
        document.getElementById('resultTitle').textContent = '🎉 Hoàn thành!';
        statsDiv.innerHTML = '';
    }

    // Result message based on score
    const percentage = answeredCount > 0 ? (quizScore / answeredCount) * 100 : 0;
    let message = '';

    if (percentage === 100) {
        message = '🏆 Hoàn hảo! Tuyệt vời!';
    } else if (percentage >= 80) {
        message = '🎉 Xuất sắc!';
    } else if (percentage >= 60) {
        message = '👍 Khá tốt!';
    } else if (percentage >= 40) {
        message = '📚 Cần ôn tập thêm!';
    } else {
        message = '💪 Cố gắng lên!';
    }

    document.getElementById('resultMessage').textContent = message;

    // Clear saved progress
    clearQuizProgress();

    // Update home stats
    updateHomeStats();
}

// Reset quiz
function resetQuiz() {
    // Check for saved progress
    const savedQuiz = loadQuizProgress();
    if (savedQuiz) {
        const resume = confirm('Bạn có bài quiz đang dở. Tiếp tục làm?');
        if (resume) {
            restoreQuizProgress(savedQuiz);
            return;
        } else {
            clearQuizProgress();
        }
    }

    document.getElementById('quizSetup').style.display = 'block';
    document.getElementById('quizGame').style.display = 'none';
    document.getElementById('matchingGame').style.display = 'none';
    document.getElementById('typingGame').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('quizEmpty').style.display = 'none';

    // Check if we have enough words
    const groupId = quizGroupFilter || 'all';
    const vocabulary = groupId === 'all' ? getVocabulary() : getVocabularyByGroup(groupId);

    if (vocabulary.length < OPTIONS_COUNT) {
        document.getElementById('quizSetup').style.display = 'none';
        document.getElementById('quizEmpty').style.display = 'block';
    }
}

// Save quiz progress to localStorage
function saveQuizProgress() {
    const quizState = {
        mode: quizMode,
        groupFilter: quizGroupFilter,
        words: quizWords,
        currentIndex: currentQuizIndex,
        score: quizScore,
        answers: quizAnswers,
        questionCount: quizQuestionCount,
        timestamp: Date.now()
    };

    try {
        localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(quizState));
        showToast('💾 Đã lưu tiến độ!', 'success');
    } catch (e) {
        showToast('❌ Không thể lưu tiến độ', 'error');
    }
}

// Load quiz progress from localStorage
function loadQuizProgress() {
    try {
        const saved = localStorage.getItem(QUIZ_STORAGE_KEY);
        if (saved) {
            const quizState = JSON.parse(saved);
            // Check if saved quiz is less than 24 hours old
            if (Date.now() - quizState.timestamp < 24 * 60 * 60 * 1000) {
                return quizState;
            } else {
                clearQuizProgress();
            }
        }
    } catch (e) {
        console.error('Error loading quiz progress:', e);
    }
    return null;
}

// Restore quiz from saved state
function restoreQuizProgress(quizState) {
    quizMode = quizState.mode;
    quizGroupFilter = quizState.groupFilter;
    quizWords = quizState.words;
    currentQuizIndex = quizState.currentIndex;
    quizScore = quizState.score;
    quizAnswers = quizState.answers;
    quizQuestionCount = quizState.questionCount;
    isAnswered = false;

    // Update UI
    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizEmpty').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('quizGame').style.display = 'flex';

    document.getElementById('quizTotal').textContent = quizWords.length;
    document.getElementById('quizScore').textContent = quizScore;

    displayQuizQuestion();
    showToast('✅ Đã khôi phục tiến độ!', 'success');
}

// Clear quiz progress
function clearQuizProgress() {
    try {
        localStorage.removeItem(QUIZ_STORAGE_KEY);
    } catch (e) {
        console.error('Error clearing quiz progress:', e);
    }
}

// Show empty state
function showQuizEmptyState(minCount = OPTIONS_COUNT) {
    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizGame').style.display = 'none';
    document.getElementById('matchingGame').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
    const emptyState = document.getElementById('quizEmpty');
    emptyState.style.display = 'block';
    emptyState.querySelector('p').textContent = `📭 Cần ít nhất ${minCount} từ vựng để chơi!`;
}

// ========================================
// MATCHING GAME LOGIC
// ========================================

function startMatchingGame(vocabulary) {
    quizMode = 'matching';

    // Select random words
    const words = [...vocabulary].sort(() => Math.random() - 0.5).slice(0, MATCHING_PAIRS_COUNT);

    // Generate pairs (Character + Meaning)
    matchingCards = [];
    words.forEach(word => {
        matchingCards.push({ id: word.id, content: word.chinese, type: 'chinese', word: word });
        matchingCards.push({ id: word.id, content: word.meaning, type: 'meaning', word: word });
    });

    // Shuffle cards
    matchingCards.sort(() => Math.random() - 0.5);

    // Reset state
    flippedCards = [];
    matchedPairs = 0;
    isCheckingMatch = false;
    matchingSeconds = 0;

    // Update UI
    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizEmpty').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('quizGame').style.display = 'none';
    document.getElementById('matchingGame').style.display = 'flex';

    document.getElementById('matchingFound').textContent = '0';
    document.getElementById('matchingTotal').textContent = MATCHING_PAIRS_COUNT;
    updateMatchingTimer();

    renderMatchingGrid();
    startMatchingTimer();
}

function renderMatchingGrid() {
    const grid = document.getElementById('matchingGrid');
    grid.innerHTML = matchingCards.map((card, index) => `
        <div class="matching-card ${card.type}" onclick="flipMatchingCard(${index})" data-index="${index}">
            <span>${card.content}</span>
        </div>
    `).join('');
}

function flipMatchingCard(index) {
    if (isCheckingMatch) return;

    const cardElement = document.querySelector(`.matching-card[data-index="${index}"]`);
    if (cardElement.classList.contains('matched')) return;

    // If already selected, deselect it
    if (cardElement.classList.contains('selected')) {
        cardElement.classList.remove('selected');
        flippedCards = flippedCards.filter(c => c.index !== index);
        return;
    }

    // Select the card
    cardElement.classList.add('selected');
    flippedCards.push({ index, ...matchingCards[index] });

    // Play sound if chinese
    if (matchingCards[index].type === 'chinese') {
        speakChinese(matchingCards[index].content);
    }

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    isCheckingMatch = true;
    const [card1, card2] = flippedCards;

    const el1 = document.querySelector(`.matching-card[data-index="${card1.index}"]`);
    const el2 = document.querySelector(`.matching-card[data-index="${card2.index}"]`);

    if (card1.id === card2.id && card1.type !== card2.type) {
        // Match found
        matchedPairs++;
        document.getElementById('matchingFound').textContent = matchedPairs;

        setTimeout(() => {
            el1.classList.remove('selected');
            el2.classList.remove('selected');
            el1.classList.add('matched');
            el2.classList.add('matched');

            // Update SRS for correct match
            if (typeof updateWordSRS === 'function') {
                updateWordSRS(card1.word.id, true);
            }

            checkGameCompletion();
            resetFlippedCards();
        }, 400);
    } else {
        // No match - shake then deselect
        setTimeout(() => {
            el1.classList.add('shake', 'wrong');
            el2.classList.add('shake', 'wrong');
            showToast('❌ Sai rồi!', 'error');
        }, 300);

        setTimeout(() => {
            el1.classList.remove('selected', 'shake', 'wrong');
            el2.classList.remove('selected', 'shake', 'wrong');
            resetFlippedCards();
        }, 1000);
    }
}

function resetFlippedCards() {
    flippedCards = [];
    isCheckingMatch = false;
}

function checkGameCompletion() {
    if (matchedPairs === MATCHING_PAIRS_COUNT) {
        stopMatchingTimer();
        setTimeout(() => {
            showMatchingResult();
        }, 500);
    }
}

function startMatchingTimer() {
    stopMatchingTimer();
    matchingTimerInterval = setInterval(() => {
        matchingSeconds++;
        updateMatchingTimer();
    }, 1000);
}

function stopMatchingTimer() {
    if (matchingTimerInterval) {
        clearInterval(matchingTimerInterval);
    }
}

function updateMatchingTimer() {
    const mins = Math.floor(matchingSeconds / 60).toString().padStart(2, '0');
    const secs = (matchingSeconds % 60).toString().padStart(2, '0');
    document.getElementById('matchingTimer').textContent = `${mins}:${secs}`;
}

function showMatchingResult() {
    document.getElementById('matchingGame').style.display = 'none';
    document.getElementById('quizResult').style.display = 'flex';

    document.getElementById('resultTitle').textContent = '🎉 Hoàn thành!';
    document.getElementById('finalScore').textContent = MATCHING_PAIRS_COUNT;
    document.getElementById('scoreTotalDisplay').textContent = 'cặp';

    const mins = Math.floor(matchingSeconds / 60);
    const secs = matchingSeconds % 60;
    const timeStr = mins > 0 ? `${mins} phút ${secs} giây` : `${secs} giây`;

    document.getElementById('resultStats').innerHTML = `
        <p style="font-size: 1.1rem; margin: 10px 0;">
            ⏱️ Thời gian: <strong>${timeStr}</strong>
        </p>
    `;

    document.getElementById('resultMessage').textContent = 'Tuyệt vời! Trí nhớ siêu phàm!';

    updateHomeStats();
}

function resetMatchingGame() {
    stopMatchingTimer();
    const vocabulary = quizGroupFilter === 'all' ? getVocabulary() : getVocabularyByGroup(quizGroupFilter);
    startMatchingGame(vocabulary);
}

function quitMatchingGame() {
    stopMatchingTimer();
    resetQuiz();
}

// ========================================
// TYPING QUIZ LOGIC
// ========================================

function startTypingQuiz(vocabulary) {
    const countSlider = document.getElementById('questionCountSlider');
    typingQuestionCount = countSlider ? parseInt(countSlider.value) : 10;

    typingWords = [...vocabulary].sort(() => Math.random() - 0.5).slice(0, Math.min(typingQuestionCount, vocabulary.length));
    currentTypingIndex = 0;
    typingScore = 0;
    typingAnswered = false;

    hideAllQuizPanels();
    document.getElementById('typingGame').style.display = 'flex';
    document.getElementById('typingTotal').textContent = typingWords.length;

    displayTypingQuestion();
}

function displayTypingQuestion() {
    if (currentTypingIndex >= typingWords.length) {
        showTypingResult();
        return;
    }

    typingAnswered = false;
    currentTypingWord = typingWords[currentTypingIndex];

    document.getElementById('typingCurrent').textContent = currentTypingIndex + 1;
    document.getElementById('typingScore').textContent = typingScore;
    document.getElementById('typingQuestionContent').innerHTML =
        `<span class="question-chinese">${currentTypingWord.chinese}</span>
         <span style="display:block;font-size:0.85rem;color:var(--text-secondary);margin-top:4px;">${currentTypingWord.pinyin}</span>`;

    const input = document.getElementById('typingInput');
    input.value = '';
    input.disabled = false;
    input.focus();

    const feedback = document.getElementById('typingFeedback');
    feedback.style.display = 'none';
    feedback.className = 'typing-feedback';
}

function speakTypingWord() {
    if (currentTypingWord) speakChinese(currentTypingWord.chinese);
}

// Normalize Vietnamese text for fuzzy comparison
function normalizeText(str) {
    return str.trim().toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ');
}

function submitTypingAnswer() {
    if (typingAnswered || currentTypingIndex >= typingWords.length) return;

    const input = document.getElementById('typingInput');
    const userAnswer = input.value.trim();
    if (!userAnswer) { showToast('⚠️ Hãy nhập câu trả lời!', 'warning'); return; }

    typingAnswered = true;
    input.disabled = true;

    const correct = currentTypingWord.meaning;
    const isCorrect = normalizeText(userAnswer) === normalizeText(correct);

    const feedback = document.getElementById('typingFeedback');
    feedback.style.display = 'block';

    if (isCorrect) {
        typingScore++;
        feedback.className = 'typing-feedback correct';
        feedback.innerHTML = `✅ Chính xác! <strong>${correct}</strong>`;
        if (typeof updateWordSRS === 'function') updateWordSRS(currentTypingWord.id, true);
    } else {
        feedback.className = 'typing-feedback wrong';
        feedback.innerHTML = `❌ Sai! Đáp án đúng: <strong>${correct}</strong>`;
        if (typeof updateWordSRS === 'function') updateWordSRS(currentTypingWord.id, false);
    }

    document.getElementById('typingScore').textContent = typingScore;

    setTimeout(() => {
        currentTypingIndex++;
        displayTypingQuestion();
    }, 1500);
}

function skipTypingQuestion() {
    if (typingAnswered) return;
    typingAnswered = true;
    const feedback = document.getElementById('typingFeedback');
    feedback.style.display = 'block';
    feedback.className = 'typing-feedback wrong';
    feedback.innerHTML = `⏭️ Đáp án: <strong>${currentTypingWord.meaning}</strong>`;
    document.getElementById('typingInput').disabled = true;
    setTimeout(() => { currentTypingIndex++; displayTypingQuestion(); }, 1200);
}

function submitIncompleteTypingQuiz() {
    currentTypingIndex = typingWords.length;
    showTypingResult();
}

function showTypingResult() {
    hideAllQuizPanels();
    document.getElementById('quizResult').style.display = 'flex';
    document.getElementById('resultTitle').textContent = '🎉 Hoàn thành!';
    document.getElementById('finalScore').textContent = typingScore;
    document.getElementById('scoreTotalDisplay').textContent = `/ ${typingWords.length}`;

    const pct = Math.round((typingScore / typingWords.length) * 100);
    document.getElementById('resultStats').innerHTML =
        `<p style="font-size:1.1rem;margin:10px 0;">Tỷ lệ đúng: <strong>${pct}%</strong></p>`;
    document.getElementById('resultMessage').textContent =
        pct >= 80 ? '🌟 Xuất sắc!' : pct >= 60 ? '👍 Tốt lắm!' : '💪 Cố gắng thêm!';

    updateHomeStats();
}
