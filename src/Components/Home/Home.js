import * as React from "react";
import './Home.css';
import blueMountains from '../Photos/images/blue_mountains.jpg';
import {Link} from 'react-router-dom'; 

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
              <h2>Melanie Wong</h2>
              <h4>React App</h4>
              <h6>Design + Development in progress :P</h6>
            </div>
        </div>
        <p>About (Me) + About this site</p>
        <p>Welcome to my website! Please feel free to read more about me, or you can check out my <Link to="/resume">resume</Link>, travel <Link to="/Photos">photos</Link>, view site statistics (hopefully soon), or <Link to="/contact">contact</Link> me.</p>
        <p>Source available <a href="https://github.com/mwong775/mwong775.github.io/tree/development" target="_blank">here</a>.</p>
			</>
			);
	}
}


