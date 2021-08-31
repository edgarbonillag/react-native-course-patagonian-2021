import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MainNavigator from './src/navigation/MainNavigator';
import { navigationRef } from './src/navigation/controls';

import { API_URL } from './src/config/envVariables';

const App = () => {
  console.log('API_URL', API_URL);
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
