// Removed redundant dynamic loader

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
    audioControlsWrapper: document.getElementById('audio-controls-wrapper'),
    audioSpeed: document.getElementById('audio-speed'),
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
    
    // New features
    speechContainer: document.getElementById('speech-container'),
    startRecordBtn: document.getElementById('start-record-btn'),
    speechStatus: document.getElementById('speech-status'),

    // Pinyin View
    initialsList: document.getElementById('initials-list'),
    initialDetailName: document.getElementById('detail-name'),
    initialDetailType: document.getElementById('detail-type'),
    initialDetailNote: document.getElementById('detail-note'),
    combinationsList: document.getElementById('combinations-list'),
    pinyinEvalSection: document.getElementById('pinyin-eval-section'),
    evalTarget: document.getElementById('eval-target'),
    pinyinListenBtn: document.getElementById('pinyin-listen-btn'),
    pinyinRecordBtn: document.getElementById('pinyin-record-btn'),
    pinyinEvalStatus: document.getElementById('pinyin-eval-status'),
    pinyinResult: document.getElementById('pinyin-result'),
    tabInitials: document.getElementById('tab-initials'),
    tabFinals: document.getElementById('tab-finals'),
    toneSelector: document.getElementById('tone-selector'),
    detailListenBtn: document.getElementById('detail-listen-btn')
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

