const CACHE_NAME = 'hanyu-pwa-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './data.js',
  './dialogues.js',
  './vocab.js',
  './app.js',
  './shadowing.js',
  './dialogue.js',
  './writing.js',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/hanzi-writer@3.5/dist/hanzi-writer.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Serif+SC:wght@400;700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll(ASSETS_TO_CACHE);
    }).catch(err => console.error('Cache addAll failed:', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => {
          return name !== CACHE_NAME;
        }).map(name => {
          return caches.delete(name);
        })
      );
    })
  );
  self.clients.claim();
});

// CacheFirst Strategy: Try cache first, if missing fetch from network and cache it
self.addEventListener('fetch', event => {
  // Bỏ qua các request không phải HTTP/HTTPS (ví dụ extension chrome-extension://)
  if (!event.request.url.startsWith('http')) return;

  // Bỏ qua các request POST, PUT, DELETE...
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then(response => {
        // Chỉ lưu cache những response hợp lệ
        if (!response || response.status !== 200 || (response.type !== 'basic' && response.type !== 'cors')) {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(err => {
        console.error('Fetch error (offline?):', err);
      });
    })
  );
});
