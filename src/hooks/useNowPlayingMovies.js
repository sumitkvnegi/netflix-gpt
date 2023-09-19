import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS, URL } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
  
  // * Fetch data from TMDB API and update the store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(URL, API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(()=>{
    getNowPlayingMovies();
  }, []);

};

export default useNowPlayingMovies;
