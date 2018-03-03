import React from "react";
import { actors } from "../data";

const Actors = () => {
  return (
    <div>
      {console.log(actors)}
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <div key={actor.name}>
          {actor.name}
          <ul>{actor.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