function init() {
    initTheme();
    bindEvents();
    renderSetupClasses();
    renderManageGroups();
    if (typeof PINYIN_INITIALS !== 'undefined') {
        initPinyinView();
    }
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

    // Feedback Audio
    DOM.feedbackAudioBtn.addEventListener('click', () => {
        const s = currentSession.sentences[currentSession.currentIndex];
        if (s && s.zh) {
            playAudioText(s.zh);
        }
    });

    // === NEW FEATURES BINDINGS ===
    
    // Export Data
    const exportBtn = document.getElementById('export-data-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData.data));
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", "hanyu_mastery_backup_" + new Date().toISOString().slice(0,10) + ".json");
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        });
    }

    // Import Data
    const importBtn = document.getElementById('import-data-btn');
    const importFile = document.getElementById('import-data-file');
    if (importBtn && importFile) {
        importBtn.addEventListener('click', () => importFile.click());
        importFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const json = JSON.parse(event.target.result);
                    if (json.classes && json.groups) {
                        appData.data = json;
                        appData.saveData();
                        alert("Khôi phục dữ liệu thành công!");
                        renderManageGroups();
                        renderSetupClasses();
                    } else {
                        alert("File không hợp lệ!");
                    }
                } catch(err) {
                    alert("Lỗi khi đọc file!");
                }
            };
            reader.readAsText(file);
        });
    }

    // Batch Import
    const batchImportBtn = document.getElementById('batch-import-btn');
    const batchImportCard = document.getElementById('batch-import-card');
    const processBatchBtn = document.getElementById('process-batch-btn');
    const cancelBatchBtn = document.getElementById('cancel-batch-btn');
    const batchImportText = document.getElementById('batch-import-text');

    if (batchImportBtn) {
        batchImportBtn.addEventListener('click', () => {
            batchImportCard.classList.remove('hidden');
        });
        cancelBatchBtn.addEventListener('click', () => {
            batchImportCard.classList.add('hidden');
            batchImportText.value = '';
        });
        processBatchBtn.addEventListener('click', () => {
            const lines = batchImportText.value.split('\n').map(l => l.trim()).filter(l => l);
            if (lines.length === 0) return;
            
            if (!selectedManageGroupId) {
                alert("Vui lòng chọn nhóm học!");
                return;
            }

            let addedCount = 0;
            for (let line of lines) {
                let zh = line;
                let vi = '';
                let userPinyin = '';

                // Regex tìm dải phân cách: các loại gạch ngang với ít nhất 1 dấu cách ở trước hoặc sau
                // Hỗ trợ mọi loại gạch ngang (-, –, —, −, etc.)
                const sepRegex = /(?:\s+[-–—\u2010-\u2015\u2212\uFF0D\uFE63]\s*|\s*[-–—\u2010-\u2015\u2212\uFF0D\uFE63]\s+)/g;
                let matches = [];
                let match;
                while ((match = sepRegex.exec(line)) !== null) {
                    matches.push({ index: match.index, length: match[0].length });
                }

                if (matches.length > 0) {
                    const firstMatch = matches[0];
                    zh = line.substring(0, firstMatch.index).trim();
                    
                    if (matches.length >= 2) {
                        const lastMatch = matches[matches.length - 1];
                        vi = line.substring(firstMatch.index + firstMatch.length, lastMatch.index).trim();
                        userPinyin = line.substring(lastMatch.index + lastMatch.length).trim();
                    } else {
                        vi = line.substring(firstMatch.index + firstMatch.length).trim();
                    }
                } else if (line.includes('-')) {
                    const parts = line.split('-');
                    zh = parts[0].trim();
                    vi = parts.slice(1).join('-').trim();
                } else if (line.includes(':') || line.includes('：')) {
                    const colonIndex = line.indexOf(':') !== -1 ? line.indexOf(':') : line.indexOf('：');
                    zh = line.substring(0, colonIndex).trim();
                    vi = line.substring(colonIndex + 1).trim();
                }

                if (!zh) continue;

                let pinyin = userPinyin; // Dùng pinyin người dùng nhập nếu có
                let structure = '', structVi = '', grammar = '', note = '', exZh = '', exVi = '';
                const exactMatch = findExactSentenceMatch(zh);
                if (exactMatch) {
                    if (!pinyin) pinyin = exactMatch.example.pinyin; // Chỉ tự điền nếu chưa có
                    structure = exactMatch.rule.structure;
                    structVi = exactMatch.rule.desc;
                    grammar = `[${exactMatch.rule.id}] ${exactMatch.rule.desc}`;
                    note = `Tags: ${exactMatch.rule.tags}`;
                    exZh = exactMatch.example.zh;
                    exVi = exactMatch.example.pinyin + " - " + exactMatch.example.en;
                    if (!vi) vi = exactMatch.example.en;
                } else {
                    const gMatch = findGrammarMatch(zh);
                    if (gMatch) {
                        structure = gMatch.structure || '';
                        structVi = gMatch.desc || '';
                        grammar = `[${gMatch.id}] ${gMatch.desc || ''}`;
                        note = `Tags: ${gMatch.tags || ''}`;
                    }
                }

                appData.addSentence(selectedManageGroupId, {
                    zh, vi, pinyin, structure, structVi, grammar, note, exZh, exVi
                });
                addedCount++;
            }
            
            alert(`Đã thêm thành công ${addedCount} câu!`);
            batchImportCard.classList.add('hidden');
            batchImportText.value = '';
            renderSentences();
            renderSetupClasses();
        });
    }

    // Speech Recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = null;
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.lang = 'zh-CN';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        
        recognition.onstart = function() {
            if(DOM.speechStatus) DOM.speechStatus.textContent = "Đang nghe... (Hãy nói)";
            if(DOM.startRecordBtn) {
                DOM.startRecordBtn.style.animation = "pulse 1.5s infinite";
                DOM.startRecordBtn.style.background = "var(--danger-color)";
            }
        };
        
        recognition.onresult = function(event) {
            const speechResult = event.results[0][0].transcript;
            if(DOM.answerInput) DOM.answerInput.value = speechResult;
            if(DOM.speechStatus) DOM.speechStatus.textContent = "Đã nhận diện: " + speechResult;
            checkAnswer();
        };
        
        recognition.onspeechend = function() {
            recognition.stop();
        };
        
        recognition.onend = function() {
            if(DOM.startRecordBtn) {
                DOM.startRecordBtn.style.animation = "none";
                DOM.startRecordBtn.style.background = "#8b5cf6";
            }
            if (DOM.speechStatus && DOM.speechStatus.textContent.includes("Đang nghe")) {
                 DOM.speechStatus.textContent = "Không nghe rõ, vui lòng bấm mic thử lại";
            }
        };
        
        recognition.onerror = function(event) {
            let errorMsg = event.error;
            if (event.error === 'network') {
                errorMsg = "Lỗi kết nối. Chú ý: Trình duyệt chặn Mic nếu mở bằng file://. Vui lòng dùng phần mềm tạo Localhost (như Live Server, python -m http.server) hoặc đẩy lên Web.";
            } else if (event.error === 'not-allowed') {
                errorMsg = "Bạn chưa cấp quyền sử dụng Micro cho trang web này.";
            }
            if(DOM.speechStatus) DOM.speechStatus.textContent = "Lỗi mic: " + errorMsg;
            if(DOM.startRecordBtn) {
                DOM.startRecordBtn.style.animation = "none";
                DOM.startRecordBtn.style.background = "#8b5cf6";
            }
        };

        if (DOM.startRecordBtn) {
            DOM.startRecordBtn.addEventListener('click', () => {
                recognition.start();
            });
        }
    } else {
        if (DOM.startRecordBtn) {
            DOM.startRecordBtn.addEventListener('click', () => {
                alert("Trình duyệt của bạn không hỗ trợ nhận diện giọng nói (Web Speech API). Vui lòng dùng Chrome.");
            });
        }
    }
}

