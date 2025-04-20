import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptSearchMovieSuggestion = () => {
  const {gptSearchMovies,tmdbSearchMovies} = useSelector(store => store.gptSearch)
  if(!gptSearchMovies) return null;
   return (
    <div className='m-20 p-4 text-white bg-black opacity-80 absolute w-[80%]'>
      <div className='m-6'>
     {gptSearchMovies.map( (gptSearchMovies,index)=><MovieList key={gptSearchMovies} title={gptSearchMovies} movies={tmdbSearchMovies[index]?.results}/>)
       }
      </div>
    </div>
  )
}

export default GptSearchMovieSuggestion