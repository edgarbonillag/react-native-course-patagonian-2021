import React from 'react';
import { Modal, Text, View } from 'react-native';

import DefaultButton from '../DefaultButton';
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
        <Text style={styles.text}>{message}</Text>
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
