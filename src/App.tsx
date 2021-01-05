import * as React from "react";
import './App.scss';
import { Bubbles } from "./Components/Utils/Bubbles";
import Chatbot from "./Components/Utils/Chatbot";
import Copyright from "./Components/Utils/Copyright";
import { Nav } from "./Components/Nav/Nav";
import { About } from "./Components/About/About";
import { Resume } from "./Components/Resume/Resume";
import { Projects } from "./Components/Projects/Projects";
import { GIFinder } from "./Components/Projects/GIFinder/GIFinder";
import { BobaMap } from "./Components/Projects/BobaMap/BobaMap";
import { Poster } from "./Components/Projects/Poster/Poster";
import { MarkdownPreviewer } from "./Components/Projects/MarkdownPreviewer/MarkdownPreviewer";
import { Photos } from "./Components/Photos/Photos";
import { Contact } from "./Components/Contact/Contact";
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from "./Components/Home/Home";
import ScrollToTop from "./Components/Utils/ScrollToTop"
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'; // responseiveFontSizes needs testing

export class App extends React.Component<{}, { theme: any, themeLabel: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      theme: createMuiTheme({
        palette: {
          type: 'dark',
          primary: {
            main: "#199bfc"
          }
        },
      }),
      themeLabel: 'Dark',
    }
  }

  componentDidMount() {
    this.setState(prevState => ({
      theme: responsiveFontSizes(prevState.theme)
    }))
  }

  switchMode = (event) => {
    // handled thru hardcoding - type error if string variable (can be undefined)
    if (event) {
      this.setState({
        theme: createMuiTheme({
          palette: {
            type: 'dark',
            primary: {
              main: "#199bfc"
            }
          },
        }),
        themeLabel: "Dark"
      });
    } else {
      this.setState({
        theme: createMuiTheme({
          palette: {
            type: 'light',
            primary: {
              main: "#199bfc"
            }
          },
        }),
        themeLabel: "Light"
      });
    }
  }

  render() {
    return (
      <Router basename={process ? process.env.PUBLIC_URL : ""}>
        <MuiThemeProvider theme={this.state.theme}>
          <ScrollToTop />
          <CssBaseline />
          <header>
            <Nav lightTheme={this.switchMode} themeLabel={this.state.themeLabel}/>
          </header>
          <Bubbles />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/gifinder" exact component={GIFinder} />
            <Route path="/bobamap" exact component={BobaMap} />
            <Route path="/llnlposter" exact component={Poster} />
            <Route path="/markdownpreviewer" exact component={MarkdownPreviewer} />
            <Route path="/photos" exact component={Photos} />
            <Route path="/contact" exact component={Contact} />
            <Redirect to='/' />
          </Switch>
          <Copyright />
          <Chatbot />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
