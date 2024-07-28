import nowPlaying from './mockData/nowPlaying';
import popular from './mockData/popular';
import topRated from './mockData/topRated';
import upComing from './mockData/upComing';

const status = 200;
export type TOptions = 'now Playing' | 'popular' | 'top Rated' | 'up Coming';

export const fetchMoviesApi = async (type: TOptions) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type === 'now Playing') {
        resolve(nowPlaying.results);
      }
      if (type === 'popular') {
        resolve(popular.results);
      }
      if (type === 'top Rated') {
        resolve(topRated.results);
      }
      if (type === 'up Coming') {
        resolve(upComing.results);
      }
    }, 500);
    if (status !== 200) {
      reject({errorCode: 501, message: 'somthing went wrong'});
    }
  });
};
