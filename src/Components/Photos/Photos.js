import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './TileData';
import Carousel from 'react-bootstrap/Carousel';
import rocks from './images/rocks.jpg';
import goldBuilding from './images/old_gold_building.jpg';
import sheep from './images/sheeep.jpg';
import jamesLeitch from './images/James_Leitch_12-13-18.jpg';
import NY from './images/NY_5-15-19_2.jpg';
import pubu from './images/pubu.jpg';
import tahoe from './images/Tahoe.jpg';

export class Photos extends React.Component {
	render() {
		return(
			<>
			<h2>Photos</h2>
			<h6>Surprisingly decent photos taken with an iPhone</h6>
			<Carousel className="carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={goldBuilding}
      alt="Kinkakuji"
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
      alt="Taiwanese Woolies"
    />

    <Carousel.Caption>
      <h3>Woolies</h3>
      <p>清境農場 - 台灣</p>
      <p>Fluffy sheep of Qingjing Sheep Farm in Taiwan</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel d-block w-100"
      src={rocks}
      alt="Rocks"
    />
    <Carousel.Caption>
      <h3>Rocks, rocks, and sand</h3>
      <p>花蓮 - 台灣 Taiwan</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel d-block w-100"
      src={pubu}
      alt="Waterfall"
    />
    <Carousel.Caption>
      <h3></h3>
      <p>台灣 Taiwan</p>
    </Carousel.Caption>
  </Carousel.Item>
    <Carousel.Item>
    <img
      className="carousel d-block w-100"
      src={NY}
      alt="Manhattan"
    />
    <Carousel.Caption>
      <h3></h3>
      <p>Manhattan, NY</p>
    </Carousel.Caption>
  </Carousel.Item>
    <Carousel.Item>
    <img
      className="carousel d-block w-100"
      src={jamesLeitch}
      alt="James Leitch Sunset"
    />
    <Carousel.Caption>
      <h3></h3>
      <p>James Leitch Elementary</p>
    </Carousel.Caption>
  </Carousel.Item>
 <Carousel.Item>
    <img
      className="carousel d-block w-100"
      src={tahoe}
      alt="Lake Tahoe"
    />
    <Carousel.Caption>
      <h3></h3>
      <p>Lake Tahoe</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
			</>
			);
	}
}

/*
		<h5>I can't seem to find them yet for the grid D':</h5>
			<GridList cellHeight={160} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
*/