import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
        <div>
          Name: {movies[0].title}
          Time: {movies[0].time}
          <ul> Genres
            <li>{movies[0].genres[0]}</li>
            <li>{movies[0].genres[1]}</li>
            <li>{movies[0].genres[2]}</li>
          </ul>
        </div>
        <div>
          Name: {movies[1].title}
          Time: {movies[1].time}
          <ul> Genres
            <li>{movies[1].genres[0]}</li>
            <li>{movies[1].genres[1]}</li>
            <li>{movies[1].genres[2]}</li>
            <li>{movies[1].genres[3]}</li>
            <li>{movies[1].genres[4]}</li>
          </ul>
        </div>
        <div>
          Name: {movies[2].title}
          Time: {movies[2].time}
          <ul> Genres
            <li>{movies[2].genres[0]}</li>
            <li>{movies[2].genres[1]}</li>
            <li>{movies[2].genres[2]}</li>
            <li>{movies[2].genres[3]}</li>
            <li>{movies[2].genres[4]}</li>
          </ul>
        </div>
    </div>
  );
}

export default Movies;
