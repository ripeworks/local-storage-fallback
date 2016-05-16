import hasStorage from './hasStorage'
import CookieStorage from './CookieStorage'

let storage = null

if (hasStorage('localStorage')) {
  // use localStorage
  storage = window.localStorage
} else if(hasStorage('sessionStorage')) {
  // use sessionStorage
  storage = window.sessionStorage
} else {
  // use cookies
  storage = new CookieStorage()
}

export default storage