function findExactSentenceMatch(sentence) {
    if (!window.GRAMMAR_DATA || !sentence) return null;
    const cleanSentence = sentence.replace(/[。？！，、.,?! ]/g, '');
    for (let rule of window.GRAMMAR_DATA) {
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

    for (let rule of window.GRAMMAR_DATA) {
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

let sysVoices = [];
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        sysVoices = window.speechSynthesis.getVoices();
    };
}

function playAudioText(text) {
    if (!text) return;
    
    let speed = 1.0;
    if (DOM.audioSpeed) {
        speed = parseFloat(DOM.audioSpeed.value) || 1.0;
    }
    
    // Ưu tiên dùng Google TTS để phát âm chuẩn xác cả Pinyin và Hán tự
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=zh-CN&client=tw-ob`;
    const audio = new Audio(url);
    audio.playbackRate = speed;
    
    audio.play().catch(e => {
        console.log("Google TTS failed, falling back to Web Speech API", e);
        // Fallback
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = speed;
            utterance.lang = 'zh-CN';
            if (sysVoices.length === 0) sysVoices = window.speechSynthesis.getVoices();
            const zhVoice = sysVoices.find(v => v.lang === 'zh-CN' || v.lang.includes('zh') || v.lang.includes('cmn'));
            if (zhVoice) {
                utterance.voice = zhVoice;
            }
            window.speechSynthesis.speak(utterance);
        }
    });
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
    'listen-vi': 'Nghe hiểu',
    'speak-zh': 'Luyện phát âm'
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
    DOM.audioControlsWrapper.classList.add('hidden');
    DOM.questionText.classList.remove('hidden');
    if(DOM.answerInput) DOM.answerInput.classList.remove('hidden');
    if(DOM.speechContainer) DOM.speechContainer.classList.add('hidden');

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
            DOM.audioControlsWrapper.classList.remove('hidden');
            setTimeout(playCurrentAudio, 300); // Auto play
            break;
        case 'speak-zh':
            DOM.questionText.textContent = s.zh;
            DOM.questionHint.textContent = s.pinyin || "Đọc to câu trên bằng tiếng Trung";
            if(DOM.answerInput) DOM.answerInput.classList.add('hidden');
            if(DOM.speechContainer) DOM.speechContainer.classList.remove('hidden');
            if(DOM.speechStatus) DOM.speechStatus.textContent = "Bấm vào mic để bắt đầu nói";
            if (DOM.startRecordBtn) {
                DOM.startRecordBtn.style.animation = "none";
                DOM.startRecordBtn.style.background = "#8b5cf6";
            }
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

    let isCorrect = false;
    
    // Validation logic
    if (userAnswer) {
        switch(currentMode) {
            case 'vi-zh':
            case 'zh-zh':
            case 'speak-zh':
                isCorrect = normalizeText(userAnswer) === normalizeText(s.zh);
                break;
            case 'zh-vi':
            case 'listen-vi':
                isCorrect = normalizeText(userAnswer) === normalizeText(s.vi);
                break;
        }
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
        DOM.userInputText.textContent = userAnswer ? userAnswer : '(Bỏ trống)';
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
// Track which classes are expanded (by class id)
const expandedClasses = new Set();

function renderManageGroups() {
    const classes = appData.getClasses();
    const groups = appData.getGroups();
    
    let html = '';
    classes.forEach(c => {
        const classGroups = groups.filter(g => g.classId === c.id);
        // By default it is collapsed (not in expandedClasses)
        const isCollapsed = !expandedClasses.has(c.id);
        const chevronStyle = isCollapsed ? 'transform: rotate(-90deg);' : 'transform: rotate(0deg);';
        
        html += `
        <div class="class-section">
            <div class="class-header" style="
                font-weight: bold;
                margin-top: 10px;
                margin-bottom: 4px;
                color: var(--primary-color);
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 6px 8px;
                border-radius: 6px;
                background: rgba(var(--primary-rgb, 245,158,11), 0.08);
                cursor: pointer;
                user-select: none;
            ">
                <span class="class-toggle-btn" data-class-id="${c.id}" style="display:flex; align-items:center; gap:6px; flex:1;">
                    <i class="fa-solid fa-chevron-down" style="font-size:0.75rem; transition: transform 0.2s; ${chevronStyle}"></i>
                    <i class="fa-solid fa-folder${isCollapsed ? '' : '-open'}"></i>
                    ${c.name}
                    <span style="font-size:0.8em; font-weight:400; opacity:0.7;">(${classGroups.length} nhóm)</span>
                </span>
                <button class="icon-btn edit-class-btn" data-id="${c.id}" style="width:24px; height:24px; font-size:12px; flex-shrink:0;" title="Sửa tên Lớp học">
                    <i class="fa-solid fa-pen"></i>
                </button>
            </div>
            <div class="class-groups-container" id="class-groups-${c.id}" style="overflow:hidden; transition: max-height 0.25s ease; ${isCollapsed ? 'display:none;' : ''}">`;
        
        if (classGroups.length === 0) {
            html += `<div class="text-hint" style="padding: 4px 16px 12px 28px; font-size: 0.85rem;">Chưa có nhóm học</div>`;
        } else {
            html += `<ul style="list-style:none; padding-left:0; margin-bottom: 8px;">`;
            classGroups.forEach(g => {
                html += `<li class="group-item ${g.id === selectedManageGroupId ? 'active' : ''}" data-id="${g.id}" style="margin-left: 12px; margin-bottom: 2px; padding: 6px 10px; border-radius:5px; cursor:pointer;">
                    ${g.name} <span class="badge" style="background:var(--border-color); padding: 2px 6px; border-radius: 10px; font-size: 0.8em; margin-left: 8px;">${g.sentences.length} câu</span>
                </li>`;
            });
            html += `</ul>`;
        }

        html += `</div></div>`;
    });

    DOM.groupsList.innerHTML = html;

    // Bind click for toggle collapse
    document.querySelectorAll('.class-toggle-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const classId = btn.getAttribute('data-class-id');
            if (expandedClasses.has(classId)) {
                expandedClasses.delete(classId);
            } else {
                expandedClasses.add(classId);
            }
            renderManageGroups();
        });
    });

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

function escHtml(str) {
    return (str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function renderSentences() {
    const group = appData.getGroup(selectedManageGroupId);
    DOM.sentenceCount.textContent = group.sentences.length;
    
    if (group.sentences.length === 0) {
        DOM.sentencesList.innerHTML = '<p class="text-hint text-center">Chưa có câu hỏi nào trong nhóm này.</p>';
        return;
    }

    let html = '';
    group.sentences.forEach(s => {
        // Sentence card
        html += `<div class="sentence-card" id="scard-${s.id}">
            <div class="sentence-content">
                <div class="zh">${escHtml(s.zh)}${s.pinyin ? ` <span style="font-size:0.8em;color:var(--text-secondary)">(${escHtml(s.pinyin)})</span>` : ''}</div>
                <div class="vi">${escHtml(s.vi)}</div>
            </div>
            <div style="display:flex;gap:6px;flex-shrink:0;">
                <button class="icon-btn edit-sentence-btn" data-id="${s.id}" title="Chỉnh sửa" style="color:var(--primary-color);font-size:1rem;padding:6px 10px;"><i class="fa-solid fa-pen"></i></button>
                <button class="danger-btn delete-sentence-btn" data-id="${s.id}" style="padding:6px 10px;"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>`;

        // Inline edit form (hidden by default)
        html += `<div id="sedit-${s.id}" style="display:none;background:rgba(245,158,11,0.07);border:1px solid var(--primary-color);border-radius:10px;padding:16px;margin-bottom:10px;">
            <h5 style="margin:0 0 12px;color:var(--primary-color);">✏️ Chỉnh sửa câu</h5>
            <div class="input-grid" style="gap:10px;">
                <div class="input-group"><label>Chữ Hán</label><input type="text" class="premium-input sedit-zh" data-id="${s.id}" value="${escHtml(s.zh)}"></div>
                <div class="input-group"><label>Pinyin</label><input type="text" class="premium-input sedit-pinyin" data-id="${s.id}" value="${escHtml(s.pinyin)}"></div>
                <div class="input-group"><label>Tiếng Việt</label><input type="text" class="premium-input sedit-vi" data-id="${s.id}" value="${escHtml(s.vi)}"></div>
                <div class="input-group"><label>Nghĩa chi tiết</label><input type="text" class="premium-input sedit-meaning" data-id="${s.id}" value="${escHtml(s.meaningDetail)}"></div>
                <div class="input-group"><label>Ví dụ (Chữ Hán)</label><input type="text" class="premium-input sedit-exzh" data-id="${s.id}" value="${escHtml(s.exZh)}"></div>
                <div class="input-group"><label>Ví dụ (Pinyin + Nghĩa)</label><input type="text" class="premium-input sedit-exvi" data-id="${s.id}" value="${escHtml(s.exVi)}"></div>
                <div class="input-group"><label>Cấu trúc</label><input type="text" class="premium-input sedit-structure" data-id="${s.id}" value="${escHtml(s.structure)}"></div>
                <div class="input-group"><label>Ngữ pháp</label><textarea class="premium-input sedit-grammar" data-id="${s.id}" rows="2">${escHtml(s.grammar)}</textarea></div>
                <div class="input-group"><label>Ghi chú</label><textarea class="premium-input sedit-note" data-id="${s.id}" rows="2">${escHtml(s.note)}</textarea></div>
            </div>
            <div style="display:flex;gap:10px;margin-top:12px;">
                <button class="primary-btn save-sentence-btn" data-id="${s.id}" style="flex:1;"><i class="fa-solid fa-check"></i> Lưu</button>
                <button class="secondary-btn cancel-edit-btn" data-id="${s.id}">Hủy</button>
            </div>
        </div>`;
    });

    DOM.sentencesList.innerHTML = html;

    // Delete
    document.querySelectorAll('.delete-sentence-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            if (confirm("Xóa câu này?")) {
                appData.deleteSentence(selectedManageGroupId, id);
                renderSentences();
                renderSetupClasses();
            }
        });
    });

    // Toggle edit form
    document.querySelectorAll('.edit-sentence-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = e.currentTarget.getAttribute('data-id');
            const form = document.getElementById('sedit-' + id);
            const isOpen = form.style.display === 'block';
            // Close all
            document.querySelectorAll('[id^="sedit-"]').forEach(f => { f.style.display = 'none'; });
            form.style.display = isOpen ? 'none' : 'block';
        });
    });

    // Save
    document.querySelectorAll('.save-sentence-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            const form = document.getElementById('sedit-' + id);
            const grp = appData.getGroup(selectedManageGroupId);
            const sentence = grp.sentences.find(s => s.id === id);
            if (!sentence) return;

            sentence.zh            = form.querySelector('.sedit-zh').value.trim();
            sentence.pinyin        = form.querySelector('.sedit-pinyin').value.trim();
            sentence.vi            = form.querySelector('.sedit-vi').value.trim();
            sentence.meaningDetail = form.querySelector('.sedit-meaning').value.trim();
            sentence.exZh          = form.querySelector('.sedit-exzh').value.trim();
            sentence.exVi          = form.querySelector('.sedit-exvi').value.trim();
            sentence.structure     = form.querySelector('.sedit-structure').value.trim();
            sentence.grammar       = form.querySelector('.sedit-grammar').value.trim();
            sentence.note          = form.querySelector('.sedit-note').value.trim();

            appData.saveData();
            renderSentences();
            renderSetupClasses();
        });
    });

    // Cancel
    document.querySelectorAll('.cancel-edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            document.getElementById('sedit-' + id).style.display = 'none';
        });
    });
}

// ==================== PINYIN VIEW ====================
let currentPinyinTab = 'initials'; // 'initials' or 'finals'
let currentPinyinTarget = '';
let currentPinyinTone = 1;
let pinyinRecognition = null;

function initPinyinView() {
    if (!DOM.initialsList) return;
    
    // Tab switching
    if (DOM.tabInitials && DOM.tabFinals) {
        DOM.tabInitials.addEventListener('click', () => {
            currentPinyinTab = 'initials';
            DOM.tabInitials.className = 'primary-btn';
            DOM.tabFinals.className = 'secondary-btn';
            renderPinyinList();
        });
        DOM.tabFinals.addEventListener('click', () => {
            currentPinyinTab = 'finals';
            DOM.tabFinals.className = 'primary-btn';
            DOM.tabInitials.className = 'secondary-btn';
            renderPinyinList();
        });
    }

    renderPinyinList();

    if (DOM.pinyinListenBtn) {
        DOM.pinyinListenBtn.addEventListener('click', () => {
            if (currentPinyinTarget) {
                let toneNum = (currentPinyinTone === 0 || currentPinyinTone === 5) ? 1 : currentPinyinTone;
                let s = currentPinyinTarget.replace(/ü/g, 'uu');
                let url = `https://raw.githubusercontent.com/davinfifield/mp3-chinese-pinyin-sound/master/mp3/${s}${toneNum}.mp3`;
                
                let audio = new Audio(url);
                audio.play().catch(e => {
                    // Fallback
                    playAudioText(DOM.evalTarget.textContent);
                });
            }
        });
    }

    if (DOM.detailListenBtn) {
        DOM.detailListenBtn.addEventListener('click', () => {
            const name = DOM.initialDetailName.textContent;
            let audioSyllable = name;
            
            if (currentPinyinTab === 'initials') {
                const map = {
                    'b': 'bo', 'p': 'po', 'm': 'mo', 'f': 'fo',
                    'd': 'de', 't': 'te', 'n': 'ne', 'l': 'le',
                    'g': 'ge', 'k': 'ke', 'h': 'he',
                    'j': 'ji', 'q': 'qi', 'x': 'xi',
                    'zh': 'zhi', 'ch': 'chi', 'sh': 'shi', 'r': 'ri',
                    'z': 'zi', 'c': 'ci', 's': 'si',
                    'y': 'yi', 'w': 'wu'
                };
                audioSyllable = map[name] || name;
            } else {
                const finalMap = {
                    'i': 'yi', 'u': 'wu', 'ü': 'yu', 'ui': 'wei', 'iu': 'you',
                    'ie': 'ye', 'üe': 'yue', 'in': 'yin', 'ing': 'ying',
                    'un': 'wen', 'ün': 'yun', 'ong': 'weng'
                };
                audioSyllable = finalMap[name] || name;
            }
            
            let s = audioSyllable.replace(/ü/g, 'uu');
            let url = `https://raw.githubusercontent.com/davinfifield/mp3-chinese-pinyin-sound/master/mp3/${s}1.mp3`;
            let audio = new Audio(url);
            audio.play().catch(e => {
                let fallbackText = typeof getPinyinWithTone === 'function' ? getPinyinWithTone(audioSyllable, 1) : audioSyllable;
                playAudioText(fallbackText);
            });
        });
    }

    setupPinyinSpeech();
}

