import React from 'react';
import { View } from 'react-native';

import type { BreedTileProps } from '../../components/BreedTile';
import BreedStack from '../../components/BreedStack';

import styles from './styles';

const mockedInfo: BreedTileProps = {
  id: 'testing',
  imgSrc: require('../../assets/mocked-cat.png'),
  name: 'Abyssinian',
  lifeSpan: '4',
  origin: 'Egypt',
};

const mockedInfo2: BreedTileProps = {
  id: 'testing2',
  imgSrc: require('../../assets/mocked-cat.png'),
  name: 'Another Cat',
  lifeSpan: '7',
  origin: 'France',
};

const mockedInfo3: BreedTileProps = {
  id: 'testing3',
  imgSrc: require('../../assets/mocked-cat.png'),
  name: 'Again, other cat',
  lifeSpan: '19',
  origin: 'Canada',
};

const Breeds = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <BreedStack items={[mockedInfo, mockedInfo2, mockedInfo3]} />
    </View>
  );
};

export default Breeds;
