//import React from 'react';
import ReactDOM from 'react-dom';
import * as React from "react";
//import logo from './logo.svg';
//import './App.css';
// import particlesJS from 'particles-js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Home/Home";
// import Carousel from 'react-bootstrap/Carousel';

export class App extends React.Component {
  render() {
      return (
        <Router basename={process ? process.env.PUBLIC_URL : ""}>
          <div>
              <header>

              </header>
              <div className="container mt-5">
                  <Switch>
                      <Route path="/" exact component={Home} />
                  </Switch>
              </div>
              <footer className="mb-5"/>
          </div>
      </Router>
      );
  }
}



export default App;
