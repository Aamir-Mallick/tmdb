import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import Movies from './movies/movies';
import {useFetchMovies} from './hooks';
import {TOptions} from '../services/api';

const filterOptions = ['nowPlaying', 'popular', 'topRated', 'upComing'];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    data: movies,
    isLoading,
    error,
    fetchData,
  } = useFetchMovies(filterOptions[0] as TOptions);

  const handlePress = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
    fetchData(filterOptions[index]);
  };

  return (
    <View>
      <FlatList
        data={filterOptions}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => handlePress(index)}>
              <View
                style={{
                  ...styles.container,
                  backgroundColor:
                    currentIndex === index ? '#f5c542' : '#ffffff',
                }}>
                <Text style={styles.fontStyle}>{item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <ScrollView>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            animating={true}
            color={MD2Colors.red800}
          />
        ) : (
          movies?.map(
            ({
              id,
              title,
              release_date,
              poster_path,
              vote_average,
              overview,
            }) => {
              return (
                <Movies
                  key={id}
                  id={id}
                  title={title}
                  releaseDate={release_date}
                  poster={poster_path}
                  averageRating={vote_average}
                  description={overview}
                />
              );
            },
          )
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    borderColor: '#f5c542',
    borderWidth: 2,
    marginRight: 15,
    borderRadius: 12,
  },
  fontStyle: {
    color: '#36303f',
    fontWeight: 700,
  },
});

export default Home;
