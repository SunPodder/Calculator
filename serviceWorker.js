const staticCalculator = "calculator-v1"
const assets = [
  "/",
  "index.html",
  "assets/style.css",
  "assets/script.js",
  "assets/icon.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCalculator).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
