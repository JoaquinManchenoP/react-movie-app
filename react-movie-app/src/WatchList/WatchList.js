import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import WatchListCard from "./WatchListCard";
import WatchListMovieControls from "./WatchListMovieControls";

export default function WatchList() {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div>
      {watchlist.length > 0 ? (
        <div className="watchlist">
          {watchlist.map((movie) => (
            <WatchListCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="no__movies">
          <h3>There are no movies in your Watch List</h3>
        </div>
      )}
    </div>
  );
}
