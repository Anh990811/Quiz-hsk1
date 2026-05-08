const DEFAULT_DATA = {
    groups: [
        {
            id: 'g1',
            name: 'HSK 2 - Bài 1: Đi Bắc Kinh du lịch tháng 9 là tốt nhất',
            sentences: [
                { 
                    id: 's1', 
                    vi: 'du lịch', 
                    zh: '旅游', 
                    pinyin: 'lǚyóu',
                    meaningDetail: 'Du lịch (đi đến một nơi khác để tham quan, nghỉ ngơi)',
                    exZh: '我喜欢去不同的地方旅游。',
                    exVi: 'Wǒ xǐhuān qù bùtóng de dìfāng lǚyóu. - Tôi thích đi du lịch đến những nơi khác nhau.',
                    structure: '去 + Địa điểm + 旅游',
                    structVi: 'Đi du lịch đến một nơi nào đó',
                    grammar: 'Động từ "旅游" (du lịch) là động từ bất cập vật, nên không thể trực tiếp mang theo tân ngữ chỉ địa điểm phía sau. Không được nói: 旅游中国. Phải nói: 去中国旅游.',
                    note: 'Khi "旅游" là động từ, nó thường không mang tân ngữ trực tiếp chỉ địa điểm, mà thường dùng "去...旅游" hoặc "在...旅游". Nó cũng có thể dùng như danh từ (ví dụ: "一次愉快的旅游" - một chuyến du lịch vui vẻ).'
                },
                { id: 's2', vi: 'Bắc Kinh tháng 9 là tốt nhất.', zh: '九月的北京最好。', pinyin: 'jiǔ yuè de Běijīng zuì hǎo.' },
                { id: 's3', vi: 'Tại sao?', zh: '为什么？', pinyin: 'wèishénme?' }
            ]
        }
    ]
};

class DataManager {
    constructor() {
        this.data = this.loadData();
    }

    loadData() {
        const saved = localStorage.getItem('hanyu_mastery_data');
        let data = DEFAULT_DATA;
        if (saved) {
            try {
                data = JSON.parse(saved);
            } catch (e) {
                console.error('Lỗi khi tải dữ liệu:', e);
            }
        }
        
        // Migrate old data
        if (!data.classes) {
            data.classes = [
                { id: 'c_default', name: 'Chưa phân loại' }
            ];
        }
        if (data.groups) {
            data.groups.forEach(g => {
                if (!g.classId) g.classId = 'c_default';
            });
        }
        return data;
    }

    saveData() {
        localStorage.setItem('hanyu_mastery_data', JSON.stringify(this.data));
    }

    // --- Classes Management ---
    getClasses() {
        return this.data.classes || [];
    }

    getClass(id) {
        return this.getClasses().find(c => c.id === id);
    }

    addClass(name) {
        if (!this.data.classes) this.data.classes = [];
        const newClass = {
            id: 'c' + Date.now(),
            name: name
        };
        this.data.classes.push(newClass);
        this.saveData();
        return newClass;
    }

    updateClass(id, newName) {
        const cls = this.getClass(id);
        if (cls) {
            cls.name = newName;
            this.saveData();
        }
    }

    // --- Groups Management ---
    getGroups() {
        return this.data.groups || [];
    }

    getGroup(id) {
        return this.getGroups().find(g => g.id === id);
    }

    addGroup(name, classId) {
        const newGroup = {
            id: 'g' + Date.now(),
            classId: classId || (this.getClasses()[0] ? this.getClasses()[0].id : 'c_default'),
            name: name,
            sentences: []
        };
        this.data.groups.push(newGroup);
        this.saveData();
        return newGroup;
    }

    updateGroup(id, newName, newClassId) {
        const group = this.getGroup(id);
        if (group) {
            if (newName !== undefined) group.name = newName;
            if (newClassId !== undefined) group.classId = newClassId;
            this.saveData();
        }
    }

    deleteGroup(id) {
        this.data.groups = this.data.groups.filter(g => g.id !== id);
        this.saveData();
    }

    // --- Sentences Management ---
    addSentence(groupId, data) {
        const group = this.getGroup(groupId);
        if (group) {
            group.sentences.push({
                id: 's' + Date.now(),
                ...data
            });
            this.saveData();
        }
    }

    deleteSentence(groupId, sentenceId) {
        const group = this.getGroup(groupId);
        if (group) {
            group.sentences = group.sentences.filter(s => s.id !== sentenceId);
            this.saveData();
        }
    }
}

// Khởi tạo toàn cục
window.appData = new DataManager();
