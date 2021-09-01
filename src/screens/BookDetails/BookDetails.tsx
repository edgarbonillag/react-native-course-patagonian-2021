import React from 'react';
import { View } from 'react-native';

import { Header, Separator, Typography } from '../../components';

import styles from './styles';

const BookDetailsScreen = () => {
  return (
    <>
      <Header title="Book Details" />
      <View style={styles.mainContainer}>
        <Typography size={18}>Book Detail Screen</Typography>
        <Separator />
      </View>
    </>
  );
};

export default BookDetailsScreen;
