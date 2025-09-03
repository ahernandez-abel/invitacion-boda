self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("boda-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "imagen/JohanJairony.jpeg",
        "manifest.json",
        "icono.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
