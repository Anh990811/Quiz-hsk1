// ========================================
// EXCEL IMPORT MODULE
// ========================================

let pendingImport = [];

// Handle file selection
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    processExcelFile(file);
}

// Process Excel file
function processExcelFile(file) {
    // Check file type
    const validTypes = [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel'
    ];

    if (!validTypes.includes(file.type) && !file.name.match(/\.(xlsx|xls)$/i)) {
        showToast('Vui lòng chọn file Excel (.xlsx hoặc .xls)!', 'error');
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Get first sheet
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];

            // Convert to JSON
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            // Parse data (skip header if present)
            parseImportData(jsonData);
        } catch (error) {
            console.error('Error parsing Excel:', error);
            showToast('Lỗi đọc file Excel!', 'error');
        }
    };

    reader.onerror = function () {
        showToast('Lỗi đọc file!', 'error');
    };

    reader.readAsArrayBuffer(file);
}

// Parse imported data
function parseImportData(jsonData) {
    pendingImport = [];

    // Check if first row is header (contains common header words)
    const headerKeywords = ['chữ', 'hán', 'chinese', 'pinyin', 'nghĩa', 'meaning', '汉字', '拼音'];
    let startRow = 0;

    if (jsonData.length > 0) {
        const firstRow = jsonData[0].map(cell => String(cell || '').toLowerCase());
        const isHeader = headerKeywords.some(keyword =>
            firstRow.some(cell => cell.includes(keyword))
        );
        if (isHeader) startRow = 1;
    }

    // Parse each row
    for (let i = startRow; i < jsonData.length; i++) {
        const row = jsonData[i];

        if (!row || row.length < 3) continue;

        const chinese = String(row[0] || '').trim();
        const pinyin = String(row[1] || '').trim();
        const meaning = String(row[2] || '').trim();
        const example = row[3] ? String(row[3]).trim() : '';

        // Validate required fields
        if (chinese && pinyin && meaning) {
            pendingImport.push({
                chinese,
                pinyin,
                meaning,
                example
            });
        }
    }

    if (pendingImport.length === 0) {
        showToast('Không tìm thấy dữ liệu hợp lệ trong file!', 'error');
        return;
    }

    // Show preview
    showImportPreview();
}

// Show import preview
function showImportPreview() {
    const previewList = document.getElementById('previewList');

    previewList.innerHTML = pendingImport.slice(0, 20).map(word => `
        <div class="preview-item">
            <span class="preview-chinese">${word.chinese}</span>
            <span class="preview-pinyin">${word.pinyin}</span>
            <span class="preview-meaning">${word.meaning}</span>
        </div>
    `).join('');

    if (pendingImport.length > 20) {
        previewList.innerHTML += `
            <div class="preview-item" style="color: var(--text-muted); font-style: italic;">
                ... và ${pendingImport.length - 20} từ khác
            </div>
        `;
    }

    document.getElementById('importCount').textContent = pendingImport.length;

    // Show preview section, hide dropzone
    document.getElementById('dropzone').style.display = 'none';
    document.getElementById('importPreview').style.display = 'block';
}

// Cancel import
function cancelImport() {
    pendingImport = [];
    document.getElementById('dropzone').style.display = 'block';
    document.getElementById('importPreview').style.display = 'none';
    document.getElementById('fileInput').value = '';
}

// Confirm import
function confirmImport() {
    if (pendingImport.length === 0) return;

    addVocabularyBulk(pendingImport);

    showToast(`Đã import ${pendingImport.length} từ vựng!`, 'success');

    // Reset
    cancelImport();

    // Navigate to vocabulary
    navigateTo('vocabulary');
}

// Drag and drop handling
const dropzone = document.getElementById('dropzone');

if (dropzone) {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, unhighlight, false);
    });

    dropzone.addEventListener('drop', handleDrop, false);
}

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight() {
    dropzone.classList.add('dragover');
}

function unhighlight() {
    dropzone.classList.remove('dragover');
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;

    if (files.length > 0) {
        processExcelFile(files[0]);
    }
}
