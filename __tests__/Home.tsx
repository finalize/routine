import * as Enzyme from 'enzyme';
import * as React from 'react';

import Home from '../src/Home';

test('renders without errors', () => {
  const wrapper = Enzyme.shallow(<Home />);
  const helloComponent = wrapper.findWhere(node => node.prop('testID') === 'hello');
  expect(helloComponent.length).toBe(1);
});
