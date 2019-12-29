import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import {Link} from 'react-router-dom'; 
import './Nav.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),

    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

 // const classes = useStyles();

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export const Nav = () => {
   const [value, setValue] = React.useState(0);
   const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className="appbar">
      <Tabs
       variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example">
        <Toolbar class>
            <IconButton edge="start" color="inherit" aria-label="open drawer" style={{marginLeft: "1%"}} onClick={()=> window.open("https://github.com/mwong775/mwong775.github.io/tree/development", "_blank")}>
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Button color="inherit" {...a11yProps(0)}>Home</Button>
          </Link>
          <Link to="/about">
            <Button color="inherit" {...a11yProps(1)}>About Me</Button>
          </Link>
          <Link to="/resume" {...a11yProps(2)}>
            <Button color="inherit">Resume</Button>
          </Link>
          <Link to="/projects" className="link" {...a11yProps(3)}>
            <Button color="inherit">Projects</Button>
          </Link>
          <Link to="/photos" className="link" {...a11yProps(4)}>
            <Button color="inherit">Photos</Button>
          </Link>
          <Link to="/contact" className="link" {...a11yProps(5)}>
            <Button color="inherit">Contact</Button>
          </Link>
        </Toolbar>
        </Tabs>
      </AppBar>
      <Drawer>
      </Drawer>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

 /*} <Typography variant="h6">
            not News
          </Typography> */

          /* <IconButton
                className="accountCircle"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton> */

