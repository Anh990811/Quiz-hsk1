// Ép trình duyệt tải tệp dữ liệu mới nhất, vượt qua mọi cache
(function() {
    const script = document.createElement('script');
    script.src = './js/grammar_db.js?t=' + Date.now();
    document.head.appendChild(script);
})();

// Khởi tạo các phần tử DOM
const DOM = {
    // Navigation
    navBtns: document.querySelectorAll('.nav-btn'),
    views: document.querySelectorAll('.view-section'),
    themeToggle: document.getElementById('theme-toggle'),

    // Setup View
    studyClassSelect: document.getElementById('study-class-select'),
    studyGroupSelect: document.getElementById('study-group-select'),
    modeCards: document.querySelectorAll('.mode-card'),

    // Session View
    sessionView: document.getElementById('session-view'),
    sessionGroupName: document.getElementById('session-group-name'),
    sessionModeName: document.getElementById('session-mode-name'),
    progressText: document.getElementById('progress-text'),
    progressModeHint: document.getElementById('progress-mode-hint'),
    progressFill: document.getElementById('progress-fill'),
    questionPagination: document.getElementById('question-pagination'),
    playAudioBtn: document.getElementById('play-audio-btn'),
    questionText: document.getElementById('question-text'),
    questionHint: document.getElementById('question-hint'),
    answerInput: document.getElementById('answer-input'),
    submitAnswerBtn: document.getElementById('submit-answer-btn'),
    feedbackSection: document.getElementById('feedback-section'),
    feedbackIcon: document.getElementById('feedback-icon'),
    feedbackStatus: document.getElementById('feedback-status-text'),
    correctPinyin: document.getElementById('correct-pinyin-main'),
    correctText: document.getElementById('correct-zh-main'),
    correctVi: document.getElementById('correct-vi-main'),
    nextQuestionBtn: document.getElementById('next-question-btn'),
    endSessionBtn: document.getElementById('end-session-btn'),
    feedbackTop: document.getElementById('feedback-top'),
    userInputContainer: document.getElementById('feedback-user-input-container'),
    userInputText: document.getElementById('user-input-text'),
    feedbackAudioBtn: document.getElementById('feedback-audio-btn'),
    
    // Analysis
    feedbackAnalysis: document.getElementById('feedback-analysis'),
    rowMeaning: document.getElementById('row-meaning'),
    rowExample: document.getElementById('row-example'),
    rowStructure: document.getElementById('row-structure'),
    rowGrammar: document.getElementById('row-grammar'),
    rowNote: document.getElementById('row-note'),
    analysisMeaning: document.getElementById('analysis-meaning'),
    analysisExZh: document.getElementById('analysis-ex-zh'),
    analysisExPinyinVi: document.getElementById('analysis-ex-pinyin-vi'),
    analysisStructure: document.getElementById('analysis-structure'),
    analysisStructVi: document.getElementById('analysis-struct-vi'),
    analysisGrammar: document.getElementById('analysis-grammar'),
    analysisNote: document.getElementById('analysis-note'),
    
    // Session End
    sessionEndScreen: document.getElementById('session-end-screen'),
    finalScore: document.getElementById('final-score'),
    restartSessionBtn: document.getElementById('restart-session-btn'),
    backToMenuBtn: document.getElementById('back-to-menu-btn'),

    // Manage View
    groupsList: document.getElementById('groups-list'),
    addClassBtn: document.getElementById('add-class-btn'),
    addGroupBtn: document.getElementById('add-group-btn'),
    noGroupSelected: document.getElementById('no-group-selected'),
    groupEditorContent: document.getElementById('group-editor-content'),
    editGroupClass: document.getElementById('edit-group-class'),
    editGroupName: document.getElementById('edit-group-name'),
    deleteGroupBtn: document.getElementById('delete-group-btn'),
    sentencesList: document.getElementById('sentences-list'),
    sentenceCount: document.getElementById('sentence-count'),
    
    // Add sentence
    newVi: document.getElementById('new-sentence-vi'),
    newZh: document.getElementById('new-sentence-zh'),
    newPinyin: document.getElementById('new-sentence-pinyin'),
    newMeaning: document.getElementById('new-sentence-meaning'),
    newExZh: document.getElementById('new-sentence-ex-zh'),
    newExVi: document.getElementById('new-sentence-ex-vi'),
    newStructure: document.getElementById('new-sentence-structure'),
    newStructVi: document.getElementById('new-sentence-struct-vi'),
    newGrammar: document.getElementById('new-sentence-grammar'),
    newNote: document.getElementById('new-sentence-note'),
    addSentenceBtn: document.getElementById('add-sentence-btn'),
    autoFetchBtn: document.getElementById('auto-fetch-btn')
};

