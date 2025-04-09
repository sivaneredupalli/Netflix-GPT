
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovie from '../hooks/useNowPlayingMovies';
const Browser = () => {
  useNowPlayingMovie()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
    
  )
}

export default Browser;