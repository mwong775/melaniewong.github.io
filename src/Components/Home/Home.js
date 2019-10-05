import * as React from "react";
import './Home.css';
import DatatablePage from "./DataTable";
import Carousel from 'react-bootstrap/Carousel';
import rocks from '../Photos/images/rocks.jpg';
import goldBuilding from '../Photos/images/old_gold_building.jpg';
import sheep from '../Photos/images/sheeep.jpg';

export class Home extends React.Component {
	render() {
		return (
			<div className="main">
				<h2>React App</h2>
        <h5>Design + Development in progress :P</h5>
        <Carousel className="carousel">
  <Carousel.Item>
    <img
      className="carousel d-block w-100"
      src={rocks}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Rock Stack</h3>
      <p>Hope it's still standing in HuaLian :D</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={goldBuilding}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Kinkakuji</h3>
      <p>The golden pavilion in Kyoto, Japan</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={sheep}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Taiwanese Woolies</h3>
      <p>Buncha sheep high up in the mountains in central Taiwan~</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
				<DatatablePage/>
			</div>
			);
	}
}


