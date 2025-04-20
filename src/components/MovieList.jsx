import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({title,movies}) => {
  return movies && (
    <div className='px-24'>
        <h1 className='text-2xl py-3 text-white'>{title}</h1>
        <div className='flex  overflow-x-scroll scrollbar-hide'>
        <div className='flex'>
       { movies.map((card)=>
        <MovieCard key={card.id} posterPath ={card.poster_path}/>)}
        </div>  
    </div>
    </div>
    
  )
}

export default MovieList