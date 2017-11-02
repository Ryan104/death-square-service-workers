const CACHE_NAME = "death_square_cache_1";
const urlsToCache = [
	'index.html',
	'assets/images/tie-fighter.png',
	'assets/images/turret.png'
];

/* Add files to cache */
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then((cache) => {
			console.log('Opened Cache');
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request);
		}));
});