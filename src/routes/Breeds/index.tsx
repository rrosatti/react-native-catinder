import React from 'react';
import { View } from 'react-native';
import axios from 'axios';

import type { BreedTileProps } from '../../components/BreedTile';
import BreedStack from '../../components/BreedStack';
import NoButton from '../../components/NoButton';
import LikeButton from '../../components/LikeButton';

import styles from './styles';

const noOp = () => {};

interface IBreed {
  id: string;
  name: string;
  origin: string;
  affectionLevel: number;
}

interface IImage {
  id: string;
  url: string;
}

const defaultBreeds: IBreed[] = [];

const Breeds = (): JSX.Element => {
  const [breeds, setBreeds] = React.useState<IBreed[]>(defaultBreeds);
  const [breedTiles, setBreedTiles] = React.useState<BreedTileProps[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState('');

  React.useEffect((): void => {
    setLoading(true);
    axios
      .get<IBreed[]>('https://api.thecatapi.com/v1/breeds?limit=10', {
        headers: {
          'x-api-key': 'c879a350-6289-4a64-845b-f7287e76618a',
        },
      })
      .then((response) => {
        setBreeds(response.data);
      })
      .catch((ex) => {
        setError((ex as Error).message);
      });
  }, []);

  React.useEffect((): void => {
    const getImages = async (): Promise<void> => {
      const tempBreedTileProps: BreedTileProps[] = [];
      setLoading(true);
      if (breeds.length > 0) {
        for (let i = 0; i < breeds.length; i++) {
          const breed = breeds[i];
          try {
            const response = await axios.get<IImage[]>(
              `https://api.thecatapi.com/v1/images/search?breed_id=${breed.id}`,
              {
                headers: {
                  'x-api-key': 'c879a350-6289-4a64-845b-f7287e76618a',
                },
              },
            );
            if (response.data.length) {
              tempBreedTileProps.push({
                ...breed,
                imgSrc: { uri: response.data[0].url },
              });
            }
          } catch (e) {
            setError((e as Error).message);
          }
        }
        setLoading(false);
        setBreedTiles(tempBreedTileProps);
      }
    };

    getImages();
  }, [breeds]);

  React.useEffect((): void => {
    console.log('Error: ', error);
  }, [error]);

  return (
    <View style={styles.container}>
      <BreedStack items={breedTiles} loading={loading} />
      <View style={styles.buttonsContainer}>
        <NoButton onPress={noOp} />
        <View style={styles.likeButtonContainer}>
          <LikeButton onPress={noOp} />
        </View>
      </View>
    </View>
  );
};

export default Breeds;
