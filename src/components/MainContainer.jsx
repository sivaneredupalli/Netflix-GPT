import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
  const movies = useSelector((store)=>store.movie?.addMovies);
  if(!movies) return;
  const mainMovie = movies[0];
  const {overview,original_title,id} = mainMovie;
  return (
    <div>
      <VideoTitle overview ={overview} title={original_title}/>
      <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer