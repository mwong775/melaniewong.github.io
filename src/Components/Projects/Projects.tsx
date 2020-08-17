import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import poster from '../Photos/images/Poster.jpg';
// import iws from '../Photos/images/IWS.jpg'; // final webpage design...
import giphy from '../Photos/images/giphy.jpg';
import cinnaboba from '../Photos/images/cinna_boba.gif';
import { Link } from 'react-router-dom';
import './Projects.scss';

const images = [
  {
    url: giphy,
    title: 'GIFinder',
    link: './gifinder',
    description: 'A simple search to discover awesome GIFs, powered by the Giphy API',
    width: '40%',
  },
  {
    url: cinnaboba,
    title: 'Bobamap',
    link: './bobamap',
    description: 'A map of (most) boba places around the SF Bay Area',
    width: '40%',
  }

];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minWidth: 300,
    width: '80%',
    margin: 'auto',
  },
  image: {
    position: 'relative',
    margin: 'auto',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export const Projects = () => {
  const classes = useStyles();
  return (
    <div className="content-wrapper">
      <h2 className="gradient-font">Projects</h2>
      <div className={classes.root}>
        {images.map(image => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <Link to={image.link}>
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}>
                  {image.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </Link>
          </ButtonBase>
        ))}
      </div>
      <br />
      <div className="poster">
        <h4 className="project-summary">Project poster from my 2019 summer internship at LLNL</h4>
        <img
          src={poster}
          alt="LLNL Poster"
        />
      </div>
    </div>
  );
}