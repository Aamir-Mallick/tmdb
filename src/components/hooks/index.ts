import {useEffect, useState} from 'react';
import {fetchMoviesApi, TOptions} from '../../services/api';

export const useFetchMovies = (type: TOptions) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = (type: TOptions) => {
    setIsLoading(true);
    fetchMoviesApi(type)
      .then(data => {
        console.log('data', data);
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!type) return;
    fetchData(type);
  }, [type]);

  return {
    data,
    error,
    isLoading,
    fetchData,
  };
};
