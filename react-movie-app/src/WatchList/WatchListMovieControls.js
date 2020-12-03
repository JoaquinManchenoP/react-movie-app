import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { GlobalContext } from "../context/GlobalState";
import "./WatchListControls.css";

export default function WatchListMovieControls({ movie, type }) {
  const { removeMovieFromWatchList, addMovieToWatched } = useContext(
    GlobalContext
  );

  return (
    <div>
      <div className="watchlist__controls">
        <div className="add__toWatched">
          <Button
            variant="contained"
            color="primary"
            style={
              ({ maxWidth: "70px", maxHeight: "40px" }, { fontSize: "11px" })
            }
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </Button>
        </div>

        <div className="remove__button">
          <Button
            variant="contained"
            color="secondary"
            style={
              ({ maxWidth: "70px", maxHeight: "40px" }, { fontSize: "11px" })
            }
            onClick={() => removeMovieFromWatchList(movie.id)}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}
