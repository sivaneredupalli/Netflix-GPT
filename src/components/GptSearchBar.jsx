import React from 'react'
import lang from '../utils/configConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const language = useSelector(store => store.config.language)
  return (
    <div className='w-full flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12 rounded-r-2xl' onSubmit={(e)=>e.preventDefault()}>
            <input type="search" className='text-black text-xl col-span-9 px-8 m-1 bg-white'placeholder={lang[language].searchPlaceHolder} />
            <button className='col-span-3 p-4 m-1 rounded-lg bg-red-600 text-white hover: cursor cursor-pointer'> {lang[language].Search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;