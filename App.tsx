import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

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
    <>
      <SafeAreaView style={styles.safeArea} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContainer}>
          <Typography color={colors.mainOrange} size={30} variant="bold">
            Título
          </Typography>
          <View style={styles.subtitle}>
            <Typography variant="medium">Subtitulo</Typography>
          </View>
          <Image
            resizeMode="contain"
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
          />
          <Image
            resizeMode="contain"
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
          />
          <Image
            resizeMode="contain"
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
          />
          <Image
            resizeMode="contain"
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
          />
          <Image
            resizeMode="contain"
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
          />
          <Image
            resizeMode="contain"
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
          />
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
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    minHeight: 100,
    width: DEVICE_WIDTH * 0.4,
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.verylightBlue,
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 30,
    width: '100%',
  },
  safeArea: {
    backgroundColor: colors.verylightBlue,
  },
  scrollView: {
    backgroundColor: colors.verylightBlue,
    flex: 1,
    width: '100%',
  },
  subtitle: {
    marginBottom: 10,
  },
});

export default App;
