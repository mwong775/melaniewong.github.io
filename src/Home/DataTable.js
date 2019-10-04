import * as React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';

export class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Course Number", field: "courseNumber"
      }, {
        headerName: "Course Title", field: "courseTitle"
      }, {
        headerName: "Term", field: "term"
      }, {
        headerName: "Language", field: "language"
      }, {
        headerName: "Difficulty", field: "difficulty"
      }],
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
      <div 
        className="ag-theme-balham-dark"
        style={{ 
        height: '600px', 
        width: '800px' }} 
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  } 
}

export default DataTable;