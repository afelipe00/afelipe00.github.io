'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "dd11c4af471c6ee5cbe0a31ddb477999",
"/": "dd11c4af471c6ee5cbe0a31ddb477999",
"main.dart.js": "0b471cc097f6fd5f2c378635552e72dd",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "75f1034e78058941c4831f8a90acee12",
"assets/NOTICES": "bc00e3e1da16ad7d7f5c777f1bcf4e45",
"assets/FontManifest.json": "ad1a2b33dc8645a9ec31ed1b1f6b573a",
"assets/AssetManifest.bin.json": "c44f74db74ec4dc5529ccab41bb9b240",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1ae30b929628bd1ad34954c706cec1c8",
"assets/fonts/MaterialIcons-Regular.otf": "4bcc2a3b255e7046ed07f3a70e6baeef",
"assets/assets/images/sm-2.png": "4b1402e47c079087fd14a56a57ea1e55",
"assets/assets/images/agtech-1.webp": "89bb585634508db0033f82bc3a2df9eb",
"assets/assets/images/rocket-48.png": "cb27bfbc57d2caf3782b30e750e29a73",
"assets/assets/images/sm-1.png": "cf85bcea674670765a7a8dfb617c50be",
"assets/assets/images/sm-0.png": "320355a05fc6a17fab7bfa43e7ac47a5",
"assets/assets/images/404.png": "06ea30fb66d19d5a3518ccf5ec0728e5",
"assets/assets/images/portal-0.png": "930da1b217afc54aed54016333fdda47",
"assets/assets/images/portal-2.png": "6aaf8793f9fb269281774c487a99a5ff",
"assets/assets/images/app-2.png": "86b14904800c6d102911ea895ebbd400",
"assets/assets/images/app-0.png": "fe9425664701226d6eda9c74ff23fdc4",
"assets/assets/images/app-1.png": "9fe07360fcb0d87f12832f3efcbe4a5f",
"assets/assets/images/github-50-outlined.png": "279b75de047d85f99cf41441c1c090d8",
"assets/assets/images/agtech-0.jpeg": "f694a0e1e0266d2183f6e8f27e8961b2",
"assets/assets/images/profile.jpg": "ffc416400b452d28ec58f11e3d6f3323",
"assets/assets/images/linkedin-50-outlined.png": "28feebffb9050bafab007a3c42387fc8",
"assets/assets/images/portal-1.jpeg": "3397a2609558c48d715e9e424c794e2b",
"assets/assets/images/github-50-filled.png": "add631b638f2680caf976d349e2db7e0",
"assets/assets/images/brain-60-filled.png": "d5d141f63438ba61240350206c99e234",
"assets/assets/images/linkedin-50-filled.png": "8c54498de170f54d31a75a7bb0e6c998",
"assets/assets/images/twitter-50-filled.png": "7c52965aa8e83200e63f3e77af598fd5",
"assets/assets/images/twitter-50-outlined.png": "58b1207de111825e94aac094e1ba2da1",
"assets/assets/icons/rust.svg": "a936f60af3de62aa30bdbfe966eb9da4",
"assets/assets/icons/flutter.svg": "faf8f499559f6b2f815f454a5794eae3",
"assets/assets/icons/python.svg": "146716bdf1a351db5705ec1e6a25ed08",
"assets/assets/icons/fastapi.svg": "102c66c4f4781b5749c3013d650199f9",
"assets/assets/icons/dart.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/assets/icons/meet.svg": "e4d2511aa168bd19020bd4233af3abdd",
"assets/assets/icons/ts_logo.svg": "ff4498abb0731f3185e2f70d8bbbf146",
"assets/assets/icons/astro.svg": "224d3389058ad902c4d53763b43b04aa",
"assets/assets/icons/react.svg": "c3fbd71b12b726e00eec2b59f3c76786",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
