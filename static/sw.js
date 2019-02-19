importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/6e345f4b76b42ac73774.js",
    "revision": "c5aba36d063ca4283b25490322313f9d"
  },
  {
    "url": "/_nuxt/8178a09a8862ab6a5201.js",
    "revision": "6cea697c330429e17958a1a28d4b0f5c"
  },
  {
    "url": "/_nuxt/9482e3624f062de96047.js",
    "revision": "bf5f7560ff9470d4beb0ee0999f131e9"
  },
  {
    "url": "/_nuxt/d5bae042614722abc28f.js",
    "revision": "6b9ed101189ef7526a6d97284bf470bb"
  },
  {
    "url": "/_nuxt/e5aabd34ffc084d25936.js",
    "revision": "21d9ab49a85f51773913598baf388ee2"
  },
  {
    "url": "/_nuxt/f3bedddb0a2c130f72be.js",
    "revision": "f26341d785829a432e432a2cc1690b2b"
  }
], {
  "cacheId": "online-torrent",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
