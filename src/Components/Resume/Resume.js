import React from 'react';
import Button from '@material-ui/core/Button';
import './Resume.css';


export class Resume extends React.Component {

  render() {
    return (
      <div className="content-wrapper">
        <h2 className="gradient-font">Resume</h2>
        <br/>
        <Button href="https://github.com/mwong775/mwong775.github.io/raw/development/Resume.pdf">Download</Button>
        <div className="resume-container">
          <div className="resume-wrapper">
              <iframe title="Resume" src="https://docs.google.com/gview?url=https://github.com/mwong775/mwong775.github.io/raw/development/Resume.pdf&embedded=true" 
              frameborder="0"></iframe>
          </div>
        </div>
      </div>
    );
  }
}