// Trạng thái ứng dụng
let currentGroup = null;
let currentMode = null;
let currentSession = {
    sentences: [],
    currentIndex: 0,
    score: 0,
    answers: [] // true/false array
};
let selectedManageGroupId = null;

// Khởi tạo
function init() {
    initTheme();
    bindEvents();
    renderSetupClasses();
    renderManageGroups();
}

// ==================== EVENTS & THEME ====================
function initTheme() {
    const savedTheme = localStorage.getItem('hanyu_theme') || 'light-mode';
    document.body.className = savedTheme;
    updateThemeIcon(savedTheme);

    DOM.themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        const newTheme = isDark ? 'light-mode' : 'dark-mode';
        document.body.className = newTheme;
        localStorage.setItem('hanyu_theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    DOM.themeToggle.innerHTML = theme === 'dark-mode' 
        ? '<i class="fa-solid fa-sun"></i>' 
        : '<i class="fa-solid fa-moon"></i>';
}

function bindEvents() {
    // Navigation
    DOM.navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            switchView(targetId);
            DOM.navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Setup View selection
    DOM.studyClassSelect.addEventListener('change', renderSetupGroups);

    // Start Session
    DOM.modeCards.forEach(card => {
        card.addEventListener('click', () => {
            const groupId = DOM.studyGroupSelect.value;
            const mode = card.getAttribute('data-mode');
            if (groupId) startSession(groupId, mode);
        });
    });

    // Session Actions
    DOM.submitAnswerBtn.addEventListener('click', checkAnswer);
    DOM.answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if(!DOM.feedbackSection.classList.contains('hidden')){
                nextQuestion();
            } else {
                checkAnswer();
            }
        }
    });
    DOM.nextQuestionBtn.addEventListener('click', nextQuestion);
    DOM.endSessionBtn.addEventListener('click', endSession);
    DOM.playAudioBtn.addEventListener('click', playCurrentAudio);
    
    // End screen actions
    DOM.restartSessionBtn.addEventListener('click', () => startSession(currentGroup.id, currentMode));
    DOM.backToMenuBtn.addEventListener('click', endSession);

    // Manage Actions
    DOM.addClassBtn.addEventListener('click', () => {
        const name = prompt("Nhập tên Lớp học mới:");
        if (name && name.trim()) {
            appData.addClass(name.trim());
            renderManageGroups();
            renderSetupClasses();
        }
    });

    DOM.addGroupBtn.addEventListener('click', () => {
        const classes = appData.getClasses();
        if (classes.length === 0) {
            alert("Vui lòng tạo Lớp học trước!");
            return;
        }
        
        const name = prompt("Nhập tên nhóm học mới:");
        if (name && name.trim()) {
            let classId = DOM.editGroupClass.value;
            if (!classId) {
                classId = classes[0].id;
            }
            const newGroup = appData.addGroup(name.trim(), classId);
            renderManageGroups();
            renderSetupClasses();
            selectManageGroup(newGroup.id);
        }
    });

    DOM.editGroupName.addEventListener('change', (e) => {
        if (selectedManageGroupId && e.target.value.trim()) {
            appData.updateGroup(selectedManageGroupId, e.target.value.trim());
            renderManageGroups();
            renderSetupClasses();
        }
    });

    DOM.editGroupClass.addEventListener('change', (e) => {
        if (selectedManageGroupId) {
            appData.updateGroup(selectedManageGroupId, undefined, e.target.value);
            renderManageGroups();
            renderSetupClasses();
        }
    });

    DOM.deleteGroupBtn.addEventListener('click', () => {
        if (selectedManageGroupId && confirm("Bạn có chắc chắn muốn xóa nhóm này không?")) {
            appData.deleteGroup(selectedManageGroupId);
            selectedManageGroupId = null;
            renderManageGroups();
            renderSetupClasses();
            DOM.noGroupSelected.classList.remove('hidden');
            DOM.groupEditorContent.classList.add('hidden');
        }
    });

    DOM.addSentenceBtn.addEventListener('click', () => {
        const vi = DOM.newVi.value.trim();
        const zh = DOM.newZh.value.trim();
        const pinyin = DOM.newPinyin.value.trim();
        
        const data = {
            vi, zh, pinyin,
            meaningDetail: DOM.newMeaning.value.trim(),
            exZh: DOM.newExZh.value.trim(),
            exVi: DOM.newExVi.value.trim(),
            structure: DOM.newStructure.value.trim(),
            structVi: DOM.newStructVi.value.trim(),
            grammar: DOM.newGrammar.value.trim(),
            note: DOM.newNote.value.trim()
        };

        if (selectedManageGroupId && vi && zh) {
            appData.addSentence(selectedManageGroupId, data);
            
            // Clear inputs
            DOM.newVi.value = '';
            DOM.newZh.value = '';
            DOM.newPinyin.value = '';
            DOM.newMeaning.value = '';
            DOM.newExZh.value = '';
            DOM.newExVi.value = '';
            DOM.newStructure.value = '';
            DOM.newStructVi.value = '';
            DOM.newGrammar.value = '';
            DOM.newNote.value = '';
            
            renderSentences();
            // Cập nhật lại dropdown study
            renderSetupClasses();
        } else {
            alert("Vui lòng nhập ít nhất Tiếng Việt và Chữ Hán.");
        }
    });

    // Auto Fetch API
    DOM.autoFetchBtn.addEventListener('click', async () => {
        let zh = DOM.newZh.value.trim();
        let vi = DOM.newVi.value.trim();
        
        if (!zh && !vi) {
            alert("Vui lòng nhập Tiếng Việt hoặc Chữ Hán trước khi tra cứu!");
            return;
        }

        if (!window.GRAMMAR_DATA || window.GRAMMAR_DATA.length < 100) {
            alert("Dữ liệu ngữ pháp chưa được tải đầy đủ. Vui lòng nhấn Ctrl+F5 để tải lại trang!");
            return;
        }

        const btnIcon = DOM.autoFetchBtn.innerHTML;
        DOM.autoFetchBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
        DOM.autoFetchBtn.disabled = true;

        try {
            // Kiểm tra xem input ở Chữ Hán có thực sự là chữ Hán không (có chứa ký tự tiếng Trung)
            const hasChinese = /[\u4e00-\u9fa5]/.test(zh);

            // 1. Dịch thuật thông minh
            if (!zh || (!hasChinese && zh.length > 0)) {
                // Nếu không có Chữ Hán, hoặc Chữ Hán đang chứa tiếng Việt/Anh
                const textToTranslate = zh || vi;
                const res = await fetch(`https://lingva.ml/api/v1/vi/zh/${encodeURIComponent(textToTranslate)}`);
                const data = await res.json();
                if (data && data.translation) {
                    zh = data.translation;
                    DOM.newZh.value = zh;
                    if (!vi && textToTranslate !== zh) {
                        DOM.newVi.value = textToTranslate;
                        DOM.newMeaning.value = textToTranslate;
                    }
                }
            } else if (!vi) {
                // Có chữ Hán nhưng chưa có tiếng Việt -> dịch sang tiếng Việt
                const res = await fetch(`https://lingva.ml/api/v1/zh/vi/${encodeURIComponent(zh)}`);
                const data = await res.json();
                if (data && data.translation) {
                    vi = data.translation;
                    DOM.newVi.value = vi;
                    DOM.newMeaning.value = vi;
                }
            } else if (vi && !DOM.newMeaning.value) {
                DOM.newMeaning.value = vi;
            }

            // 2. Lấy Pinyin cho chữ Hán (nếu chưa có)
            if (!DOM.newPinyin.value && zh) {
                try {
                    const pinyinRes = await fetch(`https://lingva.ml/api/v1/zh/en/${encodeURIComponent(zh)}`);
                    const pinyinData = await pinyinRes.json();
                    if (pinyinData && pinyinData.info && pinyinData.info.pronunciation) {
                         DOM.newPinyin.value = pinyinData.info.pronunciation.toLowerCase();
                    }
                } catch(e) {}
            }

            // 3. Tìm kiếm chính xác câu từ cơ sở dữ liệu ngữ pháp (HSK 1-6)
            let hasExactMatch = false;
            let exactMatchData = null;

            if (zh) {
                const exactMatch = findExactSentenceMatch(zh);
                if (exactMatch) {
                    hasExactMatch = true;
                    exactMatchData = exactMatch;
                    
                    if (!DOM.newPinyin.value) DOM.newPinyin.value = exactMatch.example.pinyin;
                    
                    DOM.newStructure.value = exactMatch.rule.structure;
                    DOM.newStructVi.value = exactMatch.rule.desc;
                    DOM.newGrammar.value = `[${exactMatch.rule.id}] ${exactMatch.rule.desc}`;
                    DOM.newNote.value = `Tags: ${exactMatch.rule.tags}`;
                    
                    DOM.newExZh.value = exactMatch.example.zh;
                    DOM.newExVi.value = exactMatch.example.pinyin + " - " + exactMatch.example.en;
                    
                    if (!DOM.newMeaning.value) {
                        DOM.newMeaning.value = exactMatch.example.en;
                    }
                } else {
                    const grammar = findGrammarMatch(zh);
                    if (grammar) {
                        DOM.newStructure.value = grammar.structure || '';
                        DOM.newStructVi.value = grammar.desc || '';
                        DOM.newGrammar.value = `[${grammar.id}] ${grammar.desc || ''}`;
                        DOM.newNote.value = `Tags: ${grammar.tags || ''}`;
                        if (grammar.examples && grammar.examples.length > 0) {
                            const ex = grammar.examples[0];
                            DOM.newExZh.value = ex.zh || '';
                            DOM.newExVi.value = (ex.pinyin || '') + " - " + (ex.en || '');
                        }
                    } else {
                        DOM.newNote.value = "Không tìm thấy điểm ngữ pháp tương ứng trong CSDL.";
                    }
                }
            }
            
        } catch (error) {
            console.error(error);
            alert("Không thể lấy dữ liệu từ mạng lúc này. Vui lòng thử lại sau.");
        } finally {
            DOM.autoFetchBtn.innerHTML = btnIcon;
            DOM.autoFetchBtn.disabled = false;
        }
    });

    // Feedback Audio
    DOM.feedbackAudioBtn.addEventListener('click', () => {
        const s = currentSession.sentences[currentSession.currentIndex];
        if (s && s.zh) {
            playAudioText(s.zh);
        }
    });
}

