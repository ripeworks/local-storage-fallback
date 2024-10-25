import isSupported from "./isSupported";
import CookieStorage from "./CookieStorage";
import MemoryStorage from "./MemoryStorage";

let storage = null;

if (isSupported("localStorage")) {
  // use localStorage
  storage = window.localStorage;
} else if (isSupported("sessionStorage")) {
  // use sessionStorage
  storage = window.sessionStorage;
} else if (isSupported("cookieStorage")) {
  // use cookies
  storage = new CookieStorage();
} else {
  // use memory
  storage = new MemoryStorage();
}

export default storage;
export { storage, isSupported, CookieStorage, MemoryStorage };
