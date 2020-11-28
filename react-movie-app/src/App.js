import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchMovie from "./Search/SearchMovie";
import WatchList from "./WatchList/WatchList";
import Watched from "./Watched/Watched";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/watchlist">
              <WatchList />
            </Route>
            <Route exact path="/">
              <SearchMovie />
            </Route>

            <Route path="/watched">
              <Watched />
            </Route>
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
