// ========================================
// BACKUP & EXPORT MODULE
// ========================================

// Export all data to JSON
function exportToJSON() {
    const exportData = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        vocabulary: getVocabulary(),
        groups: getGroups()
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `chinese-vocab-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();

    URL.revokeObjectURL(url);

    showToast('✅ Đã xuất dữ liệu sang JSON!', 'success');
}

// Export to Excel format
function exportToExcel() {
    const vocabulary = getVocabulary();
    const groups = getGroups();

    if (vocabulary.length === 0) {
        showToast('❌ Không có từ vựng để xuất!', 'error');
        return;
    }

    // Create vocabulary worksheet data
    const vocabData = [
        ['Chữ Hán', 'Pinyin', 'Nghĩa', 'Ví dụ', 'Nhóm', 'Đã học', 'Số lần đúng', 'Số lần sai', 'Ngày ôn sau']
    ];

    vocabulary.forEach(word => {
        const group = groups.find(g => g.id === (word.groupId || 'default'));
        vocabData.push([
            word.chinese,
            word.pinyin,
            word.meaning,
            word.example || '',
            group ? group.name : 'Chưa phân loại',
            word.learned ? 'Có' : 'Không',
            word.correctCount || 0,
            word.wrongCount || 0,
            word.nextReview ? new Date(word.nextReview).toLocaleDateString('vi-VN') : ''
        ]);
    });

    // Create workbook
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(vocabData);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Vocabulary');

    // Export
    XLSX.writeFile(wb, `chinese-vocab-export-${new Date().toISOString().slice(0, 10)}.xlsx`);

    showToast('✅ Đã xuất dữ liệu sang Excel!', 'success');
}

// Import JSON file
function importJSONFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const importData = JSON.parse(e.target.value);

            // Validate data structure
            if (!importData.vocabulary || !importData.groups) {
                throw new Error('Invalid backup file format');
            }

            // Show preview
            displayImportPreview(importData);
        } catch (error) {
            showToast('❌ File không hợp lệ!', 'error');
            console.error('Import error:', error);
        }
    };
    reader.readAsText(file);
}

// Display import preview
function displayImportPreview(importData) {
    const previewDiv = document.getElementById('importDataPreview');
    if (!previewDiv) return;

    const vocabCount = importData.vocabulary.length;
    const groupCount = importData.groups.length;

    previewDiv.innerHTML = `
        <div class="preview-summary">
            <p><strong>📊 Dữ liệu trong file:</strong></p>
            <ul>
                <li>📚 Từ vựng: <strong>${vocabCount}</strong></li>
                <li>📁 Nhóm: <strong>${groupCount}</strong></li>
                <li>📅 Ngày xuất: ${new Date(importData.exportDate).toLocaleString('vi-VN')}</li>
            </ul>
        </div>
    `;

    document.getElementById('importPreviewSection').style.display = 'block';

    // Store import data temporarily
    window.pendingImportData = importData;
}

// Confirm import with merge option
function confirmImportData(mergeMode = 'replace') {
    if (!window.pendingImportData) {
        showToast('❌ Không có dữ liệu để import!', 'error');
        return;
    }

    const importData = window.pendingImportData;

    if (mergeMode === 'replace') {
        // Replace all data
        if (!confirm('⚠️ Thao tác này sẽ XÓA HẾT dữ liệu hiện tại! Tiếp tục?')) {
            return;
        }

        saveGroupsToStorage(importData.groups);
        saveVocabularyToStorage(importData.vocabulary);
    } else {
        // Merge data
        const currentGroups = getGroups();
        const currentVocab = getVocabulary();

        // Merge groups (avoid duplicates)
        const mergedGroups = [...currentGroups];
        importData.groups.forEach(impGroup => {
            if (!mergedGroups.find(g => g.id === impGroup.id)) {
                mergedGroups.push(impGroup);
            }
        });

        // Merge vocabulary (avoid duplicates by id)
        const mergedVocab = [...currentVocab];
        importData.vocabulary.forEach(impWord => {
            const existing = mergedVocab.findIndex(w => w.id === impWord.id);
            if (existing >= 0) {
                // Update existing word
                mergedVocab[existing] = impWord;
            } else {
                // Add new word
                mergedVocab.push(impWord);
            }
        });

        saveGroupsToStorage(mergedGroups);
        saveVocabularyToStorage(mergedVocab);
    }

    showToast('✅ Đã khôi phục dữ liệu thành công!', 'success');

    // Cleanup
    window.pendingImportData = null;
    document.getElementById('importPreviewSection').style.display = 'none';
    document.getElementById('jsonFileInput').value = '';

    // Refresh UI
    updateHomeStats();
    renderGroupsList();
}

// Cancel import
function cancelBackupImport() {
    window.pendingImportData = null;
    document.getElementById('importPreviewSection').style.display = 'none';
    document.getElementById('jsonFileInput').value = '';
    showToast('Đã hủy import', 'info');
}
