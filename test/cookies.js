require('./helpers/setup-browser-env')
const test = require('ava')
const storage = require('../lib').default

test('uses cookie storage', t => {
  t.is(storage.constructor.name, 'CookieStorage')
})

test('get/set with cookie storage', t => {
  storage.setItem('test', 1)
  t.is(storage.getItem('test'), '1')
})

test('remove with cookie storage', t => {
  storage.setItem('test', 2)
  storage.removeItem('test')
  t.is(storage.getItem('test'), null)
})

test('clear with cookie storage', t => {
  storage.setItem('test', 2)
  storage.clear()
  t.is(storage.getItem('test'), null)
})