function renderPinyinList() {
    const listData = currentPinyinTab === 'initials' ? PINYIN_INITIALS : PINYIN_FINALS;
    
    DOM.initialsList.innerHTML = listData.map(item => 
        `<button class="initial-btn glass-panel" style="padding: 10px; border: 1px solid var(--border-color); cursor: pointer; border-radius: 6px; font-weight: bold; background: var(--card-bg); text-align: center;" data-id="${item.id}">
            ${item.name}
        </button>`
    ).join('');

    document.querySelectorAll('.initial-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.initial-btn').forEach(b => {
                b.style.borderColor = 'var(--border-color)';
                b.style.background = 'var(--card-bg)';
            });
            e.currentTarget.style.borderColor = 'var(--primary-color)';
            e.currentTarget.style.background = 'rgba(var(--primary-rgb), 0.1)';
            selectPinyinItem(e.currentTarget.getAttribute('data-id'));
        });
    });

    if (listData.length > 0) {
        // Auto select first item
        const firstBtn = DOM.initialsList.querySelector('.initial-btn');
        if (firstBtn) firstBtn.click();
    }
}

function selectPinyinItem(id) {
    const listData = currentPinyinTab === 'initials' ? PINYIN_INITIALS : PINYIN_FINALS;
    const item = listData.find(x => x.id === id);
    if (!item) return;

    DOM.initialDetailName.textContent = item.name;
    DOM.initialDetailType.textContent = item.type;
    DOM.initialDetailNote.textContent = item.note;

    let combos = [];
    if (currentPinyinTab === 'initials') {
        combos = PINYIN_COMBINATIONS[id] || [];
    } else {
        let comboSet = new Set();
        for (let [initial, syllables] of Object.entries(PINYIN_COMBINATIONS)) {
            for (let s of syllables) {
                if (s.endsWith(id)) {
                    comboSet.add(s);
                }
            }
        }
        combos = Array.from(comboSet).sort();
    }

    DOM.combinationsList.innerHTML = combos.map(syllable => 
        `<button class="combo-btn secondary-btn" style="padding: 8px 15px; border-radius: 20px; text-transform: lowercase;" data-syllable="${syllable}">
            ${syllable}
        </button>`
    ).join('');

    DOM.pinyinEvalSection.classList.add('hidden');

    document.querySelectorAll('.combo-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const syllable = e.currentTarget.getAttribute('data-syllable');
            practicePinyin(syllable);
        });
    });
}

