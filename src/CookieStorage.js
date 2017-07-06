import cookie from 'cookie'

let prefix = 'lS_'
let expires = null

export default class CookieStorage {
  constructor(options) {
	options = options || {}
	prefix = options.prefix || prefix
	expires = options.expires || expires
  }

  getItem(key) {
    const cookies = cookie.parse(document.cookie)
    if(!cookies || !cookies.hasOwnProperty(prefix + key)) {
      return null
    }
    return cookies[prefix + key]
  }

  setItem(key, value) {
    document.cookie = cookie.serialize(prefix + key, value, {
      path: '/',
	  expires: expires
    })
    return value
  }

  removeItem(key) {
    document.cookie = cookie.serialize(prefix + key, '', {
      path: '/',
      maxAge: -1
    });
    return null
  }

  clear() {
    const cookies = cookie.parse(document.cookie)
    for(var key in cookies) {
      if(key.indexOf(prefix) === 0) {
        this.removeItem(key.substr(prefix.length))
      }
    }

    return null
  }
}

export function hasCookies() {
  const {setItem, getItem, removeItem} = CookieStorage.prototype

  try {
    const TEST_KEY = '__test'
    setItem(TEST_KEY, '1')
    const value = getItem(TEST_KEY)
    removeItem(TEST_KEY)

    return value == '1'
  } catch (e) {
    return false
  }
}
