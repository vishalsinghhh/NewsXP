import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Error from './pages/Error'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route>
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
