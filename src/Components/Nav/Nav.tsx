import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import { Theme, makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import './Nav.scss';

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
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
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

type SwitchProps = {
  lightTheme: (e: any) => void;
  themeLabel: string;
}
export class Nav extends React.Component<SwitchProps, { lightTheme: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      lightTheme: true,
    };
  }

  switch = () => {
    this.setState({
      lightTheme: !this.state.lightTheme,
    });
    this.props.lightTheme(!this.state.lightTheme);
  }

  render() {
    return (
      <div className="nav">
        <AppBar className="appbar">
          <Tabs
            variant="scrollable"
            scrollButtons="off"
            value="">
            <Toolbar>
              <IconButton edge="start" aria-label="open drawer" style={{ marginLeft: "1%" }}>
                <MenuIcon />
              </IconButton>
              <Link to="/">
                <Button>Home</Button>
              </Link>
              <Link to="/about">
                <Button>About</Button>
              </Link>
              <Link to="/resume">
                <Button>Resume</Button>
              </Link>
              <Link to="/projects">
                <Button>Projects</Button>
              </Link>
              <Link to="/photos">
                <Button>Photos</Button>
              </Link>
              <Link to="/contact">
                <Button>Contact</Button>
              </Link>
              <IconButton
                edge="end"
                aria-label="mode"
                onClick={() => this.switch()}
              >
                {this.state.lightTheme ? <Brightness7Icon /> : <Brightness3Icon />}
              </IconButton>
              {/* <p>{this.props.themeLabel} Theme</p> */}
            </Toolbar>
          </Tabs>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <ScrollTop {...this.props}>
          <Tooltip title="Back to Top" aria-label="Back to Top">
            <Fab size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </Tooltip>
        </ScrollTop>
      </div>
    );
  }
}
