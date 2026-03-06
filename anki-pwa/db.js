/**
 * IndexedDB Storage Layer using idb (loaded via CDN in app.js)
 */

let _db = null;

async function getDB() {
    if (_db) return _db;
    _db = await idb.openDB('flashmind', 1, {
        upgrade(db) {
            // Decks store
            const deckStore = db.createObjectStore('decks', {
                keyPath: 'id',
                autoIncrement: true
            });
            deckStore.createIndex('createdAt', 'createdAt');

            // Cards store
            const cardStore = db.createObjectStore('cards', {
                keyPath: 'id',
                autoIncrement: true
            });
            cardStore.createIndex('deckId', 'deckId');
            cardStore.createIndex('due', 'due');
        }
    });
    return _db;
}

// ── Deck Operations ──────────────────────────────────────────
async function getAllDecks() {
    const db = await getDB();
    return db.getAll('decks');
}

async function addDeck({ name, description = '' }) {
    const db = await getDB();
    return db.add('decks', { name, description, createdAt: Date.now() });
}

async function updateDeck(deck) {
    const db = await getDB();
    return db.put('decks', deck);
}

async function deleteDeck(deckId) {
    const db = await getDB();
    const tx = db.transaction(['decks', 'cards'], 'readwrite');
    // Delete all cards in the deck
    const cards = await tx.objectStore('cards').index('deckId').getAllKeys(deckId);
    await Promise.all(cards.map(k => tx.objectStore('cards').delete(k)));
    await tx.objectStore('decks').delete(deckId);
    await tx.done;
}

// ── Card Operations ───────────────────────────────────────────
async function getCardsByDeck(deckId) {
    const db = await getDB();
    return db.getAllFromIndex('cards', 'deckId', deckId);
}

async function addCard({ deckId, front, back, tags = '' }) {
    const db = await getDB();
    return db.add('cards', {
        deckId,
        front,
        back,
        tags,
        due: Date.now(), // new cards are due immediately
        interval: 1,
        ease: 2.5,
        reps: 0,
        lapses: 0,
        lastReviewed: null,
        createdAt: Date.now()
    });
}

async function resetDeck(deckId) {
    const db = await getDB();
    const cards = await db.getAllFromIndex('cards', 'deckId', deckId);
    const tx = db.transaction('cards', 'readwrite');
    await Promise.all(cards.map(c => tx.objectStore('cards').put({
        ...c,
        due: Date.now(),
        interval: 1,
        ease: 2.5,
        reps: 0,
        lapses: 0,
        lastReviewed: null,
    })));
    await tx.done;
}

async function updateCard(card) {
    const db = await getDB();
    return db.put('cards', card);
}

async function deleteCard(cardId) {
    const db = await getDB();
    return db.delete('cards', cardId);
}

async function getAllCards() {
    const db = await getDB();
    return db.getAll('cards');
}

export {
    getAllDecks, addDeck, updateDeck, deleteDeck,
    getCardsByDeck, addCard, updateCard, deleteCard, getAllCards, resetDeck
};
