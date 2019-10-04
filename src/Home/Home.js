import * as React from "react";
import './Home.css';
import {Nav} from "../Nav/Nav";
import DatatablePage from "./DataTable";

export class Home extends React.Component {
	render() {
		return (
			<div className="main">
        <Nav/>
				<h1>Home Page!</h1>
				<DatatablePage/>
			</div>
			);
	}
}


