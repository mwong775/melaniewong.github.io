import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import poster from '../Photos/images/Poster.jpg';
import livecolor from '../../assets/livecolor_logo.png';
// import iws from '../Photos/images/IWS.jpg'; // final webpage design...
import giphy from '../Photos/images/giphy.jpg';
import cinnaboba from '../Photos/images/cinna_boba.gif';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import './Projects.scss';

const images = [
  {
    url: giphy,
    title: 'GIFinder',
    link: './gifinder',
    external: '',
    repo: '',
    description: 'A simple search to discover awesome GIFs, powered by the Giphy API',
    width: '30%',
  },
  {
    url: cinnaboba,
    title: 'Bobamap',
    link: './bobamap',
    external: '',
    repo: '',
    description: 'A map of (most) boba places around the SF Bay Area',
    width: '40%',
  },
  {
    url: poster,
    title: 'LLNL Poster',
    link: './llnlposter',
    external: '',
    repo: '',
    description: 'Project poster from my 2019 summer internship at LLNL',
    width: '40%',
  },
  {
    url: livecolor,
    title: 'LiveColor',
    link: '',
    external: 'https://team-harmony-dev.github.io/LiveColor_Website/', 
    repo: 'https://github.com/TheBrows/LiveColor',
    description: 'Android application for color-picking (link currently unprovided)',
    width: '30%',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 300,
    width: '80%',
    margin: 'auto',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    backgroundColor: '#ffffff',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export const Projects = () => {
  const classes = useStyles();
  return (
    <div className="content-wrapper">
      <h2 className="gradient-font">Projects</h2>
      <div className={classes.root}>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {images.map((card) => (
              <Grid item key={card.title} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.url}
                    title="Image title"
                  />
                  {/* <img className={classes.cardMedia} src={card.url} alt="pic" /> */}
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                      {card.link.length > 0 &&
                        <Link to={card.link}>
                          <Button size="small" color="primary">
                            View
                        </Button>
                        </Link>
                      }
                       {card.external.length > 0 &&
                        <Button size="small" color="primary" href={card.external}>
                          View
                      </Button>
                      }
                      {card.repo.length > 0 &&
                        <Button size="small" color="primary" href={card.repo}>
                          Code
                      </Button>
                      }
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <Link to="/markdownpreviewer"><h3 style={{ textAlign: 'center' }}>Markdown Previewer</h3></Link>
    </div>
  );
}