function findExactSentenceMatch(sentence) {
    if (!window.GRAMMAR_DATA || !sentence) return null;
    const cleanSentence = sentence.replace(/[。？！，、.,?! ]/g, '');
    for (let rule of GRAMMAR_DATA) {
        if (rule.examples && rule.examples.length > 0) {
            for (let ex of rule.examples) {
                if (ex.zh.replace(/[。？！，、.,?! ]/g, '') === cleanSentence) {
                    return { rule, example: ex };
                }
            }
        }
    }
    return null;
}

function findGrammarMatch(sentence) {
    if (!window.GRAMMAR_DATA || !sentence) return null;
    let bestMatch = null;
    let maxMatchLen = 0;

    for (let rule of GRAMMAR_DATA) {
        // Lấy tất cả các cụm chữ Hán trong công thức ngữ pháp
        const zhMatches = rule.structure.match(/[\u4e00-\u9fa5]+/g);
        if (zhMatches) {
            let allMatch = true;
            let totalLen = 0;
            for (let word of zhMatches) {
                if (sentence.includes(word)) {
                    totalLen += word.length;
                } else {
                    allMatch = false;
                    break;
                }
            }
            // Nếu câu chứa tất cả các chữ Hán của điểm ngữ pháp đó
            if (allMatch && totalLen > maxMatchLen) {
                bestMatch = rule;
                maxMatchLen = totalLen;
            }
        }
    }
    return bestMatch;
}

