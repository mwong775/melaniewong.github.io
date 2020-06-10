import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import { Theme, makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { Link } from 'react-router-dom'; 
import './Nav.scss';
function TabPanel(props: any) {
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

function a11yProps(index: number) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    flexGrow: 1,
    zIndex: 1
  },
}));

function ScrollTop(props: any) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

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

export class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar className="appbar">
        <Tabs
            variant="scrollable"
            scrollButtons="off"
            value="">
          <Toolbar>
              <IconButton edge="start" aria-label="open drawer" style={{marginLeft: "1%"}}>
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <Button {...a11yProps(0)}>Home</Button>
            </Link>
            <Link to="/about">
              <Button {...a11yProps(1)}>About Me</Button>
            </Link>
            <Link to="/resume" {...a11yProps(2)}>
              <Button>Resume</Button>
            </Link>
            <Link to="/projects" {...a11yProps(3)}>
              <Button>Projects</Button>
            </Link>
            <Link to="/photos" {...a11yProps(4)}>
              <Button>Photos</Button>
            </Link>
            <Link to="/contact" {...a11yProps(5)}>
              <Button>Contact</Button>
            </Link>
          </Toolbar>
          </Tabs>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <ScrollTop {...this.props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon/>
          </Fab>
        </ScrollTop>
      </React.Fragment>
    );
  }
}
