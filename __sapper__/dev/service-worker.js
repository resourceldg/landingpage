(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1610306085891;

	const files = [
		"service-worker-index.html",
		"admin_panel_settings-24px.svg",
		"astronautita.jpg",
		"award-solid.svg",
		"backup-24px.svg",
		"bird-bg.png",
		"book.png",
		"camera-retro-solid.svg",
		"cash-register-solid.svg",
		"discourse-brands.svg",
		"facebook-24px.svg",
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
		"landmark-solid.svg",
		"large.svg",
		"lightbulb-regular.svg",
		"logo-192.png",
		"logo-512.png",
		"loyalty-24px.svg",
		"main.css",
		"manifest.json",
		"medium.svg",
		"menu.png",
		"menuu.png",
		"monetization_on-24px.svg",
		"paper.png",
		"policy-24px.svg",
		"qrscan.png",
		"question_answer-24px.svg",
		"rocket-solid.svg",
		"search-dollar-solid (1).svg",
		"security-24px.svg",
		"small.svg",
		"storefront-24px.svg",
		"tailwind.css",
		"wps.png",
		"wsp2.png",
		"wsp20.png",
		"wsp2020.png"
	];

	const shell = [
		"client/client.7be19918.js",
		"client/index.0be9224f.js",
		"client/index.e7ca676c.js",
		"client/[slug].f87983fa.js",
		"client/profile.70995deb.js",
		"client/signup.477d0051.js",
		"client/about.ab53f5a6.js",
		"client/carta.a8f15fbd.js",
		"client/login.421abd37.js",
		"client/sapper-dev-client.89e34bae.js",
		"client/client.4850ffaf.js"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTYxMDMwNjA4NTg5MTtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCJhZG1pbl9wYW5lbF9zZXR0aW5ncy0yNHB4LnN2Z1wiLFxuXHRcImFzdHJvbmF1dGl0YS5qcGdcIixcblx0XCJhd2FyZC1zb2xpZC5zdmdcIixcblx0XCJiYWNrdXAtMjRweC5zdmdcIixcblx0XCJiaXJkLWJnLnBuZ1wiLFxuXHRcImJvb2sucG5nXCIsXG5cdFwiY2FtZXJhLXJldHJvLXNvbGlkLnN2Z1wiLFxuXHRcImNhc2gtcmVnaXN0ZXItc29saWQuc3ZnXCIsXG5cdFwiZGlzY291cnNlLWJyYW5kcy5zdmdcIixcblx0XCJmYWNlYm9vay0yNHB4LnN2Z1wiLFxuXHRcImZhdmljb24ucG5nXCIsXG5cdFwiZm9udHMvUm9ib3RvLUJsYWNrLnR0ZlwiLFxuXHRcImZvbnRzL1JvYm90by1CbGFja0l0YWxpYy50dGZcIixcblx0XCJmb250cy9Sb2JvdG8tQm9sZC50dGZcIixcblx0XCJmb250cy9Sb2JvdG8tQm9sZEl0YWxpYy50dGZcIixcblx0XCJmb250cy9Sb2JvdG8tSXRhbGljLnR0ZlwiLFxuXHRcImZvbnRzL1JvYm90by1MaWdodC50dGZcIixcblx0XCJmb250cy9Sb2JvdG8tTGlnaHRJdGFsaWMudHRmXCIsXG5cdFwiZm9udHMvUm9ib3RvLU1lZGl1bS50dGZcIixcblx0XCJmb250cy9Sb2JvdG8tTWVkaXVtSXRhbGljLnR0ZlwiLFxuXHRcImZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLFxuXHRcImZvbnRzL1JvYm90by1UaGluLnR0ZlwiLFxuXHRcImZvbnRzL1JvYm90by1UaGluSXRhbGljLnR0ZlwiLFxuXHRcImdsb2JhbC5jc3NcIixcblx0XCJsYW5kbWFyay1zb2xpZC5zdmdcIixcblx0XCJsYXJnZS5zdmdcIixcblx0XCJsaWdodGJ1bGItcmVndWxhci5zdmdcIixcblx0XCJsb2dvLTE5Mi5wbmdcIixcblx0XCJsb2dvLTUxMi5wbmdcIixcblx0XCJsb3lhbHR5LTI0cHguc3ZnXCIsXG5cdFwibWFpbi5jc3NcIixcblx0XCJtYW5pZmVzdC5qc29uXCIsXG5cdFwibWVkaXVtLnN2Z1wiLFxuXHRcIm1lbnUucG5nXCIsXG5cdFwibWVudXUucG5nXCIsXG5cdFwibW9uZXRpemF0aW9uX29uLTI0cHguc3ZnXCIsXG5cdFwicGFwZXIucG5nXCIsXG5cdFwicG9saWN5LTI0cHguc3ZnXCIsXG5cdFwicXJzY2FuLnBuZ1wiLFxuXHRcInF1ZXN0aW9uX2Fuc3dlci0yNHB4LnN2Z1wiLFxuXHRcInJvY2tldC1zb2xpZC5zdmdcIixcblx0XCJzZWFyY2gtZG9sbGFyLXNvbGlkICgxKS5zdmdcIixcblx0XCJzZWN1cml0eS0yNHB4LnN2Z1wiLFxuXHRcInNtYWxsLnN2Z1wiLFxuXHRcInN0b3JlZnJvbnQtMjRweC5zdmdcIixcblx0XCJ0YWlsd2luZC5jc3NcIixcblx0XCJ3cHMucG5nXCIsXG5cdFwid3NwMi5wbmdcIixcblx0XCJ3c3AyMC5wbmdcIixcblx0XCJ3c3AyMDIwLnBuZ1wiXG5dO1xuZXhwb3J0IHsgZmlsZXMgYXMgYXNzZXRzIH07IC8vIGxlZ2FjeVxuXG5leHBvcnQgY29uc3Qgc2hlbGwgPSBbXG5cdFwiY2xpZW50L2NsaWVudC43YmUxOTkxOC5qc1wiLFxuXHRcImNsaWVudC9pbmRleC4wYmU5MjI0Zi5qc1wiLFxuXHRcImNsaWVudC9pbmRleC5lN2NhNjc2Yy5qc1wiLFxuXHRcImNsaWVudC9bc2x1Z10uZjg3OTgzZmEuanNcIixcblx0XCJjbGllbnQvcHJvZmlsZS43MDk5NWRlYi5qc1wiLFxuXHRcImNsaWVudC9zaWdudXAuNDc3ZDAwNTEuanNcIixcblx0XCJjbGllbnQvYWJvdXQuYWI1M2Y1YTYuanNcIixcblx0XCJjbGllbnQvY2FydGEuYThmMTVmYmQuanNcIixcblx0XCJjbGllbnQvbG9naW4uNDIxYWJkMzcuanNcIixcblx0XCJjbGllbnQvc2FwcGVyLWRldi1jbGllbnQuODllMzRiYWUuanNcIixcblx0XCJjbGllbnQvY2xpZW50LjQ4NTBmZmFmLmpzXCJcbl07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG5cdHsgcGF0dGVybjogL15cXC8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYXJ0aWNsZXNcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2FydGljbGVzXFwvKFteXFwvXSs/KVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvcHJvZmlsZVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc2lnbnVwXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9hYm91dFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvY2FydGFcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2xvZ2luXFwvPyQvIH1cbl07IiwiaW1wb3J0IHsgdGltZXN0YW1wLCBmaWxlcywgc2hlbGwsIHJvdXRlcyB9IGZyb20gJ0BzYXBwZXIvc2VydmljZS13b3JrZXInO1xuXG5jb25zdCBBU1NFVFMgPSBgY2FjaGUke3RpbWVzdGFtcH1gO1xuXG4vLyBgc2hlbGxgIGlzIGFuIGFycmF5IG9mIGFsbCB0aGUgZmlsZXMgZ2VuZXJhdGVkIGJ5IHRoZSBidW5kbGVyLFxuLy8gYGZpbGVzYCBpcyBhbiBhcnJheSBvZiBldmVyeXRoaW5nIGluIHRoZSBgc3RhdGljYCBkaXJlY3RvcnlcbmNvbnN0IHRvX2NhY2hlID0gc2hlbGwuY29uY2F0KGZpbGVzKTtcbmNvbnN0IGNhY2hlZCA9IG5ldyBTZXQodG9fY2FjaGUpO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBldmVudCA9PiB7XG4gICAgZXZlbnQud2FpdFVudGlsKFxuICAgICAgICBjYWNoZXNcbiAgICAgICAgICAgIC5vcGVuKEFTU0VUUylcbiAgICAgICAgICAgIC50aGVuKGNhY2hlID0+IGNhY2hlLmFkZEFsbCh0b19jYWNoZSkpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5za2lwV2FpdGluZygpO1xuICAgICAgICAgICAgfSksXG4gICAgKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgZXZlbnQgPT4ge1xuICAgIGV2ZW50LndhaXRVbnRpbChcbiAgICAgICAgY2FjaGVzLmtleXMoKS50aGVuKGFzeW5jIGtleXMgPT4ge1xuICAgICAgICAgICAgLy8gZGVsZXRlIG9sZCBjYWNoZXNcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBBU1NFVFMpIGF3YWl0IGNhY2hlcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jbGllbnRzLmNsYWltKCk7XG4gICAgICAgIH0pLFxuICAgICk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQucmVxdWVzdC5tZXRob2QgIT09ICdHRVQnIHx8IGV2ZW50LnJlcXVlc3QuaGVhZGVycy5oYXMoJ3JhbmdlJykpXG4gICAgICAgIHJldHVybjtcblxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoZXZlbnQucmVxdWVzdC51cmwpO1xuXG4gICAgLy8gZG9uJ3QgdHJ5IHRvIGhhbmRsZSBlLmcuIGRhdGE6IFVSSXNcbiAgICBpZiAoIXVybC5wcm90b2NvbC5zdGFydHNXaXRoKCdodHRwJykpIHJldHVybjtcblxuICAgIC8vIGlnbm9yZSBkZXYgc2VydmVyIHJlcXVlc3RzXG4gICAgaWYgKFxuICAgICAgICB1cmwuaG9zdG5hbWUgPT09IHNlbGYubG9jYXRpb24uaG9zdG5hbWUgJiZcbiAgICAgICAgdXJsLnBvcnQgIT09IHNlbGYubG9jYXRpb24ucG9ydFxuICAgIClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgLy8gYWx3YXlzIHNlcnZlIHN0YXRpYyBmaWxlcyBhbmQgYnVuZGxlci1nZW5lcmF0ZWQgYXNzZXRzIGZyb20gY2FjaGVcbiAgICBpZiAodXJsLmhvc3QgPT09IHNlbGYubG9jYXRpb24uaG9zdCAmJiBjYWNoZWQuaGFzKHVybC5wYXRobmFtZSkpIHtcbiAgICAgICAgZXZlbnQucmVzcG9uZFdpdGgoY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGZvciBwYWdlcywgeW91IG1pZ2h0IHdhbnQgdG8gc2VydmUgYSBzaGVsbCBgc2VydmljZS13b3JrZXItaW5kZXguaHRtbGAgZmlsZSxcbiAgICAvLyB3aGljaCBTYXBwZXIgaGFzIGdlbmVyYXRlZCBmb3IgeW91LiBJdCdzIG5vdCByaWdodCBmb3IgZXZlcnlcbiAgICAvLyBhcHAsIGJ1dCBpZiBpdCdzIHJpZ2h0IGZvciB5b3VycyB0aGVuIHVuY29tbWVudCB0aGlzIHNlY3Rpb25cbiAgICAvKlxuXHRpZiAodXJsLm9yaWdpbiA9PT0gc2VsZi5vcmlnaW4gJiYgcm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUucGF0dGVybi50ZXN0KHVybC5wYXRobmFtZSkpKSB7XG5cdFx0ZXZlbnQucmVzcG9uZFdpdGgoY2FjaGVzLm1hdGNoKCcvc2VydmljZS13b3JrZXItaW5kZXguaHRtbCcpKTtcblx0XHRyZXR1cm47XG5cdH1cblx0Ki9cblxuICAgIGlmIChldmVudC5yZXF1ZXN0LmNhY2hlID09PSAnb25seS1pZi1jYWNoZWQnKSByZXR1cm47XG5cbiAgICAvLyBmb3IgZXZlcnl0aGluZyBlbHNlLCB0cnkgdGhlIG5ldHdvcmsgZmlyc3QsIGZhbGxpbmcgYmFjayB0b1xuICAgIC8vIGNhY2hlIGlmIHRoZSB1c2VyIGlzIG9mZmxpbmUuIChJZiB0aGUgcGFnZXMgbmV2ZXIgY2hhbmdlLCB5b3VcbiAgICAvLyBtaWdodCBwcmVmZXIgYSBjYWNoZS1maXJzdCBhcHByb2FjaCB0byBhIG5ldHdvcmstZmlyc3Qgb25lLilcbiAgICBldmVudC5yZXNwb25kV2l0aChcbiAgICAgICAgY2FjaGVzLm9wZW4oYG9mZmxpbmUke3RpbWVzdGFtcH1gKS50aGVuKGFzeW5jIGNhY2hlID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChldmVudC5yZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICBjYWNoZS5wdXQoZXZlbnQucmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWNoZS5tYXRjaChldmVudC5yZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHJldHVybiByZXNwb25zZTtcblxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztDQUFBO0NBQ08sTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQ3ZDO0NBQ08sTUFBTSxLQUFLLEdBQUc7Q0FDckIsQ0FBQywyQkFBMkI7Q0FDNUIsQ0FBQywrQkFBK0I7Q0FDaEMsQ0FBQyxrQkFBa0I7Q0FDbkIsQ0FBQyxpQkFBaUI7Q0FDbEIsQ0FBQyxpQkFBaUI7Q0FDbEIsQ0FBQyxhQUFhO0NBQ2QsQ0FBQyxVQUFVO0NBQ1gsQ0FBQyx3QkFBd0I7Q0FDekIsQ0FBQyx5QkFBeUI7Q0FDMUIsQ0FBQyxzQkFBc0I7Q0FDdkIs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
