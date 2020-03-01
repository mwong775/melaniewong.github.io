import * as React from "react";
import Particles from 'react-particles-js'; 
import './App.css';
import {Nav} from "./Components/Nav/Nav";
import {About} from "./Components/About/About";
import {Resume} from "./Components/Resume/Resume";
import {Projects} from "./Components/Projects/Projects";
import {GIFinder} from "./Components/Projects/GIFinder/GIFinder";
import {Photos} from "./Components/Photos/Photos";
import {Contact} from "./Components/Contact/Contact";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'; // responseiveFontSizes needs testing

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
        main: "#5f60b3"
    }
  },
});
theme = responsiveFontSizes(theme);

export class App extends React.Component {
  render() {
      return (
        <Router basename={process ? process.env.PUBLIC_URL : ""}>
          <div>
           <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <header>
                <Nav/>
            </header>
            <Particles params={particleOpt} className="particles"/>
                <Switch>
                <Route path="/about" exact component={About} />
                </Switch>
                <Switch>
                <Route path="/resume" exact component={Resume} />
                </Switch>
                <Switch>
                <Route path="/projects" exact component={Projects} />
                </Switch>
                <Switch>
                <Route path="/gifinder" exact component={GIFinder} />
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
              <footer className="mb-5"/>
              </MuiThemeProvider>
          </div>
      </Router>
      );
  }
}

const particleOpt = {
              "particles": {
          "number": {
              "value": 120,
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
              "value": 3
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
