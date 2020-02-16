import React from 'react';

export class Resume extends React.Component {

  render() {
    return (
      <div>
      <h2>Resume</h2>
      <div style={{textAlign: 'center'}}>
      <div style={{margin: '2%'}}>
          <iframe src="https://docs.google.com/gview?url=https://github.com/mwong775/mwong775.github.io/raw/development/Resume.pdf&embedded=true" 
          style={{width:"70%", height:"70vw"}} frameborder="0"></iframe>
      </div>
      	</div>
      </div>
    );
  }
}

/*
    <Tabs 
          aria-label="simple tabs example"  
          variant="fullWidth"
          aria-label="full width tabs example">
          <Tab label="HTML" />
          <Tab label="PDF" />
          <Tab label="Something else" />
        </Tabs>

    <DatatablePage />

  state = {
      numPages: null,
      pageNumber: 1,
    }

    const { pageNumber, numPages } = this.state;
    
        <Document
          file="Resume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
*/