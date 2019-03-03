import * as Enzyme from 'enzyme';
import * as React from 'react';
import { Constants } from 'expo';

import StatusBar from '../../../src/components/StatusBar';

describe('StatusBar', () => {
  const wrapper = Enzyme.shallow(<StatusBar />);
  const statusBar = wrapper.findWhere(node => node.prop('testID') === 'status-bar');

  test('renders without errors', () => {
    expect(statusBar.length).toBe(1);
  });
  test('renders StatusBar has correct height', () => {
    expect(statusBar.prop('style')).toHaveProperty('height', Constants.statusBarHeight);
  });
});
