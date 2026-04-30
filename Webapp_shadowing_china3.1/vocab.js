/* ============================================
   VOCAB.JS – Vocabulary & SRS Module
   ============================================ */

'use strict';

const VocabState = {
  allVocab: [],
  reviewQueue: [],
  newQueue: [],
  currentMode: null, // 'review' | 'new'
  currentIndex: 0,
  currentBatch: [],
};

// ---- Data Extraction ----
function extractVocabFromLessons(lessons) {
  const seen = new Set();
  const result = [];
  if (!lessons) return result;

  lessons.forEach(lesson => {
    lesson.sentences.forEach(s => {
      // Use whole sentence as vocab for now
      const key = s.chinese + '_' + lesson.id;
      if (!seen.has(key)) {
        seen.add(key);
        result.push({
          id: lesson.id + '_' + s.id,
          word: s.chinese,
          pinyin: s.pinyin,
          vietnamese: s.vietnamese,
          english: s.english,
        });
      }
    });
  });
  return result;
}

function getAllVocab() {
  if (!window.LESSONS_DATA) return [];
  return extractVocabFromLessons(LESSONS_DATA.shadowing);
}

// ---- SRS Initialization ----
function initVocab() {
  VocabState.allVocab = getAllVocab();
  
  if (!AppState.stats.srsVocab) {
    AppState.stats.srsVocab = {};
  }
  
  // Setup DOM Event listeners if not already
  if (!window.vocabListenersBound) {
    document.getElementById('btn-start-review').addEventListener('click', () => startFlashcards('review'));
    document.getElementById('btn-start-new').addEventListener('click', () => startFlashcards('new'));
    document.getElementById('vocab-back-btn').addEventListener('click', showVocabDashboard);
    document.getElementById('btn-flip-card').addEventListener('click', flipCard);
    
    document.getElementById('btn-rate-1').addEventListener('click', () => rateCard(0)); // Again
    document.getElementById('btn-rate-2').addEventListener('click', () => rateCard(1)); // Hard
    document.getElementById('btn-rate-3').addEventListener('click', () => rateCard(2)); // Good
    document.getElementById('btn-rate-4').addEventListener('click', () => rateCard(3)); // Easy
    window.vocabListenersBound = true;
  }
  
  prepareQueues();
  showVocabDashboard();
}

function prepareQueues() {
  const now = Date.now();
  const srsInfo = AppState.stats.srsVocab;
  
  VocabState.reviewQueue = [];
  VocabState.newQueue = [];
  
  VocabState.allVocab.forEach(v => {
    const data = srsInfo[v.id];
    if (data) {
      if (data.nextReview <= now) {
        VocabState.reviewQueue.push(v);
      }
    } else {
      VocabState.newQueue.push(v);
    }
  });
  
  // Shuffle new queue
  VocabState.newQueue.sort(() => Math.random() - 0.5);
  VocabState.reviewQueue.sort(() => Math.random() - 0.5);
}

function showVocabDashboard() {
  document.getElementById('vocab-dashboard').classList.remove('hidden');
  document.getElementById('vocab-flashcard-area').classList.add('hidden');
  
  document.getElementById('srs-due-count').textContent = VocabState.reviewQueue.length;
  document.getElementById('srs-new-count').textContent = VocabState.newQueue.length;
  
  document.getElementById('btn-start-review').disabled = VocabState.reviewQueue.length === 0;
  document.getElementById('btn-start-new').disabled = VocabState.newQueue.length === 0;
}

// ---- Flashcard Mode ----
function startFlashcards(mode) {
  VocabState.currentMode = mode;
  VocabState.currentBatch = mode === 'review' ? VocabState.reviewQueue : VocabState.newQueue.slice(0, 10); // batch of 10 for new
  VocabState.currentIndex = 0;
  
  if (VocabState.currentBatch.length === 0) {
    showToast('🎉 Đã hoàn thành xong danh sách!');
    return;
  }

  document.getElementById('vocab-dashboard').classList.add('hidden');
  document.getElementById('vocab-flashcard-area').classList.remove('hidden');
  
  showCard();
}

function showCard() {
  const vocab = VocabState.currentBatch[VocabState.currentIndex];
  
  const chineseContainer = document.getElementById('fc-chinese');
  chineseContainer.innerHTML = '';
  // Wrap characters for radical interaction just like shadowing.js
  for (let i = 0; i < vocab.word.length; i++) {
    const ch = vocab.word[i];
    if (typeof CHAR_TO_RADICAL !== 'undefined' && CHAR_TO_RADICAL[ch]) {
      const span = document.createElement('span');
      span.className = 'clickable-char';
      span.textContent = ch;
      span.onclick = function(e) { 
        e.stopPropagation();
        if (typeof showRadicalInfo === 'function') showRadicalInfo(ch, this); 
      };
      chineseContainer.appendChild(span);
    } else {
      chineseContainer.appendChild(document.createTextNode(ch));
    }
  }

  document.getElementById('fc-pinyin').textContent = vocab.pinyin;
  document.getElementById('fc-vietnamese').textContent = '🇻🇳 ' + vocab.vietnamese;
  document.getElementById('fc-english').textContent = '🇬🇧 ' + vocab.english;
  
  document.getElementById('fc-back-side').classList.add('hidden');
  document.getElementById('fc-flip-btn-area').classList.remove('hidden');
  document.getElementById('fc-rating-area').classList.add('hidden');
  
  // Hide radical panel if exists
  const radPanel = document.getElementById('radical-info-panel');
  if (radPanel) radPanel.classList.add('hidden');
}

function flipCard() {
  document.getElementById('fc-back-side').classList.remove('hidden');
  document.getElementById('fc-flip-btn-area').classList.add('hidden');
  document.getElementById('fc-rating-area').classList.remove('hidden');
}

function rateCard(quality) {
  const vocab = VocabState.currentBatch[VocabState.currentIndex];
  updateSrs(vocab.id, quality);
  saveState();
  
  VocabState.currentIndex++;
  if (VocabState.currentIndex < VocabState.currentBatch.length) {
    showCard();
  } else {
    showToast('🎉 Bạn đã hoàn thành phiên ôn tập này!');
    // Re-prepare queues
    prepareQueues();
    showVocabDashboard();
  }
}

// ---- SuperMemo-2 Simplified Logic ----
// quality: 0 (Again), 1 (Hard), 2 (Good), 3 (Easy)
function updateSrs(vocabId, quality) {
  if (!AppState.stats.srsVocab[vocabId]) {
    AppState.stats.srsVocab[vocabId] = { interval: 0, ease: 2.5, consecutiveCorrect: 0 };
  }
  
  const data = AppState.stats.srsVocab[vocabId];
  
  if (quality < 2) {
    // Forgot or Hard
    data.consecutiveCorrect = 0;
    data.interval = quality === 0 ? 0.0007 : 0.007; // 1 min or 10 mins
  } else {
    data.consecutiveCorrect++;
    if (data.consecutiveCorrect === 1) {
      data.interval = 1; // 1 day
    } else if (data.consecutiveCorrect === 2) {
      data.interval = 4; // 4 days
    } else {
      data.ease = Math.max(1.3, data.ease + (quality === 3 ? 0.15 : 0));
      data.interval = Math.round(data.interval * data.ease);
    }
  }
  
  const msInterval = data.interval * 24 * 60 * 60 * 1000;
  data.nextReview = Date.now() + msInterval;
}
