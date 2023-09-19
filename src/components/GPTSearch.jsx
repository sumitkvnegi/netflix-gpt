import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSuggestions from './GPTSuggestions'
import { BACKGROUND } from '../utils/constants'
import tw from 'tailwind-styled-components'

const GPTSearch = () => {
  return (
    <div className='text-white'>
        <ImageContainer>
        <img src={BACKGROUND} alt="background" />
      </ImageContainer>
        <GPTSearchBar/>
        <GPTSuggestions/>
    </div>
  )
}

export default GPTSearch

const ImageContainer = tw.div`absolute w-full -z-10`;
