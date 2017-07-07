import { hasCookies } from './CookieStorage'

const TEST_KEY = '__test'

function hasStorage (name) {
  try {
    const storage = window[name]
    storage.setItem(TEST_KEY, '1')
    storage.removeItem(TEST_KEY)
    return true
  } catch (e) {
    return false
  }
}

export default function isSupported (name = 'localStorage') {
  const storage = String(name).replace(/storage$/i, '').toLowerCase()

  if (storage === 'local') {
    return hasStorage('localStorage')
  }

  if (storage === 'session') {
    return hasStorage('sessionStorage')
  }

  if (storage === 'cookie') {
    return hasCookies()
  }

  if (storage === 'memory') {
    return true
  }

  throw new Error(`Storage method \`${name}\` is not available.
    Please use one of the following: localStorage, sessionStorage, cookieStorage, memoryStorage.`)
}
