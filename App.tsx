import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { AlertModal, DefaultButton, Typography } from './src/components';

import { colors } from './src/utils/theme';
import { DEVICE_WIDTH } from './src/utils/dimensions';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      <Typography color={colors.mainOrange} size={30}>
        Título
      </Typography>
      <View style={styles.subtitle}>
        <Typography>Subtitulo</Typography>
      </View>
      <Image
        resizeMode="contain"
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
      <DefaultButton onPress={showModal} text="Mostrar Hola Mundo" variant="secondary" />
      <AlertModal
        message="Hola Mundo 2!"
        onPressPrimaryButton={hideModal}
        primaryButtonText="Ok"
        onPressSecondaryButton={hideModal}
        secondaryButtonText="Cancel"
        visible={isModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.verylightBlue,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  subtitle: {
    marginBottom: 10,
  },
  image: {
    aspectRatio: 1,
    minHeight: 100,
    width: DEVICE_WIDTH * 0.4,
  },
});

export default App;