function playAudioText(text) {
    if ('speechSynthesis' in window && text) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        const voices = window.speechSynthesis.getVoices();
        const zhVoice = voices.find(v => v.lang.includes('zh') || v.lang.includes('cmn'));
        if(zhVoice) utterance.voice = zhVoice;
        window.speechSynthesis.speak(utterance);
    }
}

function switchView(viewId) {
    DOM.views.forEach(view => {
        if (view.id === viewId) {
            view.classList.remove('hidden');
        } else {
            view.classList.add('hidden');
        }
    });
}

// ==================== SETUP VIEW ====================
function renderSetupClasses() {
    const classes = appData.getClasses();
    const currentClassId = DOM.studyClassSelect.value;
    
    DOM.studyClassSelect.innerHTML = classes.map(c => 
        `<option value="${c.id}">${c.name}</option>`
    ).join('');
    
    if (currentClassId && classes.some(c => c.id === currentClassId)) {
        DOM.studyClassSelect.value = currentClassId;
    }
    
    renderSetupGroups();
}

function renderSetupGroups() {
    const classId = DOM.studyClassSelect.value;
    const currentGroupId = DOM.studyGroupSelect.value;
    
    if (!classId) {
        DOM.studyGroupSelect.innerHTML = '<option value="">Chọn lớp học trước</option>';
        return;
    }
    
    const groups = appData.getGroups().filter(g => g.classId === classId);
    
    if (groups.length === 0) {
        DOM.studyGroupSelect.innerHTML = '<option value="">Chưa có nhóm học nào</option>';
    } else {
        DOM.studyGroupSelect.innerHTML = groups.map(g => 
            `<option value="${g.id}">${g.name} (${g.sentences.length} câu)</option>`
        ).join('');
        
        if (currentGroupId && groups.some(g => g.id === currentGroupId)) {
            DOM.studyGroupSelect.value = currentGroupId;
        }
    }
}

