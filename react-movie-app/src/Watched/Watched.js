import React, { useContext } from "react";
import "./Watched.css";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "../MovieCard";
import WatchedCard from "../Watched/WatchedCard";

export default function Watched() {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="watched__card">
      <div className="title">
        <h3>Watched Movies</h3>
      </div>
      {watched.length > 0 ? (
        <div className="watchlist">
          {watched.map((movie) => (
            <WatchedCard movie={movie} type="watched" />
          ))}
        </div>
      ) : (
        <div className="no__movies">
          <h3>There are no Movies... add some</h3>
        </div>
      )}
    </div>
  );
}
