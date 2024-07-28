import nowPlaying from './mockData/nowPlaying';
import popular from './mockData/popular';
import topRated from './mockData/topRated';
import upComing from './mockData/upComing';

const status = 200;
type TOptions = 'nowPlaying' | 'popular' | 'topRated' | 'upComing';

export const fetchMoviesApi = async (type: TOptions) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type === 'nowPlaying') {
        resolve(nowPlaying.results);
      }
      if (type === 'popular') {
        resolve(popular.results);
      }
      if (type === 'topRated') {
        resolve(topRated.results);
      }
      if (type === 'upComing') {
        resolve(upComing.results);
      }
    }, 200);
    if (status !== 200) {
      reject({errorCode: 501, message: 'somthing went wrong'});
    }
  });
};
