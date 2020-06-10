import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './TileData';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SvgIcon from '@material-ui/core/SvgIcon';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Theme, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
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
  const [open, setOpen] = React.useState(false);
  const [pic, setPic] = React.useState({
    'location': '',
    'img': '',
    'title': ''
  });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = (pic: object) => {
    setOpen(true);
  };
    
  const handleClose = () => {
    setOpen(false);
  };
    
    return(
      <div className="content-wrapper">
      <h2 className="gradient-font">Photos</h2>
      <div style={{marginBottom: '5%'}}>Surprisingly decent photos taken with an iPhone</div>
      <div className={classes.root}>
        <GridList className={classes.gridList} cellHeight={180} cols={2}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} >
              <img src={tile.img} alt={tile.title} style={{ height: 'auto' }}/>
              <GridListTileBar
                title={tile.title}
                subtitle={<span>{tile.location}</span>}
                classes={{root: classes.titleBar}}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} onClick={() => handleClickOpen(tile)}>
                    <InfoIcon/>
                  </IconButton>
                }/>
                <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                >
                <DialogTitle id="responsive-dialog-title">{tile.title}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {pic.location}
                  </DialogContentText>
                  <img src={pic.img} alt={pic.title} />
                </DialogContent>
                <DialogActions>
                  <IconButton onClick={handleClose}>
                    <HomeIcon color="primary"/>
                  </IconButton>
                </DialogActions>
              </Dialog>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
    );
  }

  function HomeIcon(props: any) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  