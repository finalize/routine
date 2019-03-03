import * as React from 'react';
import { Provider } from 'react-redux';

import Home from './src/Home';
import configureStore from './src/store/configureStore';

const App = () => {
  return (
    <Provider store={configureStore}>
      <Home />
    </Provider>
  );
};

export default App;