function renderToneSelector() {
    const tones = [
        { val: 1, label: 'Thanh 1 (bā)' },
        { val: 2, label: 'Thanh 2 (bá)' },
        { val: 3, label: 'Thanh 3 (bǎ)' },
        { val: 4, label: 'Thanh 4 (bà)' },
        { val: 0, label: 'Thanh nhẹ (ba)' }
    ];
    
    DOM.toneSelector.innerHTML = tones.map(t => 
        `<button class="tone-btn ${currentPinyinTone === t.val ? 'primary-btn' : 'secondary-btn'}" style="padding: 5px 10px; font-size: 0.9rem;" data-tone="${t.val}">
            ${t.val === 0 ? 'Nhẹ' : 'T' + t.val}
        </button>`
    ).join('');

    document.querySelectorAll('.tone-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentPinyinTone = parseInt(e.currentTarget.getAttribute('data-tone'));
            renderToneSelector();
            updateEvalTarget();
        });
    });
}

function updateEvalTarget() {
    DOM.evalTarget.textContent = getPinyinWithTone(currentPinyinTarget, currentPinyinTone);
    DOM.pinyinResult.classList.add('hidden');
    DOM.pinyinEvalStatus.textContent = 'Bấm mic để đọc';
}

function practicePinyin(syllable) {
    currentPinyinTarget = syllable;
    currentPinyinTone = 1; // Default to tone 1
    DOM.pinyinEvalSection.classList.remove('hidden');
    
    renderToneSelector();
    updateEvalTarget();
    
    if(DOM.pinyinRecordBtn) {
        DOM.pinyinRecordBtn.style.animation = "none";
        DOM.pinyinRecordBtn.style.background = "var(--primary-color)";
    }
}