// ==================== SESSION LOGIC ====================
const MODE_NAMES = {
    'vi-zh': 'Việt → Trung',
    'zh-vi': 'Trung → Việt',
    'zh-zh': 'Trung → Trung',
    'listen-vi': 'Nghe hiểu'
};

function startSession(groupId, mode) {
    const group = appData.getGroup(groupId);
    if (!group || group.sentences.length === 0) {
        alert("Nhóm học này chưa có câu hỏi nào!");
        return;
    }

    currentGroup = group;
    currentMode = mode;
    
    // Copy và xáo trộn câu hỏi
    currentSession.sentences = [...group.sentences].sort(() => Math.random() - 0.5);
    currentSession.currentIndex = 0;
    currentSession.score = 0;
    currentSession.answers = new Array(currentSession.sentences.length).fill(null);

    // Update UI headers
    DOM.sessionGroupName.textContent = group.name;
    DOM.sessionModeName.textContent = MODE_NAMES[mode];
    DOM.progressModeHint.textContent = MODE_NAMES[mode];

    switchView('session-view');
    DOM.sessionEndScreen.classList.add('hidden');
    document.querySelector('.question-container').classList.remove('hidden');
    
    renderPagination();
    showQuestion();
}

function renderPagination() {
    DOM.questionPagination.innerHTML = currentSession.sentences.map((_, index) => 
        `<div class="page-dot ${index === currentSession.currentIndex ? 'active' : ''}" id="dot-${index}">${index + 1}</div>`
    ).join('');
}

