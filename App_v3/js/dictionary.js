// ========================================
// DICTIONARY POPUP MODULE
// ========================================

function showDictPopup(chinese) {
    if (!chinese) return;

    // Look up in local vocabulary first
    const allWords = getVocabulary();
    const match = allWords.find(w => w.chinese === chinese || w.chinese.includes(chinese));

    const popup = document.getElementById('dictPopup');
    const overlay = document.getElementById('dictOverlay');

    document.getElementById('dictChar').textContent = chinese;

    if (match) {
        document.getElementById('dictPinyin').textContent = match.pinyin || '';
        document.getElementById('dictMeaning').textContent = match.meaning || '';
        document.getElementById('dictExample').textContent = match.example ? `📌 ${match.example}` : '';
    } else {
        document.getElementById('dictPinyin').textContent = '';
        document.getElementById('dictMeaning').innerHTML =
            `<span style="color:var(--text-secondary);font-size:0.85rem;">Không tìm thấy trong từ vựng.</span>
             <br><a href="https://en.wiktionary.org/wiki/${encodeURIComponent(chinese)}" target="_blank"
                style="color:var(--accent-primary);font-size:0.85rem;">🔗 Tra trên Wiktionary</a>`;
        document.getElementById('dictExample').textContent = '';
    }

    overlay.style.display = 'block';
    popup.style.display = 'block';

    // Auto-play pronunciation
    speakChinese(chinese);
}

function closeDictPopup() {
    document.getElementById('dictPopup').style.display = 'none';
    document.getElementById('dictOverlay').style.display = 'none';
}

// Make Chinese text in vocab list clickable
function makeDictClickable() {
    document.querySelectorAll('.vocab-chinese').forEach(el => {
        el.style.cursor = 'pointer';
        el.title = 'Bấm để tra từ';
        el.onclick = (e) => {
            e.stopPropagation();
            showDictPopup(el.textContent.trim());
        };
    });
}
