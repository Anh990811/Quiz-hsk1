// ========================================
// GROUPS MANAGEMENT
// ========================================

const GROUPS_STORAGE_KEY = 'chinese_vocabulary_groups';

// Default group
const DEFAULT_GROUP = {
    id: 'default',
    name: 'Chưa phân loại',
    description: 'Từ vựng chưa được phân vào nhóm',
    color: '#6366f1',
    createdAt: new Date().toISOString()
};

// Predefined colors for groups
const GROUP_COLORS = [
    '#6366f1', // Indigo
    '#8b5cf6', // Purple
    '#ec4899', // Pink
    '#ef4444', // Red
    '#f97316', // Orange
    '#eab308', // Yellow
    '#22c55e', // Green
    '#14b8a6', // Teal
    '#06b6d4', // Cyan
    '#3b82f6', // Blue
];

// Get all groups from localStorage
function getGroups() {
    const data = localStorage.getItem(GROUPS_STORAGE_KEY);
    let groups = data ? JSON.parse(data) : [];

    // Ensure default group exists
    if (!groups.find(g => g.id === 'default')) {
        groups.unshift(DEFAULT_GROUP);
        saveGroupsToStorage(groups);
    }

    return groups;
}

// Save groups to localStorage
function saveGroupsToStorage(groups) {
    localStorage.setItem(GROUPS_STORAGE_KEY, JSON.stringify(groups));
}

// Create a new group
function createGroup(name, description = '', color = null) {
    if (!name || !name.trim()) {
        showToast('Vui lòng nhập tên nhóm!', 'error');
        return null;
    }

    const groups = getGroups();

    // Check duplicate name
    if (groups.find(g => g.name.toLowerCase() === name.trim().toLowerCase())) {
        showToast('Tên nhóm đã tồn tại!', 'error');
        return null;
    }

    const newGroup = {
        id: generateId(),
        name: name.trim(),
        description: description.trim(),
        color: color || GROUP_COLORS[Math.floor(Math.random() * GROUP_COLORS.length)],
        createdAt: new Date().toISOString()
    };

    groups.push(newGroup);
    saveGroupsToStorage(groups);

    showToast('Đã tạo nhóm mới!', 'success');
    return newGroup;
}

// Update a group
function updateGroup(id, name, description, color) {
    if (id === 'default') {
        showToast('Không thể sửa nhóm mặc định!', 'error');
        return false;
    }

    let groups = getGroups();
    groups = groups.map(g => {
        if (g.id === id) {
            return {
                ...g,
                name: name.trim(),
                description: description.trim(),
                color: color
            };
        }
        return g;
    });

    saveGroupsToStorage(groups);
    showToast('Đã cập nhật nhóm!', 'success');
    return true;
}

// Delete a group (move words to default)
function deleteGroup(id) {
    if (id === 'default') {
        showToast('Không thể xóa nhóm mặc định!', 'error');
        return false;
    }

    if (!confirm('Xóa nhóm này? Các từ vựng sẽ được chuyển về "Chưa phân loại".')) {
        return false;
    }

    // Move words to default group
    let vocabulary = getVocabulary();
    vocabulary = vocabulary.map(v => {
        if (v.groupId === id) {
            return { ...v, groupId: 'default' };
        }
        return v;
    });
    saveVocabularyToStorage(vocabulary);

    // Remove group
    let groups = getGroups();
    groups = groups.filter(g => g.id !== id);
    saveGroupsToStorage(groups);

    showToast('Đã xóa nhóm!', 'success');
    renderGroupsList();
    return true;
}

// Get group by ID
function getGroupById(id) {
    const groups = getGroups();
    return groups.find(g => g.id === id) || DEFAULT_GROUP;
}

// Get vocabulary count by group
function getGroupVocabCount(groupId) {
    const vocabulary = getVocabulary();
    return vocabulary.filter(v => (v.groupId || 'default') === groupId).length;
}

// Get learned count by group
function getGroupLearnedCount(groupId) {
    const vocabulary = getVocabulary();
    return vocabulary.filter(v => (v.groupId || 'default') === groupId && v.learned).length;
}

// Current selected group for filtering
let currentGroupFilter = 'all';

// Set group filter
function setGroupFilter(groupId) {
    currentGroupFilter = groupId;
    renderVocabularyList();

    // Update UI
    document.querySelectorAll('.group-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.groupId === groupId);
    });
}

