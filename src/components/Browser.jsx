
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovie from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browser = () => {
  const showGPTSearch = useSelector((store)=>store.gptSearch.showGPTSearch)
  useNowPlayingMovie()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()

  return (
    
    <div>
      <Header />
      { showGPTSearch ? <GptSearch/> :
      <>
      <MainContainer />
      <SecondaryContainer />
      </>
      }
    </div>
    
  )
}

export default Browser;