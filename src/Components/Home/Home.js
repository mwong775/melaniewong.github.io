import * as React from "react";
import './Home.css';
import {Link} from 'react-router-dom'; 
import Button from '@material-ui/core/Button';
import cinnamoroll_sup from '../Photos/images/cinna_sup.gif';


export class Home extends React.Component {
	render() {
		return (
			<div className="home">
        <div className="intro">
          <h2 className="name">Melanie Wong</h2>
          <img className="cinnamoroll" src={cinnamoroll_sup} alt="cinnamoroll"/>
        </div>   
        <div className="about content-wrapper">
          <div className="about-wrapper">
            <h4 className="gradient-font">About Me</h4>
            <p>Hi there! I'm Melanie, and I'm an undergraduate student studying Computer Science at the University of California in Santa Cruz.</p>
            <Link to="/about">
              <Button style={{color: '#199bfc'}}>Learn More</Button>
            </Link>
          </div>
          <div className="about-wrapper">
            <h4 className="gradient-font">About This Site</h4>
            <p>Welcome to my website! Please feel free to read more <Link to="/about">about</Link> me, or you can check out my <Link to="/resume">resume</Link>, past <Link to="/projects">projects</Link>, collection of <Link to="/photos">photos</Link>, or <Link to="/contact">contact</Link> me.</p>
            <p>Source available on GitHub <a href="https://github.com/mwong775/mwong775.github.io/tree/development" target="_blank" rel="noopener noreferrer">here</a>.</p>
          </div>
        </div>
      </div>
			);
	}
}


