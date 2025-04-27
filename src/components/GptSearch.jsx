import React from 'react'
import { LOGIN_BG } from '../utils/Constants'
import GptSearchBar from './GptSearchBar'
import GptSearchMovieSuggestion from './GptSearchMovieSuggestion'

const GptSearch = () => {
  return (

       <> <div className="fixed  -z-10 ">
              <img className='h-screen object-cover md:w-screen' src = {LOGIN_BG} alt='background image' />
            </div>
            <div className="  flex flex-col items-center ">
            <GptSearchBar/>
            <GptSearchMovieSuggestion/>
            </div></>
    
  )
}

export default GptSearch