function setupPinyinSpeech() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    pinyinRecognition = new SpeechRecognition();
    pinyinRecognition.lang = 'zh-CN';
    pinyinRecognition.interimResults = false;
    pinyinRecognition.maxAlternatives = 1;

    pinyinRecognition.onstart = function() {
        DOM.pinyinEvalStatus.textContent = "Đang nghe... (Hãy nói)";
        DOM.pinyinResult.classList.add('hidden');
        if(DOM.pinyinRecordBtn) {
            DOM.pinyinRecordBtn.style.animation = "pulse 1.5s infinite";
            DOM.pinyinRecordBtn.style.background = "var(--danger-color)";
        }
    };

    pinyinRecognition.onresult = async function(event) {
        const speechResult = event.results[0][0].transcript;
        DOM.pinyinEvalStatus.textContent = "Nhận diện: " + speechResult + ". Đang kiểm tra...";
        
        try {
            const res = await fetch(`https://lingva.ml/api/v1/zh/en/${encodeURIComponent(speechResult)}`);
            const data = await res.json();
            
            if (data && data.info && data.info.pronunciation) {
                let pinyinStr = data.info.pronunciation.toLowerCase();
                
                let expectedPinyin = getPinyinWithTone(currentPinyinTarget, currentPinyinTone).toLowerCase();
                
                let normalizedPinyin = pinyinStr.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/g, "");
                let targetNorm = currentPinyinTarget.replace(/ü/g, "u");
                let recNorm = normalizedPinyin.replace(/v/g, "u").replace(/ü/g, "u");
                
                let expectedNFD = expectedPinyin.normalize("NFD").replace(/v/g,"u").replace(/ü/g, "u");
                let recNFD = pinyinStr.normalize("NFD").replace(/v/g,"u").replace(/ü/g, "u");
                
                let isExactMatch = recNFD === expectedNFD;
                let isBaseMatch = (recNorm === targetNorm);

                if (isExactMatch) {
                    DOM.pinyinResult.innerHTML = `<i class="fa-solid fa-check-circle"></i> Xuất sắc! Phát âm chính xác hoàn toàn.`;
                    DOM.pinyinResult.style.color = "var(--success-color)";
                    DOM.pinyinResult.style.background = "rgba(16, 185, 129, 0.1)";
                    DOM.pinyinResult.classList.remove('hidden');
                } else if (isBaseMatch) {
                    DOM.pinyinResult.innerHTML = `<i class="fa-solid fa-exclamation-circle"></i> Đúng âm nhưng <strong>SAI THANH ĐIỆU</strong>. Bạn đọc: <strong>${pinyinStr}</strong>`;
                    DOM.pinyinResult.style.color = "var(--warning-color, #f59e0b)";
                    DOM.pinyinResult.style.background = "rgba(245, 158, 11, 0.1)";
                    DOM.pinyinResult.classList.remove('hidden');
                } else {
                    DOM.pinyinResult.innerHTML = `<i class="fa-solid fa-xmark-circle"></i> Chưa đúng. Bạn đọc thành: <strong>${pinyinStr}</strong>`;
                    DOM.pinyinResult.style.color = "var(--danger-color)";
                    DOM.pinyinResult.style.background = "rgba(239, 68, 68, 0.1)";
                    DOM.pinyinResult.classList.remove('hidden');
                }
            } else {
                DOM.pinyinEvalStatus.textContent = "Không thể lấy pinyin để kiểm tra.";
            }
        } catch (err) {
            DOM.pinyinEvalStatus.textContent = "Lỗi kết nối API khi kiểm tra.";
        }
    };

    pinyinRecognition.onspeechend = function() {
        pinyinRecognition.stop();
    };

    pinyinRecognition.onend = function() {
        if(DOM.pinyinRecordBtn) {
            DOM.pinyinRecordBtn.style.animation = "none";
            DOM.pinyinRecordBtn.style.background = "var(--primary-color)";
        }
        if (DOM.pinyinEvalStatus.textContent.includes("Đang nghe")) {
             DOM.pinyinEvalStatus.textContent = "Không nghe rõ, vui lòng thử lại";
        }
    };

    pinyinRecognition.onerror = function(event) {
        DOM.pinyinEvalStatus.textContent = "Lỗi mic: " + event.error;
        if(DOM.pinyinRecordBtn) {
            DOM.pinyinRecordBtn.style.animation = "none";
            DOM.pinyinRecordBtn.style.background = "var(--primary-color)";
        }
    };

    if (DOM.pinyinRecordBtn) {
        DOM.pinyinRecordBtn.addEventListener('click', () => {
            pinyinRecognition.start();
        });
    }
}

// Khởi chạy
window.addEventListener('DOMContentLoaded', () => {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
    }
    init();
});
