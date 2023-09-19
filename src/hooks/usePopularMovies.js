import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS, POPULAR_URL } from '../utils/constants';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
  
  // * Fetch data from TMDB API and update the store
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_URL, API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(()=>{
    getPopularMovies();
  }, []);

};

export default usePopularMovies;
