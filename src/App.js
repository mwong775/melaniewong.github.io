import * as React from "react";
import Particles from 'react-particles-js'; // LEGIT ONE
//import logo from './logo.svg';
import './App.css';
import {Nav} from "./Components/Nav/Nav";
import {About} from "./Components/About/About";
import {Resume} from "./Components/Resume/Resume";
import {Photos} from "./Components/Photos/Photos";
import {Contact} from "./Components/Contact/Contact";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Components/Home/Home";

export class App extends React.Component {
  render() {
      return (
        <Router basename={process ? process.env.PUBLIC_URL : ""}>
          <div>
              <header>
                 <Nav/>
              </header>
                <Particles params={particleOpt} className="particles"/>
              <div className="block">
                  <Switch>
                    <Route path="/about" exact component={About} />
                  </Switch>
                  <Switch>
                    <Route path="/resume" exact component={Resume} />
                  </Switch>
                  <Switch>
                      <Route path="/photos" exact component={Photos} />
                  </Switch>
                  <Switch>
                      <Route path="/contact" exact component={Contact} />
                  </Switch>
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
              "value": 80,
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
              "value": 2
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
