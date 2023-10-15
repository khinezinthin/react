import React from "react";

const movie = ({ movie }) => {
  return (
    <div className="flex flex-col">
      <h1>{movie.title}</h1>
      <img
        className="w-[400px]"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt=""
      />
    </div>
  );
};

export default movie;
