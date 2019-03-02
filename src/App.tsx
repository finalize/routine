import * as React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const App = () => {
  return (
    <Provider store={configureStore}>
      <View style={{ marginTop: 50 }} testID="hello">
        <Text>Hello Expo!</Text>
      </View>
    </Provider>
  );
};

export default App;
