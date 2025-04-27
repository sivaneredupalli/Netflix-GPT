import React, { useRef } from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa' // install react-icons if not yet
// import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from "react-icons/hi2";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -1300, behavior: "smooth" })
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 1300, behavior: "smooth" })
  }

  return movies && (
    <div className="px-6 my-6 relative">
      {/* Movie Title */}
      <h1 className="text-2xl py-3 text-white overflow-x-auto whitespace-nowrap">{title}</h1>

      {/* Left Arrow */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10 hover:bg-opacity-80 rounded-full  hover:scale-110 transition-transform cursor-pointer"
        onClick={scrollLeft}
      >
        <FaChevronLeft size={20} />
        {/* <HiOutlineChevronDoubleLeft size={20} /> */}
      </button>

      {/* Scrollable Movie Cards */}
      <div ref={scrollRef} className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex md:gap-0.2">
          {movies.map((card) => (
            <Link to={`/browser/${card.id}`} key={card.id}>
              <MovieCard posterPath={card.poster_path} />
            </Link>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black hover:opacity-80 text-white p-2 z-10 hover:scale-110 transition-transform rounded-full  cursor-pointer"
        onClick={scrollRight}
      >
        <FaChevronRight size={20} />
        {/* <HiOutlineChevronDoubleRight size={20} /> */}
      </button>
    </div>
  )
}

export default MovieList
