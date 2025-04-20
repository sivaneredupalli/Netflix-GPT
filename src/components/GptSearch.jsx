import React from 'react'
import { LOGIN_BG } from '../utils/Constants'
import GptSearchBar from './GptSearchBar'
import GptSearchMovieSuggestion from './GptSearchMovieSuggestion'

const GptSearch = () => {
  return (
    <div className="relative w-full h-screen ">
        <div className="fixed inset-0 -z-10 ">
              <img  src = {LOGIN_BG} alt='background image' />
            </div>
            <div className="pt-[10%] flex flex-col items-center ">
            <GptSearchBar/>
            <GptSearchMovieSuggestion/>
            </div>
        </div>
  )
}

export default GptSearch