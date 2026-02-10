// ========================================
// TEXT-TO-SPEECH (CHINESE)
// ========================================

// Check if speech synthesis is supported
const speechSupported = 'speechSynthesis' in window;

// Cached voices
let cachedVoices = [];

// Load voices
function loadVoices() {
    return new Promise((resolve) => {
        cachedVoices = speechSynthesis.getVoices();
        if (cachedVoices.length > 0) {
            resolve(cachedVoices);
        } else {
            // Wait for voices to load
            speechSynthesis.onvoiceschanged = () => {
                cachedVoices = speechSynthesis.getVoices();
                resolve(cachedVoices);
            };
            // Timeout fallback
            setTimeout(() => resolve(cachedVoices), 1000);
        }
    });
}

// Find Chinese voice
function findChineseVoice() {
    const voices = cachedVoices.length > 0 ? cachedVoices : speechSynthesis.getVoices();

    // Priority: zh-CN > zh-TW > any Chinese
    const priorities = ['zh-CN', 'zh-TW', 'zh', 'cmn'];

    for (const priority of priorities) {
        const voice = voices.find(v => v.lang.startsWith(priority));
        if (voice) return voice;
    }

    // Fallback: any voice with "chinese" in name
    return voices.find(v =>
        v.name.toLowerCase().includes('chinese') ||
        v.name.toLowerCase().includes('mandarin')
    );
}

// Speak Chinese text
function speakChinese(text) {
    if (!speechSupported) {
        showToast('Trình duyệt không hỗ trợ phát âm!', 'error');
        return;
    }

    if (!text || !text.trim()) {
        console.warn('No text to speak');
        return;
    }

    // Cancel any ongoing speech
    speechSynthesis.cancel();

    // Small delay to ensure cancel is processed
    setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text.trim());
        utterance.lang = 'zh-CN'; // Mandarin Chinese
        utterance.rate = 0.8; // Slower rate for learning
        utterance.pitch = 1;
        utterance.volume = 1;

        // Try to find a Chinese voice
        const chineseVoice = findChineseVoice();
        if (chineseVoice) {
            utterance.voice = chineseVoice;
        }

        // Success handler
        utterance.onstart = () => {
            console.log('Speaking:', text);
        };

        utterance.onend = () => {
            console.log('Speech finished');
        };

        // Error handling
        utterance.onerror = (event) => {
            console.error('Speech error:', event.error);
            // Only show toast for real errors, not interruptions
            if (event.error !== 'interrupted' && event.error !== 'canceled') {
                showToast('Không thể phát âm. Vui lòng thử lại!', 'error');
            }
        };

        try {
            speechSynthesis.speak(utterance);
        } catch (error) {
            console.error('Speech synthesis error:', error);
            showToast('Lỗi khi phát âm!', 'error');
        }
    }, 50);
}

// Initialize voices on page load
if (speechSupported) {
    // Load voices immediately and on change
    loadVoices();

    // Some browsers need user interaction first
    document.addEventListener('click', function initVoices() {
        loadVoices();
        document.removeEventListener('click', initVoices);
    }, { once: true });
}
