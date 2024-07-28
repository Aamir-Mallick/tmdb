import React, {useEffect, useRef, useState} from 'react';
import {Card, Text} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import {Image} from 'react-native';

const DetailsPage = () => {
  const route = useRoute();
  const {title, releaseDate, averageRating, poster, description} =
    route?.params;

  return (
    <Card>
      <Image
        style={{
          width: '100%',
          height: 300,
        }}
        alt="img"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${poster}`,
        }}
      />
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium">{releaseDate}</Text>
        <Text variant="bodyMedium">Rating: {averageRating}</Text>
        <Text variant="bodyMedium">description: {description}</Text>
      </Card.Content>
      {/* <Avatar.Image
      size={24}
      source={{uri: `https://image.tmdb.org/t/p/w500${poster}`}}
    /> */}
    </Card>
  );
};

export default DetailsPage;
