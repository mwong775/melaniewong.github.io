import * as React from "react";
import Particles from 'react-particles-js'; 
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {About} from "./components/About/About";
import {Resume} from "./components/Resume/Resume";
import {Projects} from "./components/Projects/Projects";
import {GIFinder} from "./components/Projects/GIFinder/GIFinder";
// import {Twitter} from "./components/Projects/Twitter/Twitter";
import {Photos} from "./components/Photos/Photos";
import {Contact} from "./components/Contact/Contact";
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Home} from "./components/Home/Home";
// import {ScrollToTop} from "./components/ScrollToTop"
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'; // responseiveFontSizes needs testing

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
        main: "#199bfc"
    }
  },
});
theme = responsiveFontSizes(theme);

export class App extends React.Component {
  render() {
      return (
        <Router basename={process ? process.env.PUBLIC_URL : ""}>
           <MuiThemeProvider theme={theme}>
            {/* <ScrollToTop> */}
            <CssBaseline />
            <header>
                <Nav/>
            </header>
            <Particles params={particleOpt} className="particles"/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/resume" exact component={Resume} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/gifinder" exact component={GIFinder} />
                    <Route path="/photos" exact component={Photos} />
                    <Route path="/contact" exact component={Contact} />
                    <Redirect to='/'/>
                </Switch>
              {/* </ScrollToTop> */}
              </MuiThemeProvider>
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
