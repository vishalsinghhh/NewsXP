import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import Error from "./pages/Error";
// import components
import Navbar from 

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;
