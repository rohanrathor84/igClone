/**
 * @format
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Navigations from '../src/Navigations';

test('renders correctly', () => {
  const tree = renderer.create(<Navigations />).toJSON();
  expect(tree).toMatchSnapshot();
});
