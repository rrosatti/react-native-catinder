import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import styles from './styles';

interface LikeButtonProps {
  onPress: () => void;
}

const LikeButton = ({ onPress }: LikeButtonProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={require('../../assets/heart.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

export default LikeButton;
