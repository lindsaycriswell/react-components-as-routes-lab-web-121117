import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      {console.log(movies)}
      <h1>Movies Page</h1>
      {movies.map(movie => (
        <div key={movie.title}>
          <h3>{movie.title}</h3>
          <p>Time: {movie.time} minutes</p>
          <ul>{movie.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
