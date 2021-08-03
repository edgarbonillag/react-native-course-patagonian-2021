import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import { colors } from '../../utils/theme';

interface Props {
  align?: 'left' | 'center' | 'right' | 'justify';
  children: ReactNode;
  color?: string;
  size?: number;
}

const getTextStyle = ({ align, color, size }: Pick<Props, 'align' | 'color' | 'size'>) => {
  const textStyle = {
    color,
    fontSize: size,
    textAlign: align,
  };
  return textStyle;
};

const Typography = ({ align, children, color, size }: Props) => {
  const textStyle = getTextStyle({ align, color, size });

  return (
    <Text allowFontScaling={false} style={textStyle}>
      {children}
    </Text>
  );
};

Typography.defaultProps = {
  align: 'left',
  color: colors.black,
  size: 14,
};

export default Typography;
