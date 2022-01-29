const PRECACHE = 'kms-precache-v1';
const RUNTIME = 'runtime';

//List of local resources we want to be cached.
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/assets/js/script.js'
];

self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(PRECACHE)
      .then((cache) => cache.addAll(urlsToCache))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', event => {

  const currentCaches = [PRECACHE, RUNTIME];

  event.waitUntil(
    caches.keys()
    .then(cacheNames => {
        return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    })
    .then(cachesToDelete => {
      return Promise.all(
        cachesToDelete.map(cacheToDelete => {
            return caches.delete(cacheToDelete);
        })
      );
    })
    .then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
    // Skip cross-origin requests, like those for Google Analytics.
    if (event.request.url.startsWith(self.location.origin)) {
      event.respondWith(
        caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
  
          return caches.open(RUNTIME).then(cache => {
            return fetch(event.request).then(response => {
              // Put a copy of the response in the runtime cache.
              return cache.put(event.request, response.clone()).then(() => {
                return response;
              });
            });
          });
        })
      );
    }
  });