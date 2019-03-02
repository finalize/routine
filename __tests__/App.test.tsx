import * as Enzyme from 'enzyme';
import * as React from 'react';

import App from '../src/App';

test('renders without errors', () => {
  const wrapper = Enzyme.shallow(<App />);
  const helloComponent = wrapper.findWhere(node => node.prop('testID') === 'hello');
  expect(helloComponent.length).toBe(1);
});
