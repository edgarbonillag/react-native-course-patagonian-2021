import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MainNavigator from './src/navigation/MainNavigator';
import { navigationRef } from './src/navigation/controls';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
