import React from 'react';
import { Document, Page } from 'react-pdf';

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
      	<h5>Using react-pdf but idk how to properly implement it yet whoops</h5>
        <Document
          file="https://www.pdf.investintech.com/preview-frames.php?id=WGMxUkVjRVMxVTZqTTBFZ25yOFhwbEY0SWZDNmlCbERtZE1xVGRSWkdlY2pMQVdkNlBldS9MQlJnbzYwcVNrcWE1N2pLeStJTzgrcUo5UnN3N1VldHRpR0hvRzVjbDVaTUp6WmRTZ0g0VlVlSEY5bVhJK3oxdU9pZEdFb05wOUk="
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}