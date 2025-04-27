import React from 'react'
import { PostImage_CDN_URL } from '../utils/Constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-28 md:w-45 p-6 '>
        <img className=' border-solid duration-150 ease-in-out text-white transform hover:-translate-1 hover:scale-110 hover:cursor-pointer rounded-lg border' src={PostImage_CDN_URL+posterPath} alt="CardImage" />
    </div>
  )
}

export default MovieCard;
