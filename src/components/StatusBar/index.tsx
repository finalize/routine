import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
  },
});

const StatusBar = () => {
  return (
    <View style={styles.statusBar} testID="status-bar"/>
  );
};

export default StatusBar;
