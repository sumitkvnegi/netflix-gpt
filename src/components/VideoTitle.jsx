import React from 'react'
import {FaPlay, FaInfoCircle} from 'react-icons/fa'
import tw from 'tailwind-styled-components'

const VideoTitle = ({title, overview}) => {
  return (
    <Wrapper>
        <Title>{title}</Title>
        <Para>{overview}</Para>
        <Buttons>
            <button className='bg-gray-200 shadow-md opacity-50 flex justify-center items-center gap-1 text-black py-2 px-6 font-semibold  rounded-sm'><FaPlay/> Play</button>
            <button className='bg-gray-900  opacity-90 flex justify-center items-center gap-1 text-white py-2 px-6 font-normal border-gray-900 shadow-md border-2 rounded-sm'><FaInfoCircle/> More Info</button>
        </Buttons>
    </Wrapper>
  )
}

export default VideoTitle

const Wrapper = tw.div`flex flex-col pt-0 px-12 absolute top-0 left-0 bg-gradient-to-r from-gray-950 w-screen aspect-video -z-0 text-white`
const Title = tw.h1`text-4xl mt-52 font-bold tracking-wide`
const Para = tw.p`text-lg py-4 font-light w-1/3`
const Buttons = tw.div`flex gap-2` 
