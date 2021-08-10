import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// Workaround to not let TypeScript analyze this library
const { NavigationContainer } = require('@react-navigation/native');

import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
