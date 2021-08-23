import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Separator from '../Separator';
import Typography from '../Typography';
import styles from './styles';
import { colors } from '../../utils/theme';

import { goBack } from '../../navigation/controls';

interface Props {
  onPressBackButton?: () => void;
  onPressRightButton?: () => void;
  RightSideComponent?: React.FC;
  showBackButton?: boolean;
  title: string;
}

const Header = ({
  onPressBackButton,
  onPressRightButton,
  RightSideComponent,
  showBackButton,
  title,
}: Props) => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.mainContainer}>
        {showBackButton ? (
          <TouchableOpacity onPress={onPressBackButton} style={styles.sideButtonContainer}>
            <MaterialIcon name="navigate-before" size={35} color={colors.black} />
          </TouchableOpacity>
        ) : (
          <Separator isHorizontal size={40} />
        )}
        <View style={styles.titleContainer}>
          <Typography variant="bold" size={17}>
            {title}
          </Typography>
        </View>
        {RightSideComponent ? (
          <TouchableOpacity onPress={onPressRightButton} style={styles.sideButtonContainer}>
            <RightSideComponent />
          </TouchableOpacity>
        ) : (
          <Separator isHorizontal size={40} />
        )}
      </View>
    </>
  );
};

Header.defaultProps = {
  onPressBackButton: goBack,
  onPressRightButton: () => {},
  showBackButton: true,
};

export default Header;
