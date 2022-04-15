import React from 'react';
import { View, Image, Text } from 'react-native';
import type { ImageSourcePropType } from 'react-native';

import styles from './styles';

export interface BreedTileProps {
  id: string;
  imgSrc: ImageSourcePropType;
  name: string;
  origin: string;
  lifeSpan: string;
}

const BreedTile = ({
  imgSrc,
  name,
  origin,
  lifeSpan,
}: BreedTileProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image source={imgSrc} style={styles.image} />
      <View style={styles.bottomContentContainer}>
        <View style={styles.nameLifeSpanContainer}>
          <Text style={styles.nameLifeSpanText}>{name}</Text>
          <View>
            <View>
              <Text style={styles.nameLifeSpanText}>{lifeSpan}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.originText}>{origin}</Text>
      </View>
    </View>
  );
};

export default BreedTile;
