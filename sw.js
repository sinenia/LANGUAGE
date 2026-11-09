'use strict';
// Online-only worker: no learning records, answers, or dictionaries are cached.
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
