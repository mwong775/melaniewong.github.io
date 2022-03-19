import * as React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Timelines from '../About/Timelines/Timelines';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import tech4good from '../../assets/tech4good.png';
import codehouse from '../../assets/codehouse.png';
import glass_room from '../../assets/glass_room.jpg';
import data_detox_kit from '../../assets/data-detox-kits.jpg';
import LibraryMusicTwoToneIcon from '@material-ui/icons/LibraryMusicTwoTone';
import SportsEsportsTwoToneIcon from '@material-ui/icons/SportsEsportsTwoTone';
import StraightenTwoToneIcon from '@material-ui/icons/StraightenTwoTone';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MovieFilterTwoToneIcon from '@material-ui/icons/MovieFilterTwoTone';
import './About.scss';

function getSteps() {
  return ['Introduction', 'How College Began...', 'At UCSC...', 'Nowadays...'];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return `I am a recent graduate who completed a 4-year B.S./M.S. in Computer Science at UC Santa Cruz. 
      My interests primarily include topics in computer & network security, distributed systems, web development, 
      cloud-based platforms, and many other domains within the field of software engineering. I'm always eager to work with diverse
      technologies to learn and expand my expertise.`;
    case 1:
      return `I started at UC Santa Cruz as an NCAA student-athlete in track & field, competing in sprints and hurdles for my first 2 years.
      Although I began my studies with zero CS knowledge or experience, I've worked my way to intern at Lawrence Livermore National Laboratory
      as well as Bank of America during my summers. In my third and final year of undergrad, I started a research project focused on web and
      network security for everyday online users.`;
    case 2:
      return `I graduated with my Bachelor's within three years, and spent my fourth year at UCSC completing a Master's
      by Spring 2021 as part of the new B.S./M.S. pathways program. After that, I interned at Amazon over the summer before starting
      full-time at Microsoft in Fall 2021.`;
    case 3:
      return `I've got more free time to go hiking, indoor climbing, dragonboating, play games, and catch up on lotsss of sleep :)`;
    default:
      return 'Unknown step';
  }
}

/**
 *  My team and I scraped over
      30+ financial and regulatory documents to build an NLP language model using Python. We also created a document search engine with
      similarity scoring and keyword highlighting using frequency and deep learning models.
 * 
 * I also worked part time this Fall as a Mozilla Ingenious for the Glass Room, a pop-up exhibition in downtown San Francisco 
      sponsored by Tactical Tech and Mozilla Firefox to address modern issues surrounding data privacy and digital security.
 * 
 */

const resources = [
  {
    name: 'VMware CodeHouse',
    description: "An article on the 2020 virtual VMware CodeHouse is available",
    link: 'https://blogs.vmware.com/careers/2020/10/vmware-codehouse-2020-the-virtual-experience.html',
    pic: codehouse,
  },
  // <p>Links from VMware CodeHouse: <a href="https://www.instagram.com/p/CGQYebfguI9/?igshid=1pjkd1lk8p3g6&fbclid=IwAR1Gc0_AE6eivllwJAIeCXjSQsf7t7b3KiR_9m8G7WRcba7YKAhUh0XwlqY" target="_blank" rel="noopener noreferrer">instagram post</a> and <a href="https://blogs.vmware.com/careers/2020/10/vmware-codehouse-2020-the-virtual-experience.html" target="_blank" rel="noopener noreferrer">article</a>.</p>
  {
    name: 'Tech4Good',
    description: 'More information about the Tech4Good Lab can be found',
    link: 'https://tech4good.soe.ucsc.edu/#/',
    pic: tech4good,
  },
  {
    name: 'Glass Room',
    description: "More information on The Glass Room can be found on the website",
    link: 'https://theglassroom.org',
    pic: glass_room,
  },
  {
    name: 'Data Detox Kit',
    description: "The Glass Room offers Data Detox Kits, which are available online",
    link: 'https://datadetoxkit.org/en/home',
    pic: data_detox_kit,
  }
]

export const VerticalLinearStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <br />
              <div>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0}>
          <Typography style={{ padding: "1%" }}>Introduction completed - scroll down for more info!</Typography>
          <Button variant="contained" color="primary" onClick={handleReset} style={{ margin: "1%" }}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}

export class About extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <h2 className="gradient-font">About Me</h2>
        <VerticalLinearStepper />
        <br />
        <div className="timeline">
          <Timelines />
        </div>
        <h3 style={{ textAlign: 'center', paddingBottom: '10px'}}>Interests/Hobbies:
        <LibraryMusicTwoToneIcon />
        <SportsEsportsTwoToneIcon />
        <StraightenTwoToneIcon />
        <FastfoodIcon />
        <YouTubeIcon />
        <MovieFilterTwoToneIcon />
        </h3>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {resources.map((card) => (
              <Grid item key={card.name} xs={12} sm={6} md={6}>
                <Card>
                  <CardMedia
                    style={{ paddingTop: '56.25%', backgroundColor: '#ffffff' }}
                    image={card.pic}
                    title={card.name}
                  />
                  {/* <img className={classes.cardMedia} src={card.url} alt="pic" /> */}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description} <a href={card.link} target="_blank" rel="noopener noreferrer">here</a>.
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
