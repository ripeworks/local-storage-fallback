require('./helpers/setup-browser-env')

const test = require('ava')
const storage = require('../lib/dist.min.js')

test('get/set with local storage', t => {
  storage.setItem('test', 1)
  t.is(storage.getItem('test'), '1')
})

test('remove with local storage', t => {
  storage.setItem('test', 2)
  storage.removeItem('test')
  t.is(storage.getItem('test'), null)
})

test('clear with local storage', t => {
  storage.setItem('test', 2)
  storage.clear()
  t.is(storage.getItem('test'), null)
})
