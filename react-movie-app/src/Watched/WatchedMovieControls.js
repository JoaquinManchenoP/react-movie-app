import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { GlobalContext } from "../context/GlobalState";

export default function WatchedMovieControls({ movie, type }) {
  const { removeMovieFromWatched } = useContext(GlobalContext);
  return (
    <div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          style={
            ({ maxWidth: "70px", maxHeight: "40px" }, { fontSize: "11px" })
          }
          onClick={() => removeMovieFromWatched(movie.id)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
