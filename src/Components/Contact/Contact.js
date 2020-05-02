import React from 'react';
import IconButton from '@material-ui/core/IconButton';
// get our fontawesome imports
import {faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import EmailIcon from '@material-ui/icons/Email';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cinnamoroll_stack from '../Photos/images/cinna_stack.gif';


export class Contact extends React.Component {
	render() {
		return(
			<div className="content-wrapper">
				<h2 className="gradient-font">Contact</h2>
				<p>Feel free to get in touch!</p>
				<IconButton href="mailto:mwong775@gmail.com"><EmailIcon/></IconButton>
				<IconButton onClick={()=> window.open("https://www.facebook.com/mwong775", "_blank")}><FontAwesomeIcon color='#199bfc' icon={faFacebook}/></IconButton>
				<IconButton onClick={()=> window.open("https://www.linkedin.com/in/mwong775", "_blank")}><FontAwesomeIcon color='#199bfc' icon={faLinkedin}/></IconButton>
				<IconButton onClick={()=> window.open("https://github.com/mwong775", "_blank")}><FontAwesomeIcon color='#199bfc' icon={faGithub}/></IconButton>
				<IconButton onClick={()=> window.open("https://www.goslugs.com/sports/track/2018-19/bios/wong_melanie_0nqe?view=bio", "_blank")}><DirectionsRunIcon style={{color: '#199bfc'}}/></IconButton>
				<br/>
				<img className="cinnamoroll" src={cinnamoroll_stack} alt="cinnamoroll"/>
			</div>
			);
	}
}

