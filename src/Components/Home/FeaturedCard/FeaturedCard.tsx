import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import './FeaturedCard.scss';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    height: '100%',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
    backgroundColor: '#ffffff',
    padding: '5px',
  },
});

export default function FeaturedCard(props) {
  const classes = useStyles();
  const { content } = props;

  return (
    <Grid item key={content.title} xs={12} md={6}>
      <CardActionArea style={{ height: '100%' }} href={content.link}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {content.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {content.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {content.description}
              </Typography>
              <div className="tags">
              {content.tags.map((tag) => (
                <Button variant="outlined" color="primary" size="small">
                    {tag}
                </Button>
              ))}
              </div>
            </CardContent>
          </div>
          <Hidden xsDown>
            <img className={classes.cardMedia} src={content.image} alt="logo" />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedCard.propTypes = {
  content: PropTypes.object,
};
