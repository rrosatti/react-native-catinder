import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import styles from './styles';

interface NoButtonProps {
  onPress: () => void;
}

const NoButton = ({ onPress }: NoButtonProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={require('../../assets/close.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

export default NoButton;
