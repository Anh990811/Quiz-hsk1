// ========================================
// EXCEL EXPORT
// ========================================

function exportToExcel() {
    const vocabulary = getVocabulary();
    const groups = getGroups();

    if (vocabulary.length === 0) {
        showToast('Chưa có dữ liệu để xuất!', 'info');
        return;
    }

    // Format data for export
    const exportData = vocabulary.map(word => {
        const group = groups.find(g => g.id === (word.groupId || 'default'));
        return {
            'Chữ Hán': word.chinese,
            'Pinyin': word.pinyin,
            'Nghĩa': word.meaning,
            'Ví dụ': word.example || '',
            'Nhóm': group ? group.name : 'Chưa phân loại',
            'Đã thuộc': word.learned ? 'Có' : 'Không',
            'Ngày tạo': new Date(word.createdAt).toLocaleDateString('vi-VN'),
            'Lần ôn cuối': word.lastReview ? new Date(word.lastReview).toLocaleDateString('vi-VN') : 'Chưa ôn',
            'Ngày ôn tiếp': word.nextReview ? new Date(word.nextReview).toLocaleDateString('vi-VN') : 'Chưa có'
        };
    });

    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(exportData);

    // Auto-adjust column width (approximate)
    const colWidths = [
        { wch: 15 }, // Chinese
        { wch: 20 }, // Pinyin
        { wch: 30 }, // Meaning
        { wch: 40 }, // Example
        { wch: 20 }, // Group
        { wch: 10 }, // Learned
        { wch: 15 }, // Created
        { wch: 15 }, // Last Review
        { wch: 15 }  // Next Review
    ];
    ws['!cols'] = colWidths;

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, "Vocabulary");

    // Save file
    const dateStr = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(wb, `TuVungTiengTrung_${dateStr}.xlsx`);

    showToast('Đã xuất file Excel thành công!', 'success');
}
