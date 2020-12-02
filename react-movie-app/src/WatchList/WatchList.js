import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import WatchListCard from "./WatchListCard";

export default function WatchList() {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div>
      <div className="title">
        <h2>Watch List</h2>
      </div>
      {watchlist.length > 0 ? (
        <div className="watchlist">
          {watchlist.map((movie) => (
            <WatchListCard movie={movie} type="watchlist" />
          ))}
        </div>
      ) : (
        <div className="no__movies">
          <h3>no movies in the watchlist</h3>
        </div>
      )}
    </div>
  );
}
