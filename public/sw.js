if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js")
      let s = Promise.resolve()
      return (
        n[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const n = document.createElement("script")
              ;(n.src = e), document.head.appendChild(n), (n.onload = s)
            } else importScripts(e), s()
          })),
        s.then(() => {
          if (!n[e]) throw new Error(`Module ${e} didn’t register its module`)
          return n[e]
        })
      )
    },
    s = (s, n) => {
      Promise.all(s.map(e)).then((e) => n(1 === e.length ? e[0] : e))
    },
    n = { require: Promise.resolve(s) }
  self.define = (s, a, t) => {
    n[s] ||
      (n[s] = Promise.resolve().then(() => {
        let n = {}
        const i = { uri: location.origin + s.slice(1) }
        return Promise.all(
          a.map((s) => {
            switch (s) {
              case "exports":
                return n
              case "module":
                return i
              default:
                return e(s)
            }
          })
        ).then((e) => {
          const s = t(...e)
          return n.default || (n.default = s), n
        })
      }))
  }
}
define("./sw.js", ["./workbox-72c9c03f"], function (e) {
  "use strict"
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/BTzNsdzpaSoSHyqNXhRcG/_buildManifest.js",
          revision: "BTzNsdzpaSoSHyqNXhRcG"
        },
        {
          url: "/_next/static/BTzNsdzpaSoSHyqNXhRcG/_ssgManifest.js",
          revision: "BTzNsdzpaSoSHyqNXhRcG"
        },
        {
          url: "/_next/static/chunks/0b7b90cd.92b8a6d99817c87d21b6.js",
          revision: "BTzNsdzpaSoSHyqNXhRcG"
        },
        {
          url: "/_next/static/chunks/398.6389d746db356a847517.js",
          revision: "BTzNsdzpaSoSHyqNXhRcG"
        },
        {
          url: "/_next/static/chunks/framework-c93ed74a065331c4bd75.js",
          revision: "BTzNsdzpaSoSHyqNXhRcG"
        },
        {
          url: "/_next/static/chunks/main-8b6bcb9c7508a26a854b.js",
          revision: "BTzNsdzpaSoSHyqNXhRcG"
        },
        {
          url: "/_next/static/chunks/pages/%5Bslug%5D-6727865d2b0362b6591a.js",
          revision: "BTzNsdzpaSoSHyqNXhRcG"
        },
        {
          url: "/_next/static/chunks/pages/_app-3a9fd3fc1dd9e8c4d1dc.js",
          revision: "BTzNsdzpaSoSHyqNXhRcG"
        },
        {
          url: "/_next/static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js",
          revision: "BTzNsdzpaSoSHyqNXhRcG"
        },
        {
          url: "/_next/static/chunks/pages/index-ac5ff3575916116862cb.js",
          revision: "BTzNsdzpaSoSHyqNXhRcG"
        },
        {
          url: "/_next/static/chunks/pages/place/%5Bslug%5D-b6a6b57816e6fc698998.js",
          revision: "BTzNsdzpaSoSHyqNXhRcG"
        },
        {
          url: "/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",
          revision: "BTzNsdzpaSoSHyqNXhRcG"
        },
        {
          url: "/_next/static/chunks/webpack-43ad558532d40e14006d.js",
          revision: "BTzNsdzpaSoSHyqNXhRcG"
        },
        { url: "/icon.png", revision: "4390149566ce609751f84c7553d39750" },
        {
          url: "/img/hero-illustration.svg",
          revision: "5fd5143cba1046a214d9a359fce22e89"
        },
        {
          url: "/img/icon-192.png",
          revision: "d27169d080684ebb57b8387d05c4b444"
        },
        {
          url: "/img/icon-512.png",
          revision: "f1d74b43a3832183202483a40d9e9d84"
        },
        {
          url: "/img/logo-gh.svg",
          revision: "e3a0c31390db72fd374570f4a57c56b0"
        },
        { url: "/img/logo.svg", revision: "202525302ad30aca5b2b790d4b0b5796" },
        { url: "/manifest.json", revision: "1fe4181afad8218280ee80e83444371e" }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers
                  })
                : s
          }
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-media-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith("/api/")
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      "GET"
    )
})