function updatePagination() {
    document.querySelectorAll('.page-dot').forEach((dot, index) => {
        dot.className = 'page-dot'; // reset
        if (index === currentSession.currentIndex) dot.classList.add('active');
        if (currentSession.answers[index] !== null) {
            dot.classList.add('completed');
            if (!currentSession.answers[index]) {
                dot.style.borderColor = 'var(--danger-color)';
                dot.style.color = 'var(--danger-color)';
            }
        }
    });
}

function showQuestion() {
    const s = currentSession.sentences[currentSession.currentIndex];
    
    // Reset UI
    DOM.answerInput.value = '';
    DOM.answerInput.focus();
    DOM.feedbackSection.classList.add('hidden');
    DOM.submitAnswerBtn.classList.remove('hidden');
    
    // Update Progress
    const progress = ((currentSession.currentIndex) / currentSession.sentences.length) * 100;
    DOM.progressFill.style.width = `${progress}%`;
    DOM.progressText.textContent = `Câu ${currentSession.currentIndex + 1}/${currentSession.sentences.length}`;
    updatePagination();

    // Setup Question Content based on mode
    DOM.playAudioBtn.classList.add('hidden');
    DOM.questionText.classList.remove('hidden');

    switch(currentMode) {
        case 'vi-zh':
            DOM.questionText.textContent = s.vi;
            DOM.questionHint.textContent = "Dịch sang tiếng Trung";
            break;
        case 'zh-vi':
            DOM.questionText.textContent = s.zh;
            DOM.questionHint.textContent = "Dịch sang tiếng Việt";
            break;
        case 'zh-zh':
            DOM.questionText.textContent = s.zh;
            DOM.questionHint.textContent = "Viết lại chữ Hán";
            break;
        case 'listen-vi':
            DOM.questionText.textContent = "🎧 Nghe và dịch";
            DOM.questionHint.textContent = "Nghe tiếng Trung, viết nghĩa tiếng Việt";
            DOM.playAudioBtn.classList.remove('hidden');
            setTimeout(playCurrentAudio, 300); // Auto play
            break;
    }
}

function playCurrentAudio() {
    const s = currentSession.sentences[currentSession.currentIndex];
    playAudioText(s.zh);
}

function normalizeText(text) {
    return text.toLowerCase().replace(/[.,!?。，！？]/g, '').trim();
}

