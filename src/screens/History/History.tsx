import React from 'react';
import { View } from 'react-native';

import { DefaultButton, Header, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen, resetNavigation } from '../../navigation/controls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const logOut = async () => {
  try {
    await AsyncStorage.setItem('userLoggedInFlag', 'false');
    resetNavigation();
  } catch (error) {
    console.log('Error storing userLoggedInFlag', error);
  }
};

const HistoryScreen = () => {
  return (
    <>
      <Header showBackButton={false} title="History" />
      <View style={styles.mainContainer}>
        <Typography size={18}>History Screen</Typography>
        <Separator size={10} />
        <DefaultButton text="Go To Experimental Screen" onPress={goToExperimentalScreen} />
        <Separator size={10} />
        <DefaultButton variant="secondary" text="Log Out" onPress={logOut} />
      </View>
    </>
  );
};

export default HistoryScreen;
