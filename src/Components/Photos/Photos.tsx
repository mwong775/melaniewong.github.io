import React from 'react';
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
import { useTheme } from '@material-ui/core/styles';
import './Photos.scss';
export interface IPic {
  location: string;
  img: string;
  title: string;
}

export const Photos = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [pic, setPic] = React.useState<IPic>({
    location: '',
    img: '',
    title: ''
  });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = (pic: IPic) => {
    setPic(pic);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="content-wrapper">
      <h2 className="gradient-font">Photos</h2>
      <div className="description">Surprisingly decent photos taken with an iPhone</div>
      <GridList className="grid">
        {tileData.map(tile => (
          <GridListTile key={tile.img} className="tile">
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.location}</span>}
              className="title-bar"
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className="icon" onClick={() => handleClickOpen(tile)}>
                  <InfoIcon />
                </IconButton>
              } />
            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">{pic.title}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {pic.location}
                </DialogContentText>
                <img src={pic.img} alt={pic.title} />
              </DialogContent>
              <DialogActions>
                <IconButton onClick={handleClose}>
                  <HomeIcon color="primary" />
                </IconButton>
              </DialogActions>
            </Dialog>
          </GridListTile>
        ))}
      </GridList>
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
