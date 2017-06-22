const test = require('ava')
const storage = require('../lib')

test('works in node env', t => {
  t.is(storage.constructor.name, 'MemoryStorage')
  storage.setItem('test', 1)
  t.is(storage.getItem('test'), '1')
})
