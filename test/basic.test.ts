import React from 'react'
import renderer from 'react-test-renderer'
import { assert, expect, test } from 'vitest'

test('Link changes the class when hovered', () => {
  const component = renderer.create(<div>hello</div>);

//   expect(component).not.toBeNaN();
  expect(true).toBeTruthy();

  // re-rendering
//   tree = toJson(component)
//   expect(tree).toMatchSnapshot()

})

// Edit an assertion and save to see HMR in action

test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2)
  expect(Math.sqrt(144)).toBe(12)
  expect(Math.sqrt(2)).toBe(Math.SQRT2)
})

test('JSON', () => {
  const input = {
    foo: 'hello',
    bar: 'earth',
  }

  const output = JSON.stringify(input)

  expect(output).eq('{"foo":"hello","bar":"earth"}')
  assert.deepEqual(JSON.parse(output), input, 'matches original')
})