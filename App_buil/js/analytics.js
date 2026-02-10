// ========================================
// ANALYTICS MODULE
// ========================================

// Get overall statistics
function getOverallStats() {
    const vocabulary = getVocabulary();
    const groups = getGroups();

    const total = vocabulary.length;
    const learned = vocabulary.filter(w => w.learned).length;
    const dueToday = getWordsDueToday().length;

    // Calculate accuracy
    let totalCorrect = 0;
    let totalWrong = 0;
    vocabulary.forEach(w => {
        totalCorrect += w.correctCount || 0;
        totalWrong += w.wrongCount || 0;
    });
    const totalAttempts = totalCorrect + totalWrong;
    const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

    // Words by status
    const now = new Date();
    const newWords = vocabulary.filter(w => !w.lastReview).length;
    const learning = vocabulary.filter(w => w.lastReview && !w.learned).length;
    const mastered = learned;

    return {
        total,
        learned,
        dueToday,
        accuracy,
        newWords,
        learning,
        mastered,
        groupCount: groups.length
    };
}

// Get statistics by group
function getGroupStats() {
    const groups = getGroups();

    return groups.map(group => {
        const vocabulary = getVocabularyByGroup(group.id);
        const total = vocabulary.length;
        const learned = vocabulary.filter(w => w.learned).length;

        let totalCorrect = 0;
        let totalWrong = 0;
        vocabulary.forEach(w => {
            totalCorrect += w.correctCount || 0;
            totalWrong += w.wrongCount || 0;
        });
        const totalAttempts = totalCorrect + totalWrong;
        const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

        const dueToday = vocabulary.filter(w => {
            if (!w.nextReview) return true;
            return new Date(w.nextReview) <= new Date();
        }).length;

        return {
            ...group,
            total,
            learned,
            progress: total > 0 ? Math.round((learned / total) * 100) : 0,
            accuracy,
            dueToday
        };
    });
}

// Get learning streak (days of continuous learning)
function getLearningStreak() {
    const vocabulary = getVocabulary();
    const reviewDates = new Set();

    vocabulary.forEach(w => {
        if (w.lastReview) {
            const date = new Date(w.lastReview).toDateString();
            reviewDates.add(date);
        }
    });

    if (reviewDates.size === 0) return 0;

    // Sort dates and count streak
    const sortedDates = Array.from(reviewDates)
        .map(d => new Date(d))
        .sort((a, b) => b - a);

    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < sortedDates.length; i++) {
        const expectedDate = new Date(today);
        expectedDate.setDate(today.getDate() - i);
        expectedDate.setHours(0, 0, 0, 0);

        const actualDate = new Date(sortedDates[i]);
        actualDate.setHours(0, 0, 0, 0);

        if (actualDate.getTime() === expectedDate.getTime()) {
            streak++;
        } else {
            break;
        }
    }

    return streak;
}

// Get weekly activity data (last 7 days)
function getWeeklyActivity() {
    const vocabulary = getVocabulary();
    const now = new Date();
    const weekData = [];

    for (let i = 6; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        date.setHours(0, 0, 0, 0);

        const nextDate = new Date(date);
        nextDate.setDate(nextDate.getDate() + 1);

        // Count words reviewed on this day
        const reviewed = vocabulary.filter(w => {
            if (!w.lastReview) return false;
            const reviewDate = new Date(w.lastReview);
            return reviewDate >= date && reviewDate < nextDate;
        }).length;

        // Count new words added on this day
        const added = vocabulary.filter(w => {
            const createdDate = new Date(w.createdAt);
            return createdDate >= date && createdDate < nextDate;
        }).length;

        weekData.push({
            date: date.toLocaleDateString('vi-VN', { weekday: 'short' }),
            reviewed,
            added
        });
    }

    return weekData;
}

// Render analytics dashboard
function renderAnalytics() {
    const stats = getOverallStats();
    const groupStats = getGroupStats();
    const streak = getLearningStreak();
    const weeklyActivity = getWeeklyActivity();

    // Update overall stats
    document.getElementById('statTotal').textContent = stats.total;
    document.getElementById('statLearned').textContent = stats.learned;
    document.getElementById('statDueToday').textContent = stats.dueToday;
    document.getElementById('statAccuracy').textContent = stats.accuracy + '%';
    document.getElementById('statStreak').textContent = streak + ' ngày';

    // Update mastery progress
    const masteryPercent = stats.total > 0 ? Math.round((stats.mastered / stats.total) * 100) : 0;
    document.getElementById('masteryBar').style.width = masteryPercent + '%';
    document.getElementById('masteryText').textContent = masteryPercent + '%';

    // Render status distribution
    renderStatusChart(stats);

    // Render group progress
    renderGroupProgress(groupStats);

    // Render weekly activity
    renderWeeklyChart(weeklyActivity);
}

