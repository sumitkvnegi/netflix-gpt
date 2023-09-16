import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      {/* 
        Main Video Container (video background and video title)
        Secondary Container - Movie lists (movie card * n)
      */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse