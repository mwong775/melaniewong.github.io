//import React from 'react';
// import ReactDOM from 'react-dom';
import * as React from "react";
import Particles from 'react-particles-js'; // LEGIT ONE
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
                <Particles params={particleOpt} className="particles"/>
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

const particleOpt = {
              "particles": {
          "number": {
              "value": 60,
              "density": {
                  "enable": true,
                  "value_area": 1500
              }
          },
          "line_linked": {
              "enable": true,
              "opacity": 0.02
          },
          "move": {
              "direction": "right",
              "speed": 0.05
          },
          "size": {
              "value": 4
          },
          "opacity": {
              "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0.05
              }
          }
      },
      "interactivity": {
          "events": {
              "onclick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "push": {
                  "particles_nb": 1
              }
          }
      },
      "retina_detect": true
}




export default App;
