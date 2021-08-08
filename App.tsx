import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import { AlertModal, DefaultButton, Separator, Typography } from './src/components';

import { colors } from './src/utils/theme';
import { DEVICE_WIDTH } from './src/utils/dimensions';

const arr = Array.from({ length: 6 }, (_, index) => index);
// arr = [0, 1, 2, 3, 4, 5]

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
          <Typography variant="medium">Subtitulo</Typography>
          <Separator size={10} />
          {arr.map((item) => (
            <View key={`image-${item}`}>
              <Image
                resizeMode="contain"
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={styles.image}
              />
              <Separator size={10} />
            </View>
          ))}
          <View style={styles.horizontalContainer}>
            <Image
              resizeMode="contain"
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
              style={styles.image}
            />
            <Separator isHorizontal size={10} />
            <Image
              resizeMode="contain"
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
              style={styles.image}
            />
          </View>
          <Separator size={10} />
          <DefaultButton onPress={showModal} text="Mostrar Hola Mundo" variant="secondary" />
          <AlertModal
            message="¡Hola Mundo!"
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
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    aspectRatio: 1,
    minHeight: 50,
    width: DEVICE_WIDTH * 0.3,
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 30,
    width: '100%',
  },
  safeArea: {
    backgroundColor: colors.lightBlue,
  },
  scrollView: {
    backgroundColor: colors.lightBlue,
    flex: 1,
    width: '100%',
  },
});

export default App;
