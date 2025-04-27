import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { FiArrowLeft } from 'react-icons/fi'

const MoviePlayerPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()  
  const movieId = parseInt(id)

  // All possible movie sources
  const nowPlaying = useSelector(store => store.movie?.addMovies)
  const popular = useSelector(store => store.movie?.addPopularMovies)
  const upcoming = useSelector(store => store.movie?.addUpcomingMovies)
  const topRated = useSelector(store => store.movie?.addTopRatedMovies)
  const { tmdbSearchMovies} = useSelector(store => store.gptSearch)
  // Flatten the tmdbSearchMovies results
  const searchResults = tmdbSearchMovies
    ? tmdbSearchMovies.flatMap(page => page.results || [])
    : []
  

  // Combine all movies into one array (avoid duplicates if needed)
  const allMovies = [
    ...(nowPlaying || []),
    ...(popular || []),
    ...(upcoming || []),
    ...(topRated || []),
    ...searchResults,
  ]

  const movie = allMovies.find(m => (m.id || m.id) === movieId)

  if (!movie) {
    return <div className="text-white p-4">Loading or movie not found...</div>
  }

  return (
    <div className="relative bg-black">
      <button
        onClick={() => navigate('/browser')}
        className="absolute top-4 md:top-6 left-4 bg-white text-black px-1 md:px-3 py-1 rounded-lg shadow-md z-10 hover:cursor-pointer hover:opacity-80"
      >
        <FiArrowLeft className="inline mr-2" />Back
      </button>
      <VideoTitle overview={movie.overview} title={movie.original_title} />
      <VideoBackground id={movie.id} />
    </div>
  )
}

export default MoviePlayerPage
