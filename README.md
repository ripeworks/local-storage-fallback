# local-storage-fallback
Check and use appropriate storage adapter for browser (localStorage, sessionStorage, cookies, memory)

[![npm version](https://badge.fury.io/js/local-storage-fallback.svg)](https://badge.fury.io/js/local-storage-fallback)

## Installation

```
$ npm install superdevpack
```

## Usage

```js
import storage from 'local-storage-falllback'

// Use storage directly
storage.setItem('foo', 'bar');
storage.getItem('foo'); // bar

// Or shim window.localStorage
window.localStorage = storage;
```
