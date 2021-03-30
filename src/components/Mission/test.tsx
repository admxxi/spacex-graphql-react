import React from 'react'
import renderer from 'react-test-renderer'
import Launch from './Launch'

it('renders correctly', () => {
  const tree = renderer.create(<Launch />).toJSON()
  expect(tree).toMatchSnapshot()
})
