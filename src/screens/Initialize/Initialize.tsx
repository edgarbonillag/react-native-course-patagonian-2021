import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { replaceRoute } from '../../navigation/controls';
import { colors } from '../../utils/theme';
import styles from './styles';

const goToMainTabs = async () => {
  try {
    await AsyncStorage.setItem('userLoggedInFlag', 'true');
    replaceRoute('TabNavigator');
  } catch (error) {
    console.log('Error storing userLoggedInFlag', error);
  }
};

const checkIfUserIsLoggedIn = async () => {
  try {
    const value = await AsyncStorage.getItem('userLoggedInFlag');
    if (value !== null && value === 'true') {
      goToMainTabs();
    } else {
      replaceRoute('AuthStack');
    }
  } catch (error) {
    console.log('Error getting userLoggedInFlag', error);
  }
};

const InitializeScreen = () => {
  useEffect(() => {
    setTimeout(checkIfUserIsLoggedIn, 1000);
  }, []);

  return (
    <View style={styles.wholeScreenCenter}>
      <ActivityIndicator size="large" color={colors.mainOrange} />
    </View>
  );
};

export default InitializeScreen;
