import * as React from 'react';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface MoviesProps {
  id: number;
  title: string;
  releaseDate: string;
  poster: string;
  averageRating: number;
  description: string;
}

const Movies = (props: MoviesProps) => {
  const {id, title, releaseDate, poster, averageRating, description} = props;
  const navigation = useNavigation();

  return (
    <Card
      onPress={() => {
        navigation.navigate<any>('Details', {
          title,
          releaseDate,
          averageRating,
          poster,
          description,
        });
      }}
      key={id}>
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium">{releaseDate}</Text>
        <Text variant="bodyMedium">Rating: {averageRating}</Text>
      </Card.Content>
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        alt="img"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${poster}`,
        }}
      />
    </Card>
  );
};

export default Movies;
