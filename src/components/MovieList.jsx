import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    console.log(movies);
  return (
        <div className='px-12 my-4'>
            <h1 className='text-2xl font-light py-3 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex gap-6'>
                {
                    movies?.map((movie)=>(
                        <MovieCard key={movie.id} posterPath={movie.poster_path} title={movie.title}/>
                    ))
                }
                </div>
            </div>
        </div>
  )
}

export default MovieList