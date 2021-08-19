import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
