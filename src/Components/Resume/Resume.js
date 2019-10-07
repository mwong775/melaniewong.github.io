import React from 'react';
import { Document, Page } from 'react-pdf';
import Button from '@material-ui/core/Button';
import DatatablePage from "./DataTable";

export class Resume extends React.Component {
	state = {
    	numPages: null,
    	pageNumber: 1,
  	}

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
      	<h2>Resume</h2>
        <Button href="/Resume/Resume.pdf" color='inherit'>Resume?</Button>
      	<h5>Using react-pdf but idk how to properly implement it yet whoops</h5>
        <DatatablePage />
      </div>
    );
  }
}

/*
        <Document
          file="Resume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
*/