// Render status distribution chart (CSS-based)
function renderStatusChart(stats) {
    const container = document.getElementById('statusChart');
    if (!container) return;

    const total = stats.total || 1;
    const newPercent = (stats.newWords / total) * 100;
    const learningPercent = (stats.learning / total) * 100;
    const masteredPercent = (stats.mastered / total) * 100;

    container.innerHTML = `
        <div class="status-bar">
            <div class="status-segment new" style="width: ${newPercent}%" title="Mới: ${stats.newWords}"></div>
            <div class="status-segment learning" style="width: ${learningPercent}%" title="Đang học: ${stats.learning}"></div>
            <div class="status-segment mastered" style="width: ${masteredPercent}%" title="Đã thuộc: ${stats.mastered}"></div>
        </div>
        <div class="status-legend">
            <span class="legend-item"><span class="dot new"></span>Mới (${stats.newWords})</span>
            <span class="legend-item"><span class="dot learning"></span>Đang học (${stats.learning})</span>
            <span class="legend-item"><span class="dot mastered"></span>Đã thuộc (${stats.mastered})</span>
        </div>
    `;
}

// Render group progress bars
function renderGroupProgress(groupStats) {
    const container = document.getElementById('groupProgress');
    if (!container) return;

    container.innerHTML = groupStats.map(group => `
        <div class="group-progress-item">
            <div class="group-progress-header">
                <span class="group-color-dot" style="background: ${group.color}"></span>
                <span class="group-progress-name">${group.name}</span>
                <span class="group-progress-stat">${group.learned}/${group.total}</span>
            </div>
            <div class="group-progress-bar">
                <div class="group-progress-fill" style="width: ${group.progress}%; background: ${group.color}"></div>
            </div>
            <div class="group-progress-meta">
                <span>${group.progress}% hoàn thành</span>
                <span>${group.dueToday} cần ôn</span>
            </div>
        </div>
    `).join('');
}

// Render weekly activity chart
function renderWeeklyChart(weeklyActivity) {
    const container = document.getElementById('weeklyChart');
    if (!container) return;

    const maxValue = Math.max(...weeklyActivity.map(d => Math.max(d.reviewed, d.added)), 1);

    container.innerHTML = `
        <div class="chart-bars">
            ${weeklyActivity.map(day => `
                <div class="chart-day">
                    <div class="bar-container">
                        <div class="bar reviewed" style="height: ${(day.reviewed / maxValue) * 100}%" title="Ôn tập: ${day.reviewed}"></div>
                        <div class="bar added" style="height: ${(day.added / maxValue) * 100}%" title="Thêm mới: ${day.added}"></div>
                    </div>
                    <span class="day-label">${day.date}</span>
                </div>
            `).join('')}
        </div>
        <div class="chart-legend">
            <span class="legend-item"><span class="dot reviewed"></span>Ôn tập</span>
            <span class="legend-item"><span class="dot added"></span>Thêm mới</span>
        </div>
    `;
}

// Get upcoming review calendar (next 7 days)
function getReviewCalendar() {
    const vocabulary = getVocabulary();
    const calendar = [];
    const now = new Date();

    for (let i = 0; i < 7; i++) {
        const date = new Date(now);
        date.setDate(date.getDate() + i);
        date.setHours(0, 0, 0, 0);

        const nextDate = new Date(date);
        nextDate.setDate(nextDate.getDate() + 1);

        const dueWords = vocabulary.filter(w => {
            if (!w.nextReview) return i === 0; // New words due today
            const reviewDate = new Date(w.nextReview);
            reviewDate.setHours(0, 0, 0, 0);
            return reviewDate >= date && reviewDate < nextDate;
        });

        calendar.push({
            date: date,
            dayName: date.toLocaleDateString('vi-VN', { weekday: 'short' }),
            dayNum: date.getDate(),
            count: dueWords.length,
            isToday: i === 0
        });
    }

    return calendar;
}

// Render review calendar
function renderReviewCalendar() {
    const container = document.getElementById('reviewCalendar');
    if (!container) return;

    const calendar = getReviewCalendar();

    container.innerHTML = calendar.map(day => `
        <div class="calendar-day ${day.isToday ? 'today' : ''} ${day.count > 0 ? 'has-reviews' : ''}">
            <span class="day-name">${day.dayName}</span>
            <span class="day-num">${day.dayNum}</span>
            ${day.count > 0 ? `<span class="day-count">${day.count}</span>` : ''}
        </div>
    `).join('');
}
