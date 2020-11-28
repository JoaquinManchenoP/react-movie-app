import React from "react";
import "./WatchListCard.css";

export default function WatchListCard({ movie, type }) {
  return (
    <div className="movie__card">
      <div className="movie__image">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path} `}
            alt="movie pos"
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
          {movie.release_date ? (
            <span>{movie.release_date.substring(0, 4)}</span>
          ) : (
            <span>Year Not found</span>
          )}
        </div>
      </div>
    </div>
  );
}
