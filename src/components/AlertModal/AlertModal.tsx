import React from 'react';
import { Modal, View } from 'react-native';

import DefaultButton from '../DefaultButton';
import Typography from '../Typography';

import styles from './styles';

interface Props {
  message: string;
  onPressPrimaryButton: () => void;
  primaryButtonText: string;
  onPressSecondaryButton?: () => void;
  secondaryButtonText?: string;
  visible: boolean;
}

const AlertModal = ({
  message,
  onPressPrimaryButton,
  onPressSecondaryButton,
  primaryButtonText,
  secondaryButtonText,
  visible,
}: Props) => (
  <Modal animationType="fade" transparent visible={visible}>
    <View style={styles.mainContainer}>
      <View style={styles.innerAlert}>
        <View style={styles.textContainer}>
          <Typography size={18}>{message}</Typography>
        </View>
        <DefaultButton
          additionalStyle={styles.button}
          onPress={onPressPrimaryButton}
          text={primaryButtonText}
        />
        {secondaryButtonText && onPressSecondaryButton ? (
          <DefaultButton
            additionalStyle={styles.button}
            onPress={onPressSecondaryButton}
            text={secondaryButtonText}
            variant="secondary"
          />
        ) : null}
      </View>
    </View>
  </Modal>
);

AlertModal.defaultProps = {
  onPressSecondaryButton: null,
  secondaryButtonText: '',
};

export default AlertModal;
