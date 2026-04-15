/* ============================================
   VOCAB.JS – Vocabulary Module
   Quản lý danh sách từ vựng từ LESSONS_DATA
   ============================================ */

'use strict';

const VocabState = {
  currentLevel: 'hsk1',
  currentLesson: null,   // null = tất cả bài
  vocabList: [],
  filteredList: [],
  currentIndex: 0,
  mode: 'browse',        // 'browse' | 'flashcard' | 'quiz'
  flipped: false,
  quizOptions: [],
  score: { correct: 0, total: 0 },
};

/* =============================================
   Helpers: lấy từ vựng từ LESSONS_DATA.shadowing
   ============================================= */

/**
 * Trích xuất tất cả từ vựng độc đáo từ các câu shadowing.
 * Mỗi mục: { word, pinyin, vietnamese, english, level, lessonId, lessonNum }
 */
function extractVocabFromLessons(lessons) {
  const seen = new Set();
  const result = [];
  if (!lessons) return result;

  lessons.forEach(lesson => {
    lesson.sentences.forEach(s => {
      // Tách từng từ trong câu tiếng Trung (đơn giản: split khoảng trắng hoặc dùng cả câu)
      // Ở đây lưu cả câu như một "đơn vị từ vựng" để hỗ trợ học theo câu
      const key = s.chinese + '_' + lesson.id;
      if (!seen.has(key)) {
        seen.add(key);
        result.push({
          id: lesson.id + '_' + s.id,
          word: s.chinese,
          pinyin: s.pinyin,
          vietnamese: s.vietnamese,
          english: s.english,
          level: lesson.level,
          lessonId: lesson.id,
          lessonNum: lesson.lesson,
          lessonTopic: lesson.topic,
        });
      }
    });
  });
  return result;
}

/**
 * Lấy vocab theo cấp độ ('HSK 1', 'HSK 2', 'HSK 3')
 */
function getVocabByLevel(level) {
  if (!window.LESSONS_DATA) return [];
  const lessons = LESSONS_DATA.shadowing.filter(l => l.level === level);
  return extractVocabFromLessons(lessons);
}

/**
 * Lấy vocab theo bài học (lessonId như 'L01', 'L02', ...)
 */
function getVocabByLesson(lessonId) {
  if (!window.LESSONS_DATA) return [];
  const lessons = LESSONS_DATA.shadowing.filter(l => l.id === lessonId);
  return extractVocabFromLessons(lessons);
}

/**
 * Lấy tất cả vocab
 */
function getAllVocab() {
  if (!window.LESSONS_DATA) return [];
  return extractVocabFromLessons(LESSONS_DATA.shadowing);
}

/* =============================================
   Khởi tạo module Vocab
   ============================================= */

function initVocab() {
  VocabState.vocabList = getAllVocab();
  VocabState.filteredList = [...VocabState.vocabList];
  VocabState.currentIndex = 0;
  VocabState.flipped = false;
  filterVocabByLevel(VocabState.currentLevel);
}

/* =============================================
   Filter
   ============================================= */

function filterVocabByLevel(level) {
  VocabState.currentLevel = level;
  const levelMap = { hsk1: 'HSK 1', hsk2: 'HSK 2', hsk3: 'HSK 3', all: null };
  const target = levelMap[level];
  if (target) {
    VocabState.filteredList = VocabState.vocabList.filter(v => v.level === target);
  } else {
    VocabState.filteredList = [...VocabState.vocabList];
  }
  VocabState.currentIndex = 0;
  VocabState.flipped = false;
}

function filterVocabByLesson(lessonId) {
  VocabState.currentLesson = lessonId;
  if (!lessonId) {
    filterVocabByLevel(VocabState.currentLevel);
    return;
  }
  VocabState.filteredList = VocabState.vocabList.filter(v => v.lessonId === lessonId);
  VocabState.currentIndex = 0;
  VocabState.flipped = false;
}

/* =============================================
   Flashcard điều hướng
   ============================================= */

function vocabNext() {
  const len = VocabState.filteredList.length;
  if (len === 0) return;
  VocabState.currentIndex = (VocabState.currentIndex + 1) % len;
  VocabState.flipped = false;
}

function vocabPrev() {
  const len = VocabState.filteredList.length;
  if (len === 0) return;
  VocabState.currentIndex = (VocabState.currentIndex - 1 + len) % len;
  VocabState.flipped = false;
}

function vocabFlip() {
  VocabState.flipped = !VocabState.flipped;
}

function getCurrentVocab() {
  return VocabState.filteredList[VocabState.currentIndex] || null;
}

function getVocabProgress() {
  const len = VocabState.filteredList.length;
  if (len === 0) return { current: 0, total: 0, pct: 0 };
  return {
    current: VocabState.currentIndex + 1,
    total: len,
    pct: Math.round(((VocabState.currentIndex + 1) / len) * 100),
  };
}

/* =============================================
   Quiz
   ============================================= */

function generateQuizOptions(correctItem, allItems, count) {
  count = count || 4;
  const pool = allItems.filter(v => v.id !== correctItem.id);
  const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, count - 1);
  const options = [...shuffled, correctItem].sort(() => Math.random() - 0.5);
  return options;
}

function startVocabQuiz() {
  VocabState.mode = 'quiz';
  VocabState.score = { correct: 0, total: 0 };
  VocabState.currentIndex = 0;
  shuffleVocabList();
  generateNextQuizQuestion();
}

function shuffleVocabList() {
  VocabState.filteredList = VocabState.filteredList.sort(() => Math.random() - 0.5);
}

function generateNextQuizQuestion() {
  const current = getCurrentVocab();
  if (!current) return null;
  VocabState.quizOptions = generateQuizOptions(current, VocabState.filteredList);
  return { question: current, options: VocabState.quizOptions };
}

function answerQuiz(selectedId) {
  const correct = getCurrentVocab();
  VocabState.score.total++;
  const isCorrect = selectedId === correct.id;
  if (isCorrect) VocabState.score.correct++;
  return { isCorrect, correctItem: correct };
}

function getQuizScore() {
  const { correct, total } = VocabState.score;
  return {
    correct,
    total,
    pct: total > 0 ? Math.round((correct / total) * 100) : 0,
  };
}

/* =============================================
   Tìm kiếm
   ============================================= */

function searchVocab(query) {
  if (!query || query.trim() === '') {
    filterVocabByLevel(VocabState.currentLevel);
    return;
  }
  const q = query.trim().toLowerCase();
  VocabState.filteredList = VocabState.vocabList.filter(v =>
    v.word.includes(q) ||
    v.pinyin.toLowerCase().includes(q) ||
    v.vietnamese.toLowerCase().includes(q) ||
    v.english.toLowerCase().includes(q)
  );
  VocabState.currentIndex = 0;
  VocabState.flipped = false;
}

/* =============================================
   Thống kê học từ vựng
   ============================================= */

function getVocabStats() {
  const all = getAllVocab();
  const learned = AppState ? AppState.stats.doneSentences : new Set();
  return {
    total: all.length,
    learned: all.filter(v => learned.has(v.id)).length,
    hsk1: getVocabByLevel('HSK 1').length,
    hsk2: getVocabByLevel('HSK 2').length,
    hsk3: getVocabByLevel('HSK 3').length,
  };
}
