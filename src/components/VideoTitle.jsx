import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='flex flex-col py-36 px-12'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='text-xl py-6 font-semibold w-1/2'>{overview}</p>
        <div className='flex gap-2'>
            <button className='bg-white text-black py-2 px-6 font-semibold border-2 rounded-md'>▶ Play</button>
            <button className='bg-gray-300 text-white py-2 px-6 font-semibold border-2 rounded-md'>ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle