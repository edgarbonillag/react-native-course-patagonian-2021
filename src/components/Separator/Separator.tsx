import React from 'react';
import { View } from 'react-native';

interface Props {
  isHorizontal?: boolean;
  size: number;
}

const Separator = ({ isHorizontal, size }: Props) => (
  <View style={isHorizontal ? { width: size } : { height: size }} />
);

export default Separator;
