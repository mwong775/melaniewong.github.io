import * as React from "react";
import './Home.css';
import blueMountains from '../Photos/images/blue_mountains.jpg';
import {Link} from 'react-router-dom'; 
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export class Home extends React.Component {
	render() {
		return (
			<>
        <img
          className="d-block w-100"
          src={blueMountains}
          alt="Blue Mountains - could not load :("
          />
          <div className="d-block w-100 mtn-caption">
            <div className="caption-box">
              <h2 style={{fontSize: '3vw'}}>Melanie Wong</h2>
              <h4 style={{fontSize: '2vw'}}>React App</h4>
              <h6 style={{fontSize: '1vw'}}>Design + Development in progress :P</h6>
            </div>
        </div>
       <Grid container spacing={3}>
        <Grid item xs={6}>
          <h3 className="abt-header">About Me</h3>
          <p>Hi there! I'm Melanie, and I'm an undergraduate student studying Computer Science at the University of California in Santa Cruz.</p>
          <Link to="/about">
            <Button>Learn More</Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <h3 className="abt-header">About this Site</h3>
          <p>Welcome to my website! Please feel free to read more <Link to="/about">about</Link> me, or you can check out my <Link to="/resume">resume</Link>, travel <Link to="/Photos">photos</Link>, view site statistics (hopefully soon), or <Link to="/contact">contact</Link> me.</p>
          <p>Source available on GitHub <a href="https://github.com/mwong775/mwong775.github.io/tree/development" target="_blank">here</a>.</p>
        </Grid>
        </Grid>
			</>
			);
	}
}


