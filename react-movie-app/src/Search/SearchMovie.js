import React, { useState, useEffect } from "react";
import "./SearchMovie.css";
import MovieCard from "../MovieCard";


const API_KEY = "4bc54e15840b8c23edd2fc082eff2e0e";

export default function SearchMovie() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
    console.log(input);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.errors) {
          setResults(data.results);
          console.log(results);
        } else {
          setResults([]);
        }
      });
  }

  return (
    <div className="search">
      <div>
        <input
          onChange={handleChange}
          placeholder="Search for Movie"
          className="input"
          value={input}
        ></input>
        <div>
          {results.map((movie, index) => (
           // <ul key={index}>{movie.title}</ul>
           <MovieCard movie = {movie}/>
          ))}
        </div>
      </div>
      <div>


        
      </div>
    </div>
  );
}
