// キャッシュのバージョン（新しくしたらここを v2, v3... と数字を上げます）
const CACHE_NAME = 'srt-guide-v2';

// インストール時の処理
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  self.skipWaiting(); // すぐに新しいバージョンに切り替え
});

// アクティベート時：古いキャッシュを自動で消去する（これが重要！）
self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activate');
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] 古いキャッシュを削除します:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// ネットワークリクエストへの対応
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return new Response('現在オフラインです。インターネット接続を確認してください。');
    })
  );
});
