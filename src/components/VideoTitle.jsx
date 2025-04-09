import React from 'react'

const VideoTitle = ({overview,title}) => {
  return (
    <div className='w-screen aspect-video pt-[10%] px-18 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p className=' text-lg my-3 w-1/4'>{overview}</p>
      <div className='my-8 w-auto'>
        <button className='p-2 w-30 bg-white text-black rounded-lg  font-bold hover:cursor-pointer hover:opacity-80'> Play</button>
        <button className='p-2 w-30 bg-gray-500 text-white rounded-lg mx-8 bg-opacity-50 font-bold hover:cursor-pointer'>🛈 More Info</button>
      </div>
    </div>
  )
}
export default VideoTitle