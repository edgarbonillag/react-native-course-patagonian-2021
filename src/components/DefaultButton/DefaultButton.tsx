import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  onPress: () => void;
}

const DefaultButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Text>Hola</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
