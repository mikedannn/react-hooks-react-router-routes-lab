import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
        <div>
          Name: {actors[0].name}
          <ul> Movies
            <li>{actors[0].movies[0]}</li>
            <li>{actors[0].movies[1]}</li>
            <li>{actors[0].movies[2]}</li>
          </ul>
        </div>
        <div>
          Name: {actors[1].name}
          <ul> Movies
            <li>{actors[1].movies[0]}</li>
            <li>{actors[1].movies[1]}</li>
            <li>{actors[1].movies[2]}</li>
          </ul>
        </div>
        <div>
          Name: {actors[2].name}
          <ul> Movies
            <li>{actors[2].movies[0]}</li>
            <li>{actors[2].movies[1]}</li>
          </ul>
        </div>
        <div>
          Name: {actors[3].name}
          <ul> Movies
            <li>{actors[3].movies[0]}</li>
            <li>{actors[3].movies[1]}</li>
            <li>{actors[3].movies[2]}</li>
          </ul>
        </div>
        
    </div>
  );
}

export default Actors;
