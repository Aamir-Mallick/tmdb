import React, {useEffect, useRef, useState} from 'react';
import {View, Image} from 'react-native';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';

const DetailsPage = () => {
  const route = useRoute();
  const {title, releaseDate, averageRating, poster, description} =
    route?.params;

  return (
    <Card>
      <Card.Cover
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
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
      {/* <Image
        style={{
          width: 100,
          height: 100,
        }}
        alt="img"
        source={{
          uri: `https://image.tmdb.org/t/p/w500/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg`,
        }}
      /> */}
    </Card>
  );
};

export default DetailsPage;
