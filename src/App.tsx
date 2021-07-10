import * as React from "react";
import clsx from 'clsx';
import './App.scss';
import { Bubbles } from "./Components/Utils/Bubbles";
import Chatbot from "./Components/Utils/Chatbot";
import Copyright from "./Components/Utils/Copyright";
import { About } from "./Components/About/About";
import { Resume } from "./Components/Resume/Resume";
import { Projects } from "./Components/Projects/Projects";
import { GIFinder } from "./Components/Projects/GIFinder/GIFinder";
import { BobaMap } from "./Components/Projects/BobaMap/BobaMap";
import BobaReviews from "./Components/Projects/BobaReviews/BobaReviews";
import { AnimalCrossing } from "./Components/Projects/AnimalCrossing/AnimalCrossing";
import { RamenMap } from "./Components/Projects/RamenMap/RamenMap";
import { Pokedex } from "./Components/Projects/Pokedex/Pokedex";
import { Poster } from "./Components/Projects/Poster/Poster";
import { MarkdownPreviewer } from "./Components/Projects/MarkdownPreviewer/MarkdownPreviewer";
import { Photos } from "./Components/Photos/Photos";
import { Contact } from "./Components/Contact/Contact";
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from "./Components/Home/Home";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'; // responseiveFontSizes needs testing
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmailIcon from '@material-ui/icons/Email';
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { mainListItems, secondaryListItems } from './Sections';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
const PRIMARY_COLOR = "#199bfc";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  fixedHeight: {
    height: 240,
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export const App = () => {
  let [theme, setTheme] = React.useState(createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: PRIMARY_COLOR
      }
    },
  }));
  theme = responsiveFontSizes(theme);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [themeLabel, setMode] = React.useState('Dark');
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const switchMode = () => {
    const newMode = themeLabel === 'Light' ? 'Dark' : 'Light';
    setMode(newMode);
    const type = newMode === 'Light' ? 'light' : 'dark';
    setTheme(createMuiTheme({
      palette: {
        type: type,
        primary: {
          main: PRIMARY_COLOR
        }
      },
    }));
  };

  const color = "#ffffff";

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <Router basename={process ? process.env.PUBLIC_URL : ""}>
          {/* <ScrollToTop /> */}
          <CssBaseline />
          <Bubbles />
          <AppBar position="fixed" className={`${themeLabel === 'Dark' ? 'appbar-light' : 'appbar-dark'} ${clsx(classes.appBar, open && classes.appBarShift)}`}>
            <Toolbar>
              <IconButton
                edge="start"
                aria-label="open drawer"
                style={{ marginLeft: "1%", color: color }}
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.hide)}                >
                <MenuIcon />
              </IconButton>
              <Hidden only="xs">
                <Link to="/">
                  <Button style={{ color: color }}>Home</Button>
                </Link>
                <Link to="/about">
                  <Button style={{ color: color }}>About</Button>
                </Link>
                <Link to="/resume">
                  <Button style={{ color: color }}>Resume</Button>
                </Link>
                <Link to="/projects">
                  <Button style={{ color: color }}>Projects</Button>
                </Link>
                <Link to="/photos">
                  <Button style={{ color: color }}>Photos</Button>
                </Link>
                <Link to="/contact">
                  <Button style={{ color: color }}>Contact</Button>
                </Link>
                <Tooltip title="WARNING: sketchy light theme - toggle at own risk D:" aria-label="warning">
                  <IconButton
                    edge="end"
                    aria-label="mode"
                    onClick={switchMode}
                    style={{ color: color }}
                  >
                    {themeLabel === 'Dark' ? <Brightness7Icon /> : <Brightness3Icon />}
                  </IconButton>
                </Tooltip>
              </Hidden>
              {/* <p>{this.props.themeLabel} Theme</p> */}
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/resume" exact component={Resume} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/gifinder" exact component={GIFinder} />
              <Route path="/bobamap" exact component={BobaMap} />
              <Route path="/bobareviews" exact component={BobaReviews} />
              <Route path="/acnh" exact component={AnimalCrossing} />
              <Route path="/ramenmap" exact component={RamenMap} />
              <Route path="/pokedex" exact component={Pokedex} />
              <Route path="/llnlposter" exact component={Poster} />
              <Route path="/markdownpreviewer" exact component={MarkdownPreviewer} />
              <Route path="/photos" exact component={Photos} />
              <Route path="/contact" exact component={Contact} />
              <Redirect to='/' />
            </Switch>
            <footer style={{ padding: '2%' }}>
              <Copyright />
              <IconButton href="mailto:mwong775@gmail.com"><EmailIcon style={{ color: "#ffffff" }} /></IconButton>
              <IconButton onClick={() => window.open("https://www.facebook.com/mwong775", "_blank")}><FontAwesomeIcon icon={faFacebook} /></IconButton>
              <IconButton onClick={() => window.open("https://www.linkedin.com/in/mwong775", "_blank")}><FontAwesomeIcon icon={faLinkedin} /></IconButton>
              <IconButton onClick={() => window.open("https://github.com/mwong775", "_blank")}><FontAwesomeIcon icon={faGithub} /></IconButton>
            </footer>
            <Chatbot />
          </main>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
