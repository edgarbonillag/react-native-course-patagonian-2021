import { StyleSheet } from 'react-native';

import { IS_ANDROID } from '../../utils/constants';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: IS_ANDROID ? 50 : 40,
  },
  sideButtonContainer: {
    height: 40,
    width: 40,
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
  },
});

export default styles;
