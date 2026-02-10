// ========================================
// WRITING PRACTICE MODULE
// ========================================

let writingCanvas = null;
let writingCtx = null;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let strokes = [];
let currentStroke = [];
let writingMode = false;

// Initialize writing practice canvas
function initWritingCanvas() {
    writingCanvas = document.getElementById('writingCanvas');
    if (!writingCanvas) return;

    writingCtx = writingCanvas.getContext('2d');

    // Set canvas size
    const container = writingCanvas.parentElement;
    writingCanvas.width = container.clientWidth;
    writingCanvas.height = container.clientWidth; // Square canvas

    // Configure drawing style
    writingCtx.strokeStyle = '#1a1a1a';
    writingCtx.lineWidth = 3;
    writingCtx.lineCap = 'round';
    writingCtx.lineJoin = 'round';

    // Draw grid
    drawWritingGrid();

    // Add event listeners
    addDrawingEventListeners();
}

// Draw grid for writing practice
function drawWritingGrid() {
    if (!writingCtx || !writingCanvas) return;

    const width = writingCanvas.width;
    const height = writingCanvas.height;

    writingCtx.save();
    writingCtx.strokeStyle = '#e0e0e0';
    writingCtx.lineWidth = 1;

    // Draw center cross
    writingCtx.beginPath();
    writingCtx.moveTo(width / 2, 0);
    writingCtx.lineTo(width / 2, height);
    writingCtx.moveTo(0, height / 2);
    writingCtx.lineTo(width, height / 2);
    writingCtx.stroke();

    // Draw border
    writingCtx.strokeStyle = '#6366f1';
    writingCtx.lineWidth = 2;
    writingCtx.strokeRect(0, 0, width, height);

    writingCtx.restore();
}

// Add event listeners for drawing
function addDrawingEventListeners() {
    if (!writingCanvas) return;

    // Mouse events
    writingCanvas.addEventListener('mousedown', startDrawing);
    writingCanvas.addEventListener('mousemove', draw);
    writingCanvas.addEventListener('mouseup', stopDrawing);
    writingCanvas.addEventListener('mouseout', stopDrawing);

    // Touch events
    writingCanvas.addEventListener('touchstart', handleTouchStart);
    writingCanvas.addEventListener('touchmove', handleTouchMove);
    writingCanvas.addEventListener('touchend', stopDrawing);
}

// Get coordinates relative to canvas
function getCanvasCoordinates(e) {
    const rect = writingCanvas.getBoundingClientRect();
    const scaleX = writingCanvas.width / rect.width;
    const scaleY = writingCanvas.height / rect.height;

    return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
    };
}

// Start drawing
function startDrawing(e) {
    isDrawing = true;
    const coords = getCanvasCoordinates(e);
    lastX = coords.x;
    lastY = coords.y;
    currentStroke = [{ x: lastX, y: lastY }];
}

// Draw on canvas
function draw(e) {
    if (!isDrawing) return;

    const coords = getCanvasCoordinates(e);

    writingCtx.beginPath();
    writingCtx.moveTo(lastX, lastY);
    writingCtx.lineTo(coords.x, coords.y);
    writingCtx.stroke();

    currentStroke.push({ x: coords.x, y: coords.y });

    lastX = coords.x;
    lastY = coords.y;
}

// Stop drawing
function stopDrawing() {
    if (isDrawing && currentStroke.length > 0) {
        strokes.push([...currentStroke]);
        currentStroke = [];
    }
    isDrawing = false;
}

// Handle touch start
function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    writingCanvas.dispatchEvent(mouseEvent);
}

// Handle touch move
function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    writingCanvas.dispatchEvent(mouseEvent);
}

// Clear canvas
function clearWritingCanvas() {
    if (!writingCanvas || !writingCtx) return;

    writingCtx.clearRect(0, 0, writingCanvas.width, writingCanvas.height);
    drawWritingGrid();
    strokes = [];
    currentStroke = [];

    // Hide overlay if showing
    hideCharacterOverlay();
}

// Undo last stroke
function undoLastStroke() {
    if (strokes.length === 0) return;

    strokes.pop();
    redrawCanvas();
}

// Redraw canvas from strokes
function redrawCanvas() {
    if (!writingCanvas || !writingCtx) return;

    writingCtx.clearRect(0, 0, writingCanvas.width, writingCanvas.height);
    drawWritingGrid();

    writingCtx.strokeStyle = '#1a1a1a';
    writingCtx.lineWidth = 3;
    writingCtx.lineCap = 'round';
    writingCtx.lineJoin = 'round';

    strokes.forEach(stroke => {
        if (stroke.length === 0) return;

        writingCtx.beginPath();
        writingCtx.moveTo(stroke[0].x, stroke[0].y);

        for (let i = 1; i < stroke.length; i++) {
            writingCtx.lineTo(stroke[i].x, stroke[i].y);
        }

        writingCtx.stroke();
    });
}

// Show character overlay for comparison
function showCharacterOverlay() {
    const overlay = document.getElementById('characterOverlay');
    if (!overlay) return;

    const currentWord = flashcardWords[currentFlashcardIndex];
    if (!currentWord) return;

    const overlayText = document.getElementById('overlayCharacter');
    if (overlayText) {
        overlayText.textContent = currentWord.chinese;
    }

    overlay.style.display = 'flex';
}

// Hide character overlay
function hideCharacterOverlay() {
    const overlay = document.getElementById('characterOverlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

// Toggle writing mode
function toggleWritingMode() {
    writingMode = !writingMode;

    const flashcardElement = document.getElementById('flashcard');
    const writingContainer = document.getElementById('writingContainer');
    const toggleBtn = document.getElementById('toggleWritingBtn');

    if (writingMode) {
        // Show writing canvas
        flashcardElement.style.display = 'none';
        writingContainer.style.display = 'block';
        if (toggleBtn) toggleBtn.textContent = '🎴 Xem thẻ';

        // Initialize canvas if not already done
        if (!writingCanvas) {
            initWritingCanvas();
        } else {
            clearWritingCanvas();
        }
    } else {
        // Show flashcard
        flashcardElement.style.display = 'block';
        writingContainer.style.display = 'none';
        if (toggleBtn) toggleBtn.textContent = '✍️ Luyện viết';
    }
}

// Resize canvas when window resizes
window.addEventListener('resize', () => {
    if (writingCanvas && writingMode) {
        const container = writingCanvas.parentElement;
        const savedStrokes = [...strokes];

        writingCanvas.width = container.clientWidth;
        writingCanvas.height = container.clientWidth;

        strokes = savedStrokes;
        redrawCanvas();
    }
});
