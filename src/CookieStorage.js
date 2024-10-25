import * as cookie from "cookie";

let prefix = "lS_";

export default class CookieStorage {
  constructor(options = {}) {
    this.cookieOptions = Object.assign({ path: "/" }, options);
    prefix = options.prefix === undefined ? prefix : options.prefix;
  }

  getItem(key) {
    const cookies = cookie.parse(document.cookie);
    if (!cookies || !cookies[prefix + key]) {
      return null;
    }
    return cookies[prefix + key];
  }

  setItem(key, value) {
    document.cookie = cookie.serialize(prefix + key, value, this.cookieOptions);
    return value;
  }

  removeItem(key) {
    const options = Object.assign({}, this.cookieOptions, { maxAge: -1 });
    document.cookie = cookie.serialize(prefix + key, "", options);
    return null;
  }

  clear() {
    const cookies = cookie.parse(document.cookie);
    for (const key in cookies) {
      if (key.indexOf(prefix) === 0) {
        this.removeItem(key.substr(prefix.length));
      }
    }

    return null;
  }
}

export function hasCookies() {
  const storage = new CookieStorage();

  try {
    const TEST_KEY = "__test";
    storage.setItem(TEST_KEY, "1");
    const value = storage.getItem(TEST_KEY);
    storage.removeItem(TEST_KEY);

    return value === "1";
  } catch (e) {
    return false;
  }
}
