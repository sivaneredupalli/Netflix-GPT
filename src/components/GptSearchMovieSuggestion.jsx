import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptSearchMovieSuggestion = () => {
  const {gptSearchMovies,tmdbSearchMovies} = useSelector(store => store.gptSearch)
  if(!gptSearchMovies) return null;
   return (
    <div className='m-60 px-1 text-white bg-black opacity-85 absolute w-75 md:w-[85%]'>
      <div className='md:m-4'>
     {gptSearchMovies.map( (gptSearchMovies,index)=><MovieList key={gptSearchMovies} title={gptSearchMovies} movies={tmdbSearchMovies[index]?.results}/>)
       }
      </div>
    </div>
  )
}

export default GptSearchMovieSuggestion