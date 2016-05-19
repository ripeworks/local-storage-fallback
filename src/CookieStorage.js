import cookie from 'browser-cookie-lite'

export default class CookieStorage {
  getItem(key) {
    return cookie(key)
  }

  setItem(key, value) {
    return cookie(key, value)
  }

  removeItem(key) {
    return cookie(key, '', -1)
  }

  clear() {
    return false
  }
}

export function hasCookies() {
  const TEST_KEY = '__test'
  cookie(TEST_KEY, '1')
  const value = cookie(TEST_KEY)

  return value == '1'
}
