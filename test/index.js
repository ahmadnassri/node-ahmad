const ahmad = require('..')
const { test } = require('tap')

test('imports successfully', assert => {
  assert.plan(1)

  assert.equal(ahmad.name, 'Ahmad Nassri')
})
