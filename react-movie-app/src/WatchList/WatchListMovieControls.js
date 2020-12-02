import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { GlobalContext } from "../context/GlobalState";

export default function WatchListMovieControls({ movie, type }) {
  const { removeMovieFromWatchList } = useContext(GlobalContext);

  return (
    <div>
      <div>
        <Button
          variant="contained"
          color="primary"
          style={
            ({ maxWidth: "70px", maxHeight: "40px" }, { fontSize: "11px" })
          }
        >
          Add to Watched
        </Button>
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
  );
}
