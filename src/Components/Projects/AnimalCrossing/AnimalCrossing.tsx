import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export interface IFish {
  id: number;
  name: string;
  catchphrase: string;
  icon: string;
}
export class AnimalCrossing extends React.Component<{}, { fishies: IFish[] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      fishies: []
    }
  }
  componentDidMount() {
    this.fetchFishData();
  }

  fetchFishData() {
    const url = 'https://acnhapi.com/v1/fish';
    axios.get(url)
      .then(response => {
        const data = response.data;
        for (const fishKey in data) {
          const fish = data[fishKey];
          const transformedFish = {
            id: fish.id,
            name: fish.name["name-USen"],
            catchphrase: fish["catch-phrase"],
            icon: fish.icon_uri,
          }
          this.setState(prevState => ({
            fishies: [...prevState.fishies, transformedFish]
          }));
        }
      })
      .catch(function (error) {
        console.error(error);
      })
  }

  render() {
    return (
      <div className="content-wrapper">
        <h2 className="gradient-font">Animal Crossing Corner</h2>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            {this.state.fishies.map((card) => (
              <Grid item key={card.name} xs={12} sm={6} md={3}>
                <Card>
                  <CardMedia
                    style={{ paddingTop: '56.25%', backgroundColor: '#ffffff' }}
                    image={card.icon}
                    title={card.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      "{card.catchphrase}"
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }

}