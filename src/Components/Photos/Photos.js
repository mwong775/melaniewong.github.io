import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './TileData';
// import rocks from './images/rocks.jpg';
// import goldBuilding from './images/old_gold_building.jpg';
// import sheep from './images/sheeep.jpg';
// import jamesLeitch from './images/James_Leitch_12-13-18.jpg';
// import NY from './images/NY_5-15-19_2.jpg';
// import pubu from './images/pubu.jpg';
// import tahoe from './images/Tahoe.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginBottom: '20px'
    // backgroundColor: 'inherit'//theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.4)',
  },
}));

export const Photos = () => {
    const classes = useStyles();
		return(
			<div className="content-wrapper">
			<h2 className="gradient-font">Photos</h2>
      <div style={{marginBottom: '5%'}}>Surprisingly decent photos taken with an iPhone</div>
      <div className={classes.root}>
      <GridList className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.location}</span>}
              classes={{root: classes.titleBar}}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
			);
	}
