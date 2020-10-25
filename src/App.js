import React from "react";
import { Element } from "react-scroll";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./HomePage";

function App() {
  require("dotenv").config();
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <Element id="top">{/* <Nav /> */}</Element>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
