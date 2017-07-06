require('./helpers/setup-browser-env')
const test = require('ava')
const storage = require('../lib')({cookiePrefix: '_LSPOLY-', primaryFallback: 'cookie'})

test('uses cookie storage', t => {
  t.is(storage.constructor.name, 'CookieStorage')
})

test('get/set with cookie storage', t => {
  storage.setItem('gstest', 1)
  t.is(storage.getItem('gstest'), '1')
  t.is(document.cookie.indexOf('_LSPOLY-'), 0)
})

test('remove with cookie storage', t => {
  storage.setItem('rtest', 2)
  storage.removeItem('rtest')
  t.is(storage.getItem('rtest'), null)
})

test('clear with cookie storage', t => {
  storage.setItem('ctest', 3)
  storage.clear()
  t.is(storage.getItem('ctest'), null)
})
