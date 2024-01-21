'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ee1c66af1be4aa1d5dc6e52ad03ce9b8",
".git/config": "6a58a9ee0461a23b71db775b3c663bfd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4b8a6a12951497e1eebca34165d7c1d7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "30b32fc169c2717148e16cf22a362744",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9c75cbd5818dc881fcd3b3278d291730",
".git/logs/refs/heads/main": "9c75cbd5818dc881fcd3b3278d291730",
".git/logs/refs/remotes/origin/main": "19b3b2d372c3470c01386647b65d58ec",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/ca0e65cec263311d758aa24f6634e690ca4d26": "3a1b09fb6f14b86a8450479e038f74a4",
".git/objects/06/cb5d7fc77211aa1b003e2821fd963c96f72f93": "d287419ecd414eec2390c74df9f3f94d",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/14/c91fc4baae59f411ccc0cc5c5897872dafe6df": "8ac70c0f5ef18d42c3e33d85f86f05e2",
".git/objects/15/e22f4deeaf24d14eaee01fce1d7af0d0de31f2": "000bc6e73b6138ab23de762a58f9fc11",
".git/objects/16/83a763ee68363ff0c05f204d0eebaff83bb7bc": "3b4b684adea14125089ccd060585222a",
".git/objects/19/f2c826f5acaf5b3ce8fc4a1f615b0d61625e23": "7c53f0232c1da1018e3e576280d7215c",
".git/objects/1a/22598b633eb464216974255255f78ed77e9b58": "f6d86081dfb30d8d34df6bd009cbc160",
".git/objects/1a/9693d97fe25e8635691463d9d51a63ecd32aa0": "df97a98f30fd3b38bdb9da2598f2bffc",
".git/objects/1f/87a9ce0d460d8fa2683ec6649b3c151a534e80": "24f24f3d0e782e4b5784a6895d83699d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/3fab140a2c04e5b8787d6446f24bde77e9f722": "7f09c1d17bf89dfd0265f4a4e883f871",
".git/objects/20/604e52631be960660f086f0a97072a818323e4": "39826deb3c4e477ae66b02010ea02a81",
".git/objects/27/1e072e55cec4e522955dded4d5aa44fd5fb084": "cf44e97f33603f7ba01cafc773b13b4e",
".git/objects/29/0cea0092564e239c6ca7d95c5fc04f5be55d37": "095bf86ed06a54d5f7b2b4f7b3835608",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/9d62f5a4bb23bd7ab8c5430e3ab2cc73050b7e": "9fd83e63975186cc2a1b2334f7ffddd1",
".git/objects/2e/4987a2033f6fb0d1775811152866a4bf768348": "1e0f9659c377542cee51f8574635d1a5",
".git/objects/33/4eae1fe246e6add0d48656f62e1234e172f55c": "1c9cb593832a497abd8423b06b9ed106",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/f3a2ec720796e40c288bed9c8a1186fa7ad883": "5ede2189138caf7e90fe978271e86f62",
".git/objects/3e/e296cdfea17a079e7baf5c43ca44ab6a555650": "7ec88fac054514c7c384dc7db053825d",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/132105086f98d67829dd221d833ebc1ffc19ca": "05b7a7ef1ccab973c27d78b72bd1eac0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/be0dd5c0a313ec7e356fd2f422ebcd17f4ffdf": "21119d4fcf9f644fcfebfd28530ae484",
".git/objects/4e/1817af212d30d3778b786238ab0ed7df948ee5": "41a797bf91ed5b38051b3712fa21d95f",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/a89681bd5e338e88cc71c546e650f7af392612": "20a04c34d3dd128a7f5b08aa12200a70",
".git/objects/53/b2c932578cc8bc0ba582f3d4cc5b4e55778661": "6f18758b5a7c5b08bb95c6421c7fa4c1",
".git/objects/57/f491dab28d79f26eb6bc2ec5096c419343d729": "e5ddfa7d36a0e47b6a814a7dda55c8ce",
".git/objects/63/6ad671bbb491f4d337a164320b87b17725d179": "0d8e40820c0d438b311d5831916123d2",
".git/objects/64/9baf0d981c4d52925e26fb15f94a22508223ca": "cccb89a8a67bbfe8bafe690d3fb1cab2",
".git/objects/6e/92cf71e5ab4f0ecbfd94053539f474b3ff753b": "29ac34d9f3b99f6726bade1b20250415",
".git/objects/72/2d9eecee7bf29e81c281e81c6c3cf63033e96c": "f75fc49b1f6d4e4d5f5675388402306d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/7b632f9c05c3da44447cc0773d355e45f442c0": "761f334eff235ec7caa6d10cf574a36a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/afdaaf3464e156ca1ddeefc10f77008e5675b3": "0124dbae0bc1c9239c4be336d26a7854",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/aa/e1b1e816e47031d90c86a2a0e79224cc66f620": "fa1bd8de1b99b9a161e2ce7b0d2f800c",
".git/objects/ac/b7bbc5aad2d2fcbcf4dfe7e87c405a6f360f3e": "1b92310095681420a4cb2074fbe6f850",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b38ee580b5ffa8343c25fae7b667dfce2a6c9b": "02e9ef9a39f5a8f9950394eb797409d6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/092ee58867b7ab591cc6374055a2f83a01c8b9": "774d6e3daccdc177fb320f81e376d2be",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/4971937b1fa8196500f86787e3a0103cc08bbf": "c5b19e0e36eaaf7163a40a968cd70918",
".git/objects/bf/6dfb8d55008b94d06b290c67ddab36db35a298": "c4351f204b6fb8d5a51e13704a79291f",
".git/objects/bf/bcaa26517fa1ff3e69e489de4bfde7b30569e0": "b40dc013012c29f4b18397ef3134bb2a",
".git/objects/c1/332b9769cccc1833f2a87ca26ab1419b2915af": "d90256b0bae0711f86bf63e636b1ae6d",
".git/objects/c8/88bd802970663a6b53251102cceb68a946b1f0": "e0d08339d596db86d2309a6b03c041fd",
".git/objects/ce/d7219d7d942ecb8e136a8b24a689f4148cfad8": "0709dcf4598201dc2f50482ff859da45",
".git/objects/d2/1ae5eaa7ad5030bc8e7e8b452955cb4b032d62": "29c235532845e25e383607cf2083e45c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/8f13f07bbad6893e0858b89c41eb1ec8ac7f9c": "8a9e31683dd09f69d5ad09dec49bada9",
".git/objects/dd/763eb20655a889b4ff27cb488700c694f18945": "901495571d3aae693242f5d4a3507404",
".git/objects/e8/958582863ef8daa3cad42858253edcac1746a8": "f26c4a998b5b63f406e6a9e2a24c0325",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ca922617571ec9505b6e0f8b5cef30e01e5095": "cc2c588c3fd2fad3c78edc3966d90625",
".git/objects/ee/adbad1de116fec3cdeb9d3bf35c01abc189382": "f2e324e5045bb2eabd8d33c373dfd58c",
".git/objects/ff/ff7f8e84ce88f298a83c4aecb24fd8c1252c1d": "9e63acef69cb41a609a813372d472929",
".git/refs/heads/main": "bf867f544d266529d367eb024c738b79",
".git/refs/remotes/origin/main": "afdb5cf24114ade4daac3bf8559de6af",
"assets/AssetManifest.bin": "db2d5dc829b6aa3f4a7ea02dc198a7b7",
"assets/AssetManifest.bin.json": "23bea6c9d57a3e61f944ef31fefc270b",
"assets/AssetManifest.json": "46d154e5ad81613f95e508f4879abbd6",
"assets/assets/fonts/Rubik/Rubik-Bold.ttf": "627d0e537f4a06a535ae956e4a87837f",
"assets/assets/fonts/Rubik/Rubik-Italic.ttf": "17538a8196fb1d1fab888c5941acf9ec",
"assets/assets/fonts/Rubik/Rubik-Regular.ttf": "46df28800514364ef2766f74386b1bd3",
"assets/assets/fonts/Syne/Syne-Bold.ttf": "408af1456d9b0b45da659cdc63674f30",
"assets/assets/fonts/Syne/Syne-Regular.ttf": "586592300f74e9aace69da86f65ffbac",
"assets/assets/pictures/png/person.png": "48a96ac2b26b75db4d6a72500b8154a0",
"assets/assets/pictures/svg/Discord_icon.svg": "df7e8b9521acc3e9979b4d34d176a741",
"assets/assets/pictures/svg/Github_icon.svg": "c1e8b6a5439c00575b17c92d340aed19",
"assets/assets/pictures/svg/Linkedin_icon.svg": "e01530742e45562b3fa0a32472d5bf43",
"assets/assets/pictures/svg/Telegram_icon.svg": "53aa6b100d4a566e6122163b1089dd5f",
"assets/FontManifest.json": "12c3ee0bbd27f7d614685b6c37ae3893",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "7f5d020bbfa1b8f2c974ac8792f3c813",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "01217b2e4fd71d9e74684e7e2481eb4f",
"/": "01217b2e4fd71d9e74684e7e2481eb4f",
"main.dart.js": "307cb4ab7c41af398edc7926a486758d",
"manifest.json": "23f4b295dc436454ff9134de87f9175f",
"version.json": "5945790b4dfc51d03cf8a45e431727cb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
