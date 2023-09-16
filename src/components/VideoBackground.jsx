import React, { useEffect, useState } from "react";
import { API_OPTIONS, Video_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    const dispatch = useDispatch();

  // * fetch trailer video
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

  return (
    <div>
      <iframe 
      title="YouTube Video Player"
      src={"https://www.youtube.com/embed/"+trailerVideo?.key}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
