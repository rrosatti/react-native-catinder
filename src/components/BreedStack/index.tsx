import React from 'react';
import { View, Text } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';

import BreedTile from '../../components/BreedTile';
import type { BreedTileProps } from '../../components/BreedTile';

import styles from './styles';

interface BreedStackProps {
  items: BreedTileProps[];
}

const BreedStack = ({ items }: BreedStackProps): JSX.Element => {
  const Cards = React.useMemo(
    (): JSX.Element[] =>
      items.map((item) => (
        <Card key={item.id}>
          <BreedTile {...item} />
        </Card>
      )),
    [items],
  );
  const NoMoreCards = React.useCallback(
    (): JSX.Element => (
      <View>
        <Text style={styles.noMoreCardsText}>
          {"Sorry, there's no more cats.\nTry again later :-)"}
        </Text>
      </View>
    ),
    [],
  );
  return (
    <CardStack style={styles.container} renderNoMoreCards={NoMoreCards}>
      {Cards}
    </CardStack>
  );
};

export default BreedStack;
