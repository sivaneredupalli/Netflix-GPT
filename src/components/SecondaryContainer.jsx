import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movie)
  return (
    <div className='bg-black w-screen' >
      <div className='-mt-45 pl-3 pr-3 relative z-20'>
      {/* Now Playing movies are added here as addMovies */}
      <MovieList title={"Now Playing"} movies={movies.addMovies}/>  
      <MovieList title={"Popular"} movies={movies.addPopularMovies}/>
      <MovieList title={"Upcoming"} movies={movies.addUpcomingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.addTopRatedMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
