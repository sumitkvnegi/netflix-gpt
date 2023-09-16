import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS, Video_URL } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

  // * fetch trailer video && updating the store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      Video_URL + movieId + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((i) => i.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer