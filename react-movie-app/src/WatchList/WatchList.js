import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import WatchListCard from "./WatchListCard";

export default function WatchList() {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div>
      <div className="title">
        <h3>Watch List</h3>
      </div>
      {watchlist.length > 0 ? (
        <div className="watchlist">
          {watchlist.map((movie) => (
            <WatchListCard movie={movie} type="watchlist" />
          ))}
        </div>
      ) : (
        <div className="no__movies">
          <h3>No movies in the watchlist</h3>
        </div>
      )}
    </div>
  );
}