function checkAnswer() {
    const s = currentSession.sentences[currentSession.currentIndex];
    const userAnswer = DOM.answerInput.value.trim();
    if (!userAnswer) return;

    let isCorrect = false;
    
    // Validation logic
    switch(currentMode) {
        case 'vi-zh':
        case 'zh-zh':
            isCorrect = normalizeText(userAnswer) === normalizeText(s.zh);
            break;
        case 'zh-vi':
        case 'listen-vi':
            isCorrect = normalizeText(userAnswer) === normalizeText(s.vi);
            break;
    }

    // Save answer state
    currentSession.answers[currentSession.currentIndex] = isCorrect;
    if (isCorrect) currentSession.score++;

    // Update Top Feedback UI
    DOM.feedbackSection.className = `feedback-panel ${isCorrect ? 'correct' : 'incorrect'}`;
    DOM.feedbackIcon.className = `fa-solid ${isCorrect ? 'fa-circle-check' : 'fa-circle-xmark'}`;
    DOM.feedbackStatus.textContent = isCorrect ? 'CHÍNH XÁC' : 'CHƯA ĐÚNG';

    if (!isCorrect) {
        DOM.userInputContainer.classList.remove('hidden');
        DOM.userInputText.textContent = userAnswer;
    } else {
        DOM.userInputContainer.classList.add('hidden');
    }

    DOM.correctText.textContent = s.zh;
    DOM.correctPinyin.textContent = s.pinyin || "";
    DOM.correctVi.textContent = s.vi;

    // Check if we have analysis data
    const hasAnalysis = s.meaningDetail || s.exZh || s.structure || s.grammar || s.note;
    
    if (hasAnalysis || !isCorrect) {
        // Show analysis section
        DOM.feedbackAnalysis.classList.remove('hidden');
        
        // Meaning
        if (s.meaningDetail) {
            DOM.rowMeaning.classList.remove('hidden');
            DOM.analysisMeaning.textContent = s.meaningDetail;
        } else {
            DOM.rowMeaning.classList.add('hidden');
        }
        
        // Example
        if (s.exZh) {
            DOM.rowExample.classList.remove('hidden');
            DOM.analysisExZh.textContent = s.exZh;
            DOM.analysisExPinyinVi.textContent = s.exVi || '';
        } else {
            DOM.rowExample.classList.add('hidden');
        }
        
        // Structure
        if (s.structure) {
            DOM.rowStructure.classList.remove('hidden');
            DOM.analysisStructure.textContent = s.structure;
            DOM.analysisStructVi.textContent = s.structVi || '';
        } else {
            DOM.rowStructure.classList.add('hidden');
        }
        
        // Grammar
        if (s.grammar) {
            DOM.rowGrammar.classList.remove('hidden');
            DOM.analysisGrammar.textContent = s.grammar;
        } else {
            DOM.rowGrammar.classList.add('hidden');
        }
        
        // Note
        if (s.note) {
            DOM.rowNote.classList.remove('hidden');
            DOM.analysisNote.textContent = s.note;
        } else {
            DOM.rowNote.classList.add('hidden');
        }
    } else {
        DOM.feedbackAnalysis.classList.add('hidden');
    }

    DOM.feedbackSection.classList.remove('hidden');
    DOM.submitAnswerBtn.classList.add('hidden');
    DOM.nextQuestionBtn.classList.remove('hidden');
    DOM.nextQuestionBtn.focus();
    
    updatePagination();
    
    // Progress fill update
    const progress = ((currentSession.currentIndex + 1) / currentSession.sentences.length) * 100;
    DOM.progressFill.style.width = `${progress}%`;
}

function nextQuestion() {
    currentSession.currentIndex++;
    if (currentSession.currentIndex >= currentSession.sentences.length) {
        showSessionEnd();
    } else {
        showQuestion();
    }
}

function showSessionEnd() {
    document.querySelector('.question-container').classList.add('hidden');
    DOM.sessionEndScreen.classList.remove('hidden');
    DOM.finalScore.textContent = `${currentSession.score}/${currentSession.sentences.length}`;
}

function endSession() {
    currentSession = { sentences: [], currentIndex: 0, score: 0, answers: [] };
    switchView('study-view');
}

