import React from 'react'
import renderer from 'react-test-renderer'
import MissionList from './index'

it('renders correctly', () => {
  const tree = renderer.create(<MissionList />).toJSON()
  expect(tree).toMatchSnapshot()
})
