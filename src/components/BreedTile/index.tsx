import React from 'react';
import { View, Image, Text } from 'react-native';
import type { ImageSourcePropType } from 'react-native';

import styles from './styles';

export interface BreedTileProps {
  id: string;
  imgSrc: ImageSourcePropType;
  name: string;
  origin: string;
  affectionLevel: number;
}

const BreedTile = ({
  imgSrc,
  name,
  origin,
  affectionLevel,
}: BreedTileProps): JSX.Element => {
  console.log('AFfection level: ', affectionLevel);
  return (
    <View style={styles.container}>
      <Image source={imgSrc} style={styles.image} />
      <View style={styles.bottomContentContainer}>
        <View style={styles.nameAffectionLevelContainer}>
          <Text style={styles.nameAffectionLevelText}>{name}</Text>
          <View>
            <View>
              <Text style={styles.nameAffectionLevelText}>
                {affectionLevel}
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.originText}>{origin}</Text>
      </View>
    </View>
  );
};

export default BreedTile;
