import React from 'react'
import renderer from 'react-test-renderer'
import LaunchList from './index'

it('renders correctly', () => {
  const tree = renderer.create(<LaunchList />).toJSON()
  expect(tree).toMatchSnapshot()
})
