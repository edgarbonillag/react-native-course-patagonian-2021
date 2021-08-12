import React from 'react';
import { View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen, replaceRoute } from '../../navigation/controls';

const goToMainTabs = () => {
  replaceRoute('TabNavigator');
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
