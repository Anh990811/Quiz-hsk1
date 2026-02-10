// ========================================
// QUIZ MODULE
// ========================================

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
    if (vocabulary.length < OPTIONS_COUNT) {
        document.getElementById('quizSetup').style.display = 'none';
        document.getElementById('quizGame').style.display = 'none';
        document.getElementById('quizResult').style.display = 'none';
        document.getElementById('quizEmpty').style.display = 'block';
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

// Submit incomplete quiz
function submitIncompleteQuiz() {
    const answeredCount = quizAnswers.filter(a => a !== null).length;
    const unansweredCount = quizWords.length - answeredCount;

    if (unansweredCount > 0) {
        const confirmed = confirm(`Bạn chưa trả lời ${unansweredCount} câu. Vẫn muốn nộp bài?`);
        if (!confirmed) return;
    }

    showQuizResult(true);
}
