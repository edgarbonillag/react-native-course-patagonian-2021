import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, View } from 'react-native';

import { DefaultButton } from './src/components';

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
      <Text style={styles.title}>Título</Text>
      <Text>Subtitulo</Text>
      <Image
        resizeMode="contain"
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
      <DefaultButton onPress={showModal} text="Mostrar Hola Mundo" variant="secondary" />
      <Modal animationType="fade" transparent visible={isModalVisible}>
        <View style={styles.modalMainContainer}>
          <View style={styles.modalInnerAlert}>
            <Text style={styles.modalText}>¡Hola Mundo!</Text>
            <DefaultButton onPress={hideModal} text="Ok" additionalStyle={styles.modalButton} />
          </View>
        </View>
      </Modal>
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
  modalMainContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  modalInnerAlert: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 13,
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 10,
    width: '65%',
  },
  modalButton: {
    height: 40,
  },
  modalText: {
    fontSize: 18,
    marginVertical: 20,
  },
  title: {
    color: colors.mainOrange,
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  image: {
    aspectRatio: 1,
    minHeight: 100,
    width: DEVICE_WIDTH * 0.4,
  },
});

export default App;
