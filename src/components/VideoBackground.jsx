import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  return (
    <div>
      <iframe 
      className="w-screen aspect-video -z-20"
      title="YouTube Video Player"
      // src={"https://www.youtube.com/embed/"+trailerVideo?.key}
      src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1"}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
