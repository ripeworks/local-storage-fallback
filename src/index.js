import hasStorage from './hasStorage';
import CookieStorage, { hasCookies } from './CookieStorage';
import MemoryStorage from './MemoryStorage';


// the final default
let fallbackStorage = new MemoryStorage();

let sessionTest = function () {
	if (hasStorage('sessionStorage')) {
		return fallbackStorage = window.sessionStorage;
	}
};

let cookieTest = function() {
	if (hasCookies()) {
		return fallbackStorage = new CookieStorage({prefix: options.cookiePrefix, expires: options.cookieExpires});
	}
};

let fallbackTests = [sessionTest, cookieTest];

const options = {
	cookiePrefix: 'lS_',
	cookieExpires: null,
	primaryFallback: 'session'
};

module.exports =function (opts) {
	if (typeof opts === 'object') {
		options.cookiePrefix = opts.cookiePrefix || options.cookiePrefix;
		options.cookieExpires = opts.cookieExpires || options.cookieExpires;
		options.primaryFallback = opts.primaryFallback || options.primaryFallback;
	}

	switch (String(options.primaryFallback).toLocaleLowerCase()) {
		case 'cookie':
			fallbackTests = [cookieTest, sessionTest];
			break;
		case 'session':
			fallbackTests = [sessionTest, cookieTest];
			break;
		case 'memory':
			fallbackTests = [];
			break;
	}

	if (hasStorage('localStorage')) {
		// use localStorage
		fallbackStorage = window.localStorage;
	} else {
		// try primary fallbacks
		fallbackTests.some(function(tryit) {
			return tryit();
		});
	}

	return fallbackStorage;
}

