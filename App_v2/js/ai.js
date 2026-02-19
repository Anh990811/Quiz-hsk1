// ========================================
// AI MODULE (Google Gemini)
// ========================================

const AI_KEY_STORAGE = 'geminiApiKey';

function getApiKey() {
    return localStorage.getItem(AI_KEY_STORAGE) || '';
}

function saveApiKey() {
    const key = document.getElementById('geminiApiKey').value.trim();
    if (key) {
        localStorage.setItem(AI_KEY_STORAGE, key);
        document.getElementById('apiKeyStatus').innerHTML =
            '<span style="color:var(--success)">✅ Đã lưu API Key</span>';
    } else {
        localStorage.removeItem(AI_KEY_STORAGE);
        document.getElementById('apiKeyStatus').innerHTML =
            '<span style="color:var(--text-secondary)">API Key chưa được đặt</span>';
    }
}

function loadApiKeyToInput() {
    const key = getApiKey();
    const el = document.getElementById('geminiApiKey');
    if (el) el.value = key;
    const status = document.getElementById('apiKeyStatus');
    if (status) {
        status.innerHTML = key
            ? '<span style="color:var(--success)">✅ API Key đã sẵn sàng</span>'
            : '<span style="color:var(--text-secondary)">Chưa có API Key</span>';
    }
}

async function aiSuggestExample() {
    const apiKey = getApiKey();
    if (!apiKey) {
        showToast('⚙️ Hãy nhập Gemini API Key trong Cài đặt!', 'warning');
        return;
    }

    const chinese = document.getElementById('inputChinese').value.trim();
    const pinyin = document.getElementById('inputPinyin').value.trim();
    const meaning = document.getElementById('inputMeaning').value.trim();

    if (!chinese || !meaning) {
        showToast('⚠️ Hãy nhập Chữ Hán và Nghĩa trước!', 'warning');
        return;
    }

    const btn = document.getElementById('aiSuggestBtn');
    btn.disabled = true;
    btn.innerHTML = '<span class="ai-icon">⏳</span> Đang tạo...';

    const prompt = `Tạo 1 câu ví dụ ngắn bằng tiếng Trung có chứa từ "${chinese}" (${pinyin}, nghĩa: ${meaning}).
Chỉ trả về JSON theo định dạng sau, không thêm gì khác:
{"example": "<câu tiếng Trung>", "translation": "<nghĩa tiếng Việt>"}`;

    try {
        const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: { temperature: 0.7, maxOutputTokens: 200 }
                })
            }
        );

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.error?.message || `HTTP ${res.status}`);
        }

        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

        // Extract JSON from response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error('Phản hồi không hợp lệ');

        const result = JSON.parse(jsonMatch[0]);
        const exampleText = result.translation
            ? `${result.example} (${result.translation})`
            : result.example;

        document.getElementById('inputExample').value = exampleText;
        showToast('✨ Đã gợi ý câu ví dụ!', 'success');

    } catch (err) {
        console.error('AI error:', err);
        showToast(`❌ Lỗi AI: ${err.message}`, 'error');
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<span class="ai-icon">✨</span> AI gợi ý';
    }
}
