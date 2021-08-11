import React from 'react';
import { View } from 'react-native';

import { Typography } from '../../components';

import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography>Home Screen</Typography>
    </View>
  );
};

export default HomeScreen;
