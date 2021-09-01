import React, { ReactNode } from 'react';
import { Text } from 'react-native';

import { colors } from '../../utils/theme';

const typographyVariant = {
  bold: 'Raleway-Bold',
  italic: 'Raleway-Italic',
  medium: 'Raleway-Medium',
  regular: 'Raleway-Regular',
};
interface Props {
  align?: 'left' | 'center' | 'right' | 'justify';
  children: ReactNode;
  color?: string;
  numberOfLines?: number;
  size?: number;
  variant?: keyof typeof typographyVariant;
}

const getTextStyle = ({
  align,
  color,
  size,
  variant = 'regular',
}: Pick<Props, 'align' | 'color' | 'size' | 'variant'>) => {
  const textStyle = {
    color,
    fontSize: size,
    textAlign: align,
    fontFamily: typographyVariant[variant],
  };
  return textStyle;
};

const Typography = ({ align, children, color, numberOfLines, size, variant }: Props) => {
  const textStyle = getTextStyle({ align, color, size, variant });

  return (
    <Text allowFontScaling={false} style={textStyle} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

Typography.defaultProps = {
  align: 'left',
  color: colors.black,
  size: 14,
  variant: 'regular',
};

export default Typography;
