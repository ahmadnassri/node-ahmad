import ahmad from '../index.js'
import { test } from 'node:test'

test('imports successfully', t => {
  t.plan(1)

  t.assert.equal(ahmad.name, 'Ahmad Nassri')
})
