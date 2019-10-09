import React from 'react';
import IconButton from '@material-ui/core/IconButton';
// get our fontawesome imports
import {faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import EmailIcon from '@material-ui/icons/Email';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Contact extends React.Component {
	render() {
		return(
			<>
				<h2>Contact</h2>
				<p>Feel free to get in touch!</p>
				<IconButton color='inherit' href="mailto:mwong775@gmail.com"><EmailIcon/></IconButton>
				<IconButton color='inherit' onClick={()=> window.open("https://www.facebook.com/mwong775", "_blank")}><FontAwesomeIcon icon={faFacebook}/></IconButton>
				<IconButton color='inherit' onClick={()=> window.open("https://www.linkedin.com/in/mwong775", "_blank")}><FontAwesomeIcon icon={faLinkedin}/></IconButton>
				<IconButton color='inherit' onClick={()=> window.open("https://github.com/mwong775", "_blank")}><FontAwesomeIcon icon={faGithub}/></IconButton>
				<IconButton color='inherit' onClick={()=> window.open("https://www.goslugs.com/sports/track/2018-19/bios/wong_melanie_0nqe?view=bio", "_blank")}><DirectionsRunIcon/></IconButton>
				<p>Also, enjoy the nice bubbles below (Click or tap to add more!)</p>
			</>
			);
	}
}

