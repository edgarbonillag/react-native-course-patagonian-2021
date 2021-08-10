import React from 'react';
import { View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';

// @ts-ignore
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        Welcome Screen
      </Typography>
      <Separator size={15} />
      <DefaultButton
        text="Go To Experimental Screen"
        textSize={16}
        onPress={() => navigation.navigate('Experimental')}
      />
    </View>
  );
};

export default WelcomeScreen;
