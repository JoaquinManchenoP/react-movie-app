import React from "react";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  return (
    <div className="movie__card">
      <div className="movie__image">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path} `}
            alt={`${movie.poster_path}`}
          />
        ) : (
          <div className="filler__poster"></div>
        )}
      </div>

      <div className="movie__info">
        <div className="movie__title">
          <span>{movie.title}</span>
        </div>
        <div className="movie__year">
          <span>1996</span>
        </div>
      </div>
    </div>
  );
}
