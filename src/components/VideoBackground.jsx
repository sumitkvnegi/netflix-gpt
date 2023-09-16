import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

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
