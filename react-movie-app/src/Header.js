import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="website__title">
        <span>My WatchList</span>
      </div>

      <div className="nav__bar">
        <div className="watched__button">
          <Link to="/watched" style={{ textDecoration: "none" }}>
            <Button
              color="primary"
              variant="contained"
              style={
                ({ maxWidth: "30px", maxHeight: "30px" }, { fontSize: "11px" })
              }
            >
              <span>Watched</span>
            </Button>
          </Link>
        </div>

        <div className="watchlist__button">
          <Link to="/watchlist" style={{ textDecoration: "none" }}>
            <Button
              color="primary"
              variant="contained"
              style={
                ({ maxWidth: "30px", maxHeight: "30px" }, { fontSize: "11px" })
              }
            >
              <span>WatchList</span>
            </Button>
          </Link>
        </div>

        <div className="search__button">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              color="secondary"
              variant="contained"
              style={
                ({ maxWidth: "30px", maxHeight: "30px" }, { fontSize: "11px" })
              }
            >
              <span>Search</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
