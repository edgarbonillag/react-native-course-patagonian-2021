import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../../utils/theme';

import styles from './styles';

interface Props {
  additionalStyle?: ViewStyle;
  color?: string;
  onPress: () => void;
  text: string;
  textSize?: number;
}

const DefaultButton = ({ additionalStyle, color, onPress, text, textSize }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, additionalStyle, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={{ fontSize: textSize }}>{text}</Text>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  color: colors.mainOrange,
  textSize: 14,
};

export default DefaultButton;
