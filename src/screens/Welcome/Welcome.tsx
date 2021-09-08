import React from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen, replaceRoute } from '../../navigation/controls';

const goToMainTabs = async () => {
  try {
    await AsyncStorage.setItem('userLoggedInFlag', 'true');
    replaceRoute('TabNavigator');
  } catch (error) {
    console.log('Error storing userLoggedInFlag', error);
  }
};

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const WelcomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        Welcome Screen
      </Typography>
      <Separator size={15} />
      <DefaultButton text="Go To Tabs" textSize={16} onPress={goToMainTabs} />
      <Separator size={10} />
      <DefaultButton
        text="Go To Experimental Screen"
        textSize={16}
        onPress={goToExperimentalScreen}
        variant="secondary"
      />
    </View>
  );
};

export default WelcomeScreen;
