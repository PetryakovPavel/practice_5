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

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// Прокси для API Яндекс.Переводчика
workbox.routing.registerRoute(
  /https:\/\/translate\.api\.cloud\.yandex\.net\/translate\/v2\/translate/,
  async ({ request }) => {
    const apiKey = 'dict.1.1.20241129T153507Z.d8c1dcd9753a57dc.85a8eed0320168213a1874ab822582205226f41f'; // Замените на ваш API-ключ

    // Получаем текст и язык из тела запроса
    const { text, targetLanguageCode } = await request.json();

    try {
      const response = await fetch(`https://translate.api.cloud.yandex.net/translate/v2/translate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Api-Key ${apiKey}`
        },
        body: JSON.stringify({
          targetLanguageCode,
          texts: [text],
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      return response.json(); // Возвращаем JSON-ответ
    } catch (error) {
      console.error('Translation error:', error);
      return new Response('Error translating text', { status: 500 });
    }
  }
);

// Регистрация маршрута навигации
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/practice_5/index.html"), {
  blacklist: [/^\/_/, /\/[^/]+\.[^/]+$/],
});
