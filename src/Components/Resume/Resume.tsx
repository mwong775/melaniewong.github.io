import React from 'react';
import CV from '../../assets/cv/Melanie_Wong_Resume.pdf';
import Button from '@material-ui/core/Button';
import './Resume.scss';

const CVUrl = `${CV}?#zoom=FitH&scrollbar=0&toolbar=0&navpanes=0`;

export class Resume extends React.Component {

  render() {
    return (
      <div className="content-wrapper">
        <br />
        <Button href={CV} download={'Melanie Wong Resume'}>Download</Button>
        <div className="resume-container">
          <object className="pdf" type="application/pdf" data={CVUrl}>
            <p>PDF cannot be displayed :(</p>
          </object>
        </div>
      </div>
    );
  }
}