// ==================== MANAGE VIEW ====================
function renderManageGroups() {
    const classes = appData.getClasses();
    const groups = appData.getGroups();
    
    let html = '';
    classes.forEach(c => {
        const classGroups = groups.filter(g => g.classId === c.id);
        html += `<div class="class-header" style="font-weight:bold; margin-top: 10px; margin-bottom: 4px; color: var(--primary-color); display: flex; justify-content: space-between; align-items: center; padding: 4px 8px; border-radius: 4px; background: rgba(0,0,0,0.02);">
                    <span><i class="fa-solid fa-folder-open" style="margin-right: 6px;"></i> ${c.name}</span>
                    <button class="icon-btn edit-class-btn" data-id="${c.id}" style="width:24px; height:24px; font-size:12px;" title="Sửa tên Lớp học"><i class="fa-solid fa-pen"></i></button>
                 </div>`;
        if (classGroups.length === 0) {
            html += `<div class="text-hint" style="padding: 4px 16px 12px 28px; font-size: 0.85rem;">Chưa có nhóm học</div>`;
        } else {
            html += `<ul style="list-style:none; padding-left:0; margin-bottom: 12px;">`;
            classGroups.forEach(g => {
                html += `<li class="group-item ${g.id === selectedManageGroupId ? 'active' : ''}" data-id="${g.id}" style="margin-left: 12px; margin-bottom: 2px;">
                    ${g.name} <span class="badge" style="background:var(--border-color); padding: 2px 6px; border-radius: 10px; font-size: 0.8em; margin-left: 8px;">${g.sentences.length} câu</span>
                </li>`;
            });
            html += `</ul>`;
        }
    });

    DOM.groupsList.innerHTML = html;

    // Bind click for groups
    document.querySelectorAll('.group-item').forEach(li => {
        li.addEventListener('click', () => {
            selectManageGroup(li.getAttribute('data-id'));
        });
    });

    // Bind click for edit class
    document.querySelectorAll('.edit-class-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = e.currentTarget.getAttribute('data-id');
            const cls = appData.getClass(id);
            if (cls) {
                const newName = prompt("Sửa tên Lớp học:", cls.name);
                if (newName && newName.trim()) {
                    appData.updateClass(id, newName.trim());
                    renderManageGroups();
                    renderSetupClasses();
                }
            }
        });
    });
}

function selectManageGroup(id) {
    selectedManageGroupId = id;
    renderManageGroups(); // update active state

    if (id) {
        DOM.noGroupSelected.classList.add('hidden');
        DOM.groupEditorContent.classList.remove('hidden');
        
        const group = appData.getGroup(id);
        DOM.editGroupName.value = group.name;
        
        // Populate editGroupClass dropdown
        const classes = appData.getClasses();
        DOM.editGroupClass.innerHTML = classes.map(c => 
            `<option value="${c.id}">${c.name}</option>`
        ).join('');
        DOM.editGroupClass.value = group.classId || classes[0].id;
        
        renderSentences();
    } else {
        DOM.noGroupSelected.classList.remove('hidden');
        DOM.groupEditorContent.classList.add('hidden');
    }
}

function renderSentences() {
    const group = appData.getGroup(selectedManageGroupId);
    DOM.sentenceCount.textContent = group.sentences.length;
    
    if (group.sentences.length === 0) {
        DOM.sentencesList.innerHTML = '<p class="text-hint text-center">Chưa có câu hỏi nào trong nhóm này.</p>';
        return;
    }

    DOM.sentencesList.innerHTML = group.sentences.map(s => `
        <div class="sentence-card">
            <div class="sentence-content">
                <div class="zh">${s.zh} ${s.pinyin ? `<span style="font-size:0.8em;color:var(--text-secondary)">(${s.pinyin})</span>` : ''}</div>
                <div class="vi">${s.vi}</div>
            </div>
            <button class="danger-btn delete-sentence-btn" data-id="${s.id}"><i class="fa-solid fa-trash"></i></button>
        </div>
    `).join('');

    // Bind delete events
    document.querySelectorAll('.delete-sentence-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            if (confirm("Xóa câu này?")) {
                appData.deleteSentence(selectedManageGroupId, id);
                renderSentences();
                renderSetupClasses(); // Update dropdown count
            }
        });
    });
}

// Khởi chạy
window.addEventListener('DOMContentLoaded', () => {
    // Để SpeechSynthesis load voice
    if ('speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
    }
    init();
});
