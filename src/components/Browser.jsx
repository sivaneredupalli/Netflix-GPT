
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovie from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';

const Browser = () => {
  useNowPlayingMovie()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
    
  )
}

export default Browser;