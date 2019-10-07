import * as React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import './DataTable.css';
// import '../Photos/images/old_gold_building.jpg';

const columnDefs = [{
        headerName: "Course Number", field: "courseNumber"
      }, {
        headerName: "Course Title", field: "courseTitle"
      }, {
        headerName: "Term", field: "term"
      }, {
        headerName: "Language", field: "language"
      }, {
        headerName: "Difficulty", field: "difficulty"
      }];

const gridOptions = {
  columnDefs: columnDefs,
  defaultColDef: {
        sortable: true,
        filter: true
    },
    animateRows: true
}

export class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowData: [{
        courseNumber: "CMPE 150", courseTitle: "Introduction to Computer Networks", term: "Spring 2019", language: "Python"
      }, {
        courseNumber: "CMPS 183", courseTitle: "Web Applications", term: "Spring 2019", language: "Python, JavaScript"
      }, {
        courseNumber: "CMPS 101", courseTitle: "Algorithms & Abstract Data Types", term: "Fall 2018", language: "Java, C"
      }, {
        courseNumber: "CSE 130", courseTitle: "Principles of Computer System Design", term: "Fall 2019", language: "C/C++"
      }, {
        courseNumber: "CSE 115", courseTitle: "Introduction to Software Engineering", term: "Fall 2019", language: "Java?"
      }, {
        courseNumber: "CMPS 102", courseTitle: "Analysis of Algorithms", term: "Winter 2019", language: "LaTeX lol"
      }, {
        courseNumber: "CSE 184", courseTitle: "Data Wrangling & Web Scraping", term: "Fall 2019", language: "Python"
      }]
    }
  }

  render() {

    return (
      <>
      <div style={{textAlign: 'center', marginTop: '5%'}}>
        <h6>Technical Coursework</h6>
        <p>Table needs a lot more configurations..</p>
       </div>
      <div 
        className="ag-theme-balham-dark"
        style={{ 
        height: '400px', 
        width: '80%',
        margin: 'auto', 
        marginTop: '10px' }} 
      >

        <AgGridReact
          gridOptions={gridOptions}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
      </>
    );
  } 
}

export default DataTable;