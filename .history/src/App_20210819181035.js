import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Switch exact path="/">
        <Route>
          <Home />
        </Route>
        <Route exact path="/err">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
