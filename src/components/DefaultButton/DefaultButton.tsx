import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../../utils/theme';

import styles, { buttonTextColors } from './styles';

interface Props {
  additionalStyle?: ViewStyle;
  onPress: () => void;
  text: string;
  textSize?: number;
  variant?: 'primary' | 'secondary';
}

const DefaultButton = ({
  additionalStyle,
  onPress,
  text,
  textSize,
  variant = 'primary',
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, styles[variant], additionalStyle]}
      onPress={onPress}
    >
      <Text style={{ color: buttonTextColors[variant] || colors.white, fontSize: textSize }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  textSize: 18,
  variant: 'primary',
};

export default DefaultButton;
