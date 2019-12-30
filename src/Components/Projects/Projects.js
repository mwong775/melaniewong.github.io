import React from 'react';
import poster from '../Photos/images/Poster.jpg';
import iws from '../Photos/images/IWS.jpg'; // final webpage design...
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'; 

export class Projects extends React.Component {
	render() {
		return(
				<>
					<h2>Projects</h2>
					<Link to="/gifinder">
						<Button variant="outlined" color="secondary">
						  GIFinder
						</Button>
					</Link>
					<h4>A simple search to discover awesome GIFs, powered by the Giphy API</h4>
					<h6>Project poster from my 2019 summer internship at LLNL</h6>
					<div style={{width: '80%', margin: 'auto', marginTop: '2%'}}>
						 <img
					      className="d-block w-100"
					      src={poster}
					      alt="LLNL Poster"
					    />
				    </div>
			    </>
);
	}
}