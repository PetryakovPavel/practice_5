/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/practice_5/precache-manifest.33697fae8346fdc642d1495215f54c54.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// Прокси для API Яндекс.Переводчика
workbox.routing.registerRoute(
  /https:\/\/translate\.api\.cloud\.yandex\.net\/translate\/v2\/translate/,
  async ({ url }) => {
    const apiKey = 'dict.1.1.20241129T153507Z.d8c1dcd9753a57dc.85a8eed0320168213a1874ab822582205226f41f'; // Замените на ваш API-ключ

    const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Api-Key ${apiKey}`
      },
      body: JSON.stringify({
        targetLanguageCode: url.searchParams.get('lang'),
        texts: [url.searchParams.get('text')],
      }),
    });

    return response;
  }
);

// Регистрация маршрута навигации
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/practice_5/index.html"), {
  blacklist: [/^\/_/, /\/[^/]+\.[^/]+$/],
});
