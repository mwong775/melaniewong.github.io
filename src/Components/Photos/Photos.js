import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './TileData';
import Carousel from 'react-bootstrap/Carousel';
import rocks from './images/rocks.jpg';
import goldBuilding from './images/old_gold_building.jpg';
import sheep from './images/sheeep.jpg';

export class Photos extends React.Component {
	render() {
		return(
			<>
			<h2>Photos...</h2>
			<Carousel className="carousel">
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
</Carousel>
			<h5>I can't seem to find them yet for the grid D':</h5>
			<GridList cellHeight={160} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
			</>
			);
	}
}