import hasStorage from './hasStorage';
import CookieStorage, { hasCookies } from './CookieStorage';
import MemoryStorage from './MemoryStorage';


// the final default
let fallbackStorage = new MemoryStorage();

let fallbackTests = [
	function () {
		if (hasStorage('sessionStorage')) {
			return fallbackStorage = window.sessionStorage;
		}
	},
	function() {
		if (hasCookies()) {
			return fallbackStorage = new CookieStorage({prefix: options.cookiePrefix, expires: options.cookieExpires});
		}
	}
];

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

	if (options.primaryFallback === 'cookie') {
		fallbackTests.reverse();
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

