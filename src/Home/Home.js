import * as React from "react";
import Particles from 'react-particles-js'; // LEGIT ONE
import {Tab, Tabs} from "react-bootstrap";
import './Home.css';


export class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>Home Page!</h1>
				<Tabs defaultActiveKey="home" id="main-tabs">
					<Tab eventKey="home" title="Home">
						<div className="border">
							<p>this is a paragraph.</p>
						</div>
					</Tab>
					<Tab eventKey="stuff" title="Stuff">
						<div className="border">
							<p>here's another paragraph to take up space</p>
						</div>
					</Tab>
				</Tabs>
				<Particles params={particleOpt} />
			</div>
			);
	}
}

const particleOpt = {
              "particles": {
                  "number": {
                  "value": 50
              },
              "size": {
                "value": 3
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
              }
          }
      }
}



