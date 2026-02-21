// Service Worker for 学中文 PWA
// Cho phép app hoạt động offline trên iPhone

const CACHE_NAME = 'xuzhongwen-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './js/app.js',
  './js/vocabulary.js',
  './js/groups.js',
  './js/srs.js',
  './js/analytics.js',
  './js/speech.js',
  './js/flashcard.js',
  './js/quiz.js',
  './js/excel-import.js',
  './js/excel-export.js',
  './js/dictionary.js',
  './js/ai.js',
  // Google Fonts (cache khi có internet lần đầu)
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap',
  // SheetJS
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
];

// Install: Cache tất cả assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Cache local assets bắt buộc
      const localAssets = ASSETS_TO_CACHE.filter(url => url.startsWith('./') || url === './');
      return cache.addAll(localAssets);
    }).then(() => self.skipWaiting())
  );
});

// Activate: Xóa cache cũ
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Cache-first với fallback network
self.addEventListener('fetch', (event) => {
  // Bỏ qua các request không phải GET
  if (event.request.method !== 'GET') return;

  // Bỏ qua API calls (Gemini AI, speech synthesis)
  const url = new URL(event.request.url);
  if (url.hostname.includes('generativelanguage.googleapis.com') ||
      url.hostname.includes('translate.googleapis.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Cache hit - trả về từ cache, đồng thời cập nhật background
        const networkFetch = fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          }
          return networkResponse;
        }).catch(() => {}); // Bỏ qua lỗi mạng khi background update
        
        return cachedResponse;
      }

      // Cache miss - fetch từ network và cache lại
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
          return networkResponse;
        }
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        return networkResponse;
      }).catch(() => {
        // Offline và không có cache: trả về trang chủ
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
