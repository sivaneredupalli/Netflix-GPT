import React from 'react'

const VideoTitle = ({overview,title}) => {
  return (
    <div className='w-screen aspect-video md:pt-[12%] px-18 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='hidden md:block text-sm md:text-2xl align-middle font-bold'>{title}</h1>
      <p className='hidden md:block text-sm md:text-lg my-3 w-1/4 '>{overview}</p>
    </div>
  )
}
export default VideoTitle