// Render groups list
function renderGroupsList() {
    const groupsContainer = document.getElementById('groupsList');
    if (!groupsContainer) return;

    const groups = getGroups();

    groupsContainer.innerHTML = groups.map(group => {
        const count = getGroupVocabCount(group.id);
        const learnedCount = getGroupLearnedCount(group.id);
        const progress = count > 0 ? Math.round((learnedCount / count) * 100) : 0;

        return `
            <div class="group-card" data-id="${group.id}">
                <div class="group-color" style="background: ${group.color}"></div>
                <div class="group-info">
                    <h4 class="group-name">${group.name}</h4>
                    <p class="group-desc">${group.description || 'Không có mô tả'}</p>
                    <div class="group-stats">
                        <span>${count} từ</span>
                        <span class="group-progress">${progress}% đã thuộc</span>
                    </div>
                </div>
                <div class="group-actions">
                    ${group.id !== 'default' ? `
                        <button onclick="openEditGroupModal('${group.id}')" title="Sửa">✏️</button>
                        <button onclick="deleteGroup('${group.id}')" title="Xóa">🗑️</button>
                    ` : ''}
                    <button onclick="navigateToGroupVocab('${group.id}')" title="Xem từ vựng">📚</button>
                </div>
            </div>
        `;
    }).join('');
}

// Navigate to vocabulary with group filter
function navigateToGroupVocab(groupId) {
    setGroupFilter(groupId);
    navigateTo('vocabulary');
}

// Open modal to add group
function openAddGroupModal() {
    document.getElementById('groupModalTitle').textContent = 'Tạo nhóm mới';
    document.getElementById('groupForm').reset();
    document.getElementById('editGroupId').value = '';
    document.getElementById('groupColorInput').value = GROUP_COLORS[0];
    renderColorPicker();
    document.getElementById('groupModal').classList.add('active');
}

// Open modal to edit group
function openEditGroupModal(id) {
    const group = getGroupById(id);
    if (!group || id === 'default') return;

    document.getElementById('groupModalTitle').textContent = 'Sửa nhóm';
    document.getElementById('editGroupId').value = group.id;
    document.getElementById('groupNameInput').value = group.name;
    document.getElementById('groupDescInput').value = group.description || '';
    document.getElementById('groupColorInput').value = group.color;
    renderColorPicker(group.color);
    document.getElementById('groupModal').classList.add('active');
}

// Close group modal
function closeGroupModal() {
    document.getElementById('groupModal').classList.remove('active');
}

// Render color picker
function renderColorPicker(selectedColor = GROUP_COLORS[0]) {
    const picker = document.getElementById('colorPicker');
    if (!picker) return;

    picker.innerHTML = GROUP_COLORS.map(color => `
        <button type="button" 
                class="color-option ${color === selectedColor ? 'selected' : ''}" 
                style="background: ${color}"
                onclick="selectGroupColor('${color}')">
        </button>
    `).join('');
}

// Select color
function selectGroupColor(color) {
    document.getElementById('groupColorInput').value = color;
    document.querySelectorAll('.color-option').forEach(btn => {
        btn.classList.toggle('selected', btn.style.background === color);
    });
}

// Save group (add or update)
function saveGroup(event) {
    event.preventDefault();

    const id = document.getElementById('editGroupId').value;
    const name = document.getElementById('groupNameInput').value;
    const description = document.getElementById('groupDescInput').value;
    const color = document.getElementById('groupColorInput').value;

    if (id) {
        updateGroup(id, name, description, color);
    } else {
        createGroup(name, description, color);
    }

    closeGroupModal();
    renderGroupsList();
    updateHomeStats();
}

// Render group filter buttons
function renderGroupFilter() {
    const container = document.getElementById('groupFilterContainer');
    if (!container) return;

    const groups = getGroups();

    container.innerHTML = `
        <button class="group-filter-btn ${currentGroupFilter === 'all' ? 'active' : ''}" 
                data-group-id="all" onclick="setGroupFilter('all')">
            Tất cả
        </button>
        ${groups.map(group => `
            <button class="group-filter-btn ${currentGroupFilter === group.id ? 'active' : ''}" 
                    data-group-id="${group.id}" onclick="setGroupFilter('${group.id}')"
                    style="--group-color: ${group.color}">
                <span class="filter-dot" style="background: ${group.color}"></span>
                ${group.name}
            </button>
        `).join('')}
    `;
}

// Get group dropdown options HTML
function getGroupOptionsHTML(selectedId = 'default') {
    const groups = getGroups();
    return groups.map(g => `
        <option value="${g.id}" ${g.id === selectedId ? 'selected' : ''}>${g.name}</option>
    `).join('');
}
