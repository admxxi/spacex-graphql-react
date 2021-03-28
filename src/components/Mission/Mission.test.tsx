import React from 'react';
import renderer from 'react-test-renderer';
import Mission from './index';

it('renders correctly', () => {
  const tree = renderer.create(<Mission />).toJSON()
  expect(tree).toMatchSnapshot()
});