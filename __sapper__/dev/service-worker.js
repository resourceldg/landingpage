(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1608565696195;

	const files = [
		"service-worker-index.html",
		"astronautita.jpg",
		"bird-bg.png",
		"book.png",
		"favicon.png",
		"fonts/Roboto-Black.ttf",
		"fonts/Roboto-BlackItalic.ttf",
		"fonts/Roboto-Bold.ttf",
		"fonts/Roboto-BoldItalic.ttf",
		"fonts/Roboto-Italic.ttf",
		"fonts/Roboto-Light.ttf",
		"fonts/Roboto-LightItalic.ttf",
		"fonts/Roboto-Medium.ttf",
		"fonts/Roboto-MediumItalic.ttf",
		"fonts/Roboto-Regular.ttf",
		"fonts/Roboto-Thin.ttf",
		"fonts/Roboto-ThinItalic.ttf",
		"global.css",
		"logo-192.png",
		"logo-512.png",
		"main.css",
		"manifest.json",
		"paper.png",
		"tailwind.css",
		"wps.png",
		"wsp2.png",
		"wsp20.png",
		"wsp2020.png"
	];

	const shell = [
		"client/client.43c79227.js",
		"client/index.2846d0f0.js",
		"client/index.919e1a91.js",
		"client/[slug].5747a920.js",
		"client/profile.883f2413.js",
		"client/signup.9e0b35cb.js",
		"client/about.3aea1f7d.js",
		"client/login.ad3c3fe0.js",
		"client/sapper-dev-client.89e34bae.js",
		"client/client.54e8980d.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const cached = new Set(to_cache);

	self.addEventListener('install', event => {
	    event.waitUntil(
	        caches
	            .open(ASSETS)
	            .then(cache => cache.addAll(to_cache))
	            .then(() => {
	                self.skipWaiting();
	            }),
	    );
	});

	self.addEventListener('activate', event => {
	    event.waitUntil(
	        caches.keys().then(async keys => {
	            // delete old caches
	            for (const key of keys) {
	                if (key !== ASSETS) await caches.delete(key);
	            }

	            self.clients.claim();
	        }),
	    );
	});

	self.addEventListener('fetch', event => {
	    if (event.request.method !== 'GET' || event.request.headers.has('range'))
	        return;

	    const url = new URL(event.request.url);

	    // don't try to handle e.g. data: URIs
	    if (!url.protocol.startsWith('http')) return;

	    // ignore dev server requests
	    if (
	        url.hostname === self.location.hostname &&
	        url.port !== self.location.port
	    )
	        return;

	    // always serve static files and bundler-generated assets from cache
	    if (url.host === self.location.host && cached.has(url.pathname)) {
	        event.respondWith(caches.match(event.request));
	        return;
	    }

	    // for pages, you might want to serve a shell `service-worker-index.html` file,
	    // which Sapper has generated for you. It's not right for every
	    // app, but if it's right for yours then uncomment this section
	    /*
		if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
			event.respondWith(caches.match('/service-worker-index.html'));
			return;
		}
		*/

	    if (event.request.cache === 'only-if-cached') return;

	    // for everything else, try the network first, falling back to
	    // cache if the user is offline. (If the pages never change, you
	    // might prefer a cache-first approach to a network-first one.)
	    event.respondWith(
	        caches.open(`offline${timestamp}`).then(async cache => {
	            try {
	                const response = await fetch(event.request);
	                cache.put(event.request, response.clone());
	                return response;
	            } catch (err) {
	                const response = await cache.match(event.request);
	                if (response) return response;

	                throw err;
	            }
	        }),
	    );
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTYwODU2NTY5NjE5NTtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCJhc3Ryb25hdXRpdGEuanBnXCIsXG5cdFwiYmlyZC1iZy5wbmdcIixcblx0XCJib29rLnBuZ1wiLFxuXHRcImZhdmljb24ucG5nXCIsXG5cdFwiZm9udHMvUm9ib3RvLUJsYWNrLnR0ZlwiLFxuXHRcImZvbnRzL1JvYm90by1CbGFja0l0YWxpYy50dGZcIixcblx0XCJmb250cy9Sb2JvdG8tQm9sZC50dGZcIixcblx0XCJmb250cy9Sb2JvdG8tQm9sZEl0YWxpYy50dGZcIixcblx0XCJmb250cy9Sb2JvdG8tSXRhbGljLnR0ZlwiLFxuXHRcImZvbnRzL1JvYm90by1MaWdodC50dGZcIixcblx0XCJmb250cy9Sb2JvdG8tTGlnaHRJdGFsaWMudHRmXCIsXG5cdFwiZm9udHMvUm9ib3RvLU1lZGl1bS50dGZcIixcblx0XCJmb250cy9Sb2JvdG8tTWVkaXVtSXRhbGljLnR0ZlwiLFxuXHRcImZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLFxuXHRcImZvbnRzL1JvYm90by1UaGluLnR0ZlwiLFxuXHRcImZvbnRzL1JvYm90by1UaGluSXRhbGljLnR0ZlwiLFxuXHRcImdsb2JhbC5jc3NcIixcblx0XCJsb2dvLTE5Mi5wbmdcIixcblx0XCJsb2dvLTUxMi5wbmdcIixcblx0XCJtYWluLmNzc1wiLFxuXHRcIm1hbmlmZXN0Lmpzb25cIixcblx0XCJwYXBlci5wbmdcIixcblx0XCJ0YWlsd2luZC5jc3NcIixcblx0XCJ3cHMucG5nXCIsXG5cdFwid3NwMi5wbmdcIixcblx0XCJ3c3AyMC5wbmdcIixcblx0XCJ3c3AyMDIwLnBuZ1wiXG5dO1xuZXhwb3J0IHsgZmlsZXMgYXMgYXNzZXRzIH07IC8vIGxlZ2FjeVxuXG5leHBvcnQgY29uc3Qgc2hlbGwgPSBbXG5cdFwiY2xpZW50L2NsaWVudC40M2M3OTIyNy5qc1wiLFxuXHRcImNsaWVudC9pbmRleC4yODQ2ZDBmMC5qc1wiLFxuXHRcImNsaWVudC9pbmRleC45MTllMWE5MS5qc1wiLFxuXHRcImNsaWVudC9bc2x1Z10uNTc0N2E5MjAuanNcIixcblx0XCJjbGllbnQvcHJvZmlsZS44ODNmMjQxMy5qc1wiLFxuXHRcImNsaWVudC9zaWdudXAuOWUwYjM1Y2IuanNcIixcblx0XCJjbGllbnQvYWJvdXQuM2FlYTFmN2QuanNcIixcblx0XCJjbGllbnQvbG9naW4uYWQzYzNmZTAuanNcIixcblx0XCJjbGllbnQvc2FwcGVyLWRldi1jbGllbnQuODllMzRiYWUuanNcIixcblx0XCJjbGllbnQvY2xpZW50LjU0ZTg5ODBkLmpzXCJcbl07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG5cdHsgcGF0dGVybjogL15cXC8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYXJ0aWNsZXNcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2FydGljbGVzXFwvKFteXFwvXSs/KVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvcHJvZmlsZVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc2lnbnVwXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9hYm91dFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvbG9naW5cXC8/JC8gfVxuXTsiLCJpbXBvcnQgeyB0aW1lc3RhbXAsIGZpbGVzLCBzaGVsbCwgcm91dGVzIH0gZnJvbSAnQHNhcHBlci9zZXJ2aWNlLXdvcmtlcic7XG5cbmNvbnN0IEFTU0VUUyA9IGBjYWNoZSR7dGltZXN0YW1wfWA7XG5cbi8vIGBzaGVsbGAgaXMgYW4gYXJyYXkgb2YgYWxsIHRoZSBmaWxlcyBnZW5lcmF0ZWQgYnkgdGhlIGJ1bmRsZXIsXG4vLyBgZmlsZXNgIGlzIGFuIGFycmF5IG9mIGV2ZXJ5dGhpbmcgaW4gdGhlIGBzdGF0aWNgIGRpcmVjdG9yeVxuY29uc3QgdG9fY2FjaGUgPSBzaGVsbC5jb25jYXQoZmlsZXMpO1xuY29uc3QgY2FjaGVkID0gbmV3IFNldCh0b19jYWNoZSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIGV2ZW50ID0+IHtcbiAgICBldmVudC53YWl0VW50aWwoXG4gICAgICAgIGNhY2hlc1xuICAgICAgICAgICAgLm9wZW4oQVNTRVRTKVxuICAgICAgICAgICAgLnRoZW4oY2FjaGUgPT4gY2FjaGUuYWRkQWxsKHRvX2NhY2hlKSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLnNraXBXYWl0aW5nKCk7XG4gICAgICAgICAgICB9KSxcbiAgICApO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBldmVudCA9PiB7XG4gICAgZXZlbnQud2FpdFVudGlsKFxuICAgICAgICBjYWNoZXMua2V5cygpLnRoZW4oYXN5bmMga2V5cyA9PiB7XG4gICAgICAgICAgICAvLyBkZWxldGUgb2xkIGNhY2hlc1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09IEFTU0VUUykgYXdhaXQgY2FjaGVzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNsaWVudHMuY2xhaW0oKTtcbiAgICAgICAgfSksXG4gICAgKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5yZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcgfHwgZXZlbnQucmVxdWVzdC5oZWFkZXJzLmhhcygncmFuZ2UnKSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChldmVudC5yZXF1ZXN0LnVybCk7XG5cbiAgICAvLyBkb24ndCB0cnkgdG8gaGFuZGxlIGUuZy4gZGF0YTogVVJJc1xuICAgIGlmICghdXJsLnByb3RvY29sLnN0YXJ0c1dpdGgoJ2h0dHAnKSkgcmV0dXJuO1xuXG4gICAgLy8gaWdub3JlIGRldiBzZXJ2ZXIgcmVxdWVzdHNcbiAgICBpZiAoXG4gICAgICAgIHVybC5ob3N0bmFtZSA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAmJlxuICAgICAgICB1cmwucG9ydCAhPT0gc2VsZi5sb2NhdGlvbi5wb3J0XG4gICAgKVxuICAgICAgICByZXR1cm47XG5cbiAgICAvLyBhbHdheXMgc2VydmUgc3RhdGljIGZpbGVzIGFuZCBidW5kbGVyLWdlbmVyYXRlZCBhc3NldHMgZnJvbSBjYWNoZVxuICAgIGlmICh1cmwuaG9zdCA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0ICYmIGNhY2hlZC5oYXModXJsLnBhdGhuYW1lKSkge1xuICAgICAgICBldmVudC5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goZXZlbnQucmVxdWVzdCkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZm9yIHBhZ2VzLCB5b3UgbWlnaHQgd2FudCB0byBzZXJ2ZSBhIHNoZWxsIGBzZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sYCBmaWxlLFxuICAgIC8vIHdoaWNoIFNhcHBlciBoYXMgZ2VuZXJhdGVkIGZvciB5b3UuIEl0J3Mgbm90IHJpZ2h0IGZvciBldmVyeVxuICAgIC8vIGFwcCwgYnV0IGlmIGl0J3MgcmlnaHQgZm9yIHlvdXJzIHRoZW4gdW5jb21tZW50IHRoaXMgc2VjdGlvblxuICAgIC8qXG5cdGlmICh1cmwub3JpZ2luID09PSBzZWxmLm9yaWdpbiAmJiByb3V0ZXMuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXR0ZXJuLnRlc3QodXJsLnBhdGhuYW1lKSkpIHtcblx0XHRldmVudC5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goJy9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sJykpO1xuXHRcdHJldHVybjtcblx0fVxuXHQqL1xuXG4gICAgaWYgKGV2ZW50LnJlcXVlc3QuY2FjaGUgPT09ICdvbmx5LWlmLWNhY2hlZCcpIHJldHVybjtcblxuICAgIC8vIGZvciBldmVyeXRoaW5nIGVsc2UsIHRyeSB0aGUgbmV0d29yayBmaXJzdCwgZmFsbGluZyBiYWNrIHRvXG4gICAgLy8gY2FjaGUgaWYgdGhlIHVzZXIgaXMgb2ZmbGluZS4gKElmIHRoZSBwYWdlcyBuZXZlciBjaGFuZ2UsIHlvdVxuICAgIC8vIG1pZ2h0IHByZWZlciBhIGNhY2hlLWZpcnN0IGFwcHJvYWNoIHRvIGEgbmV0d29yay1maXJzdCBvbmUuKVxuICAgIGV2ZW50LnJlc3BvbmRXaXRoKFxuICAgICAgICBjYWNoZXMub3Blbihgb2ZmbGluZSR7dGltZXN0YW1wfWApLnRoZW4oYXN5bmMgY2FjaGUgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGV2ZW50LnJlcXVlc3QpO1xuICAgICAgICAgICAgICAgIGNhY2hlLnB1dChldmVudC5yZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNhY2hlLm1hdGNoKGV2ZW50LnJlcXVlc3QpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSkgcmV0dXJuIHJlc3BvbnNlO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICApO1xufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0NBQUE7Q0FD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
