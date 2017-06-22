import hasStorage from './hasStorage'
import CookieStorage, { hasCookies } from './CookieStorage'
import MemoryStorage from './MemoryStorage'

let storage = null

if (hasStorage('localStorage')) {
  // use localStorage
  storage = window.localStorage
} else if(hasStorage('sessionStorage')) {
  // use sessionStorage
  storage = window.sessionStorage
} else if(hasCookies()) {
  // use cookies
  storage = new CookieStorage()
} else {
  // use memory
  storage = new MemoryStorage()
}

module.exports = storage
