import React from 'react';
import { View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';

import { resetNavigation } from '../../navigation/controls';

const HistoryScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20}>History Screen</Typography>
      <Separator size={10} />
      <DefaultButton text="Log Out" onPress={resetNavigation} />
    </View>
  );
};

export default HistoryScreen;
