/**
 * The name of the static cache used for the Progressive Web App (PWA).
 * @type {string}
 */
const staticCacheName = "pwa";

/**
 * Event listener for the 'install' event.
 * It is triggered when the service worker is being installed.
 * @param {Event} event - The 'install' event object.
 */
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
        return cache.addAll(["/"]);
    })
  );
});

/**
 * Event listener for the 'fetch' event.
 * It is triggered when a resource is being fetched by the page.
 * @param {FetchEvent} event - The 'fetch' event object.
 */
self.addEventListener("fetch", function (event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
    })
  );
});
