# local-storage-fallback
Check and use appropriate storage adapter for browser (localStorage, sessionStorage, cookies, memory)

[![npm version](https://badge.fury.io/js/local-storage-fallback.svg)](https://badge.fury.io/js/local-storage-fallback)

## Installation

```
$ npm install local-storage-fallback
```

## Usage

```js
import Storage from 'local-storage-fallback'
let storage = Storage(options);

// Use storage directly
storage.setItem('foo', 'bar');
storage.getItem('foo'); // bar

```

## Browser Bundle

```html
<script src="lib/dist.min.js"></script>
<script>
  var storage = window.localStorageFallback(options);
  storage.setItem('foo', 'bar')
</script>
```

## Options
- **cookiePrefix** (String, defuault='lS_') Defines the cookie prefix to apply when CookieStorage is used.  Any string is valid.
- **cookieExpires** (Date, default=none) Sets the default cookie expires value when CookieStorage is used.  The only valid value is a JS Date object.
- **primaryFallback** (String, default='session') Sets the 1st order fallback mechanism.  Valid values are either 'cookie', 'memory, or 'session'.

## Purpose

With browser settings like "Private Browsing" it has become a problem to rely on a working `window.localStorage`, even in newer browsers. Even though it may exist, it will throw exceptions when trying to use `setItem` or `getItem`. This module will run appropriate checks to see what browser storage mechanism might be available, and then expose it. It uses the same API as `localStorage` so it should work as a drop-in replacement in most cases.

## Gotchas

* `CookieStorage` __has__ storage limits. Be careful here.
* `MemoryStorage` will __not__ persist between page loads. This is more or less a stop-gap to prevent page crashes, but may be sufficient for websites that don't do full page loads.
