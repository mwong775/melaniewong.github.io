import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './TileData';

export class Photos extends React.Component {
	render() {
		return(
			<>
			<h2>Photos...</h2>
			<h5>I can't freaking find them yet D':</h5>
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