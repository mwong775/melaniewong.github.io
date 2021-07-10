import * as React from "react";
import './Home.scss';
import { Link } from 'react-router-dom';
import { init } from 'ityped';
import Button from '@material-ui/core/Button';
import cinnamoroll_sup from '../Photos/images/cinna_sup.gif';
import FeaturedCard from './FeaturedCard/FeaturedCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import bofa from '../../assets/bofa.jpg';
import leeps from '../../assets/leeps_logo.png';
import t4g from '../../assets/tech4good.png';
import llnl from '../../assets/llnl.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
export class Home extends React.Component {

  componentDidMount() {
    const name = document.querySelector('#nameId');
    init(name, { showCursor: false, strings: ['Hi there!', 'Melanie Wong'] })
  }

  render() {
    const skills = ["Python", "JavaScript", "C++", "TypeScript", "Angular", "React", "Docker", "Polymer.js", "Flask", "Java", "HTML", "CSS", "Kubernetes", "Wireshark", "Android", "Node.js"];
    const grad = ["Graduate Teaching Assistant (CSE150/L - Fall 2020, CSE30 - Winter 2021, CSE20 - Spring 2021)", "Coursework: Sensor Networks and Internet of Things, Cyber-Physical Systems Security, Artificial Intelligence"];
    const undergrad = ["Graduated in 3 years with Highest Honors, Cum Laude", "NCAA Track & Field Student-Athlete (2 years)", "Coursework: Algorithms & Data Structures, Distributed Systems, Computer & Network Security, Machine Learning, Coding for Social Good"];

    const featuredCards = [
      {
        title: 'Bank of America',
        date: 'June - August 2020',
        description: 'Global Technology Summer Analyst',
        link: '',
        tags: ['Python', 'JupyterLab', 'HTML'],
        image: bofa,
        imageText: 'Image Text',
      },
      {
        title: 'LEEPS Lab - UCSC Economics Department',
        date: 'May - January 2021',
        description: 'Lead Programmer',
        link: 'https://leeps.ucsc.edu/',
        tags: ['oTree', 'Polymer.js', 'Python'],
        image: leeps,
        imageText: 'Image Text',
      },
      {
        title: 'UCSC Tech4Good Lab',
        date: 'March 2019 - Present',
        description: 'Research Assistant - Web Development',
        link: 'https://tech4good.soe.ucsc.edu/',
        tags: ['Angular', 'TypeScript', 'Firebase'],
        image: t4g,
        imageText: 'Image Text',
      },
      {
        title: 'Lawrence Livermore National Laboratory',
        date: 'June - September 2019',
        description: 'Computation Intern',
        link: 'https://www.llnl.gov/',
        tags: ['Java', 'React', 'TypeScript'],
        image: llnl,
        imageText: 'Image Text',
      },
    ];

    return (
      <div className="home">
        <div className="intro">
          <h2 className="name"><div id="nameId" style={{ color: "#ffffff" }}></div></h2>
          <img className="cinnamoroll" src={cinnamoroll_sup} alt="cinnamoroll" />
        </div>
        <div className=" content-wrapper">
          <div className="row">
            <div className="about-wrapper">
              <h2 className="gradient-font">About Me</h2>
              <p>Hi! I'm Melanie, and I'm studying Computer Science at the University of California in Santa Cruz.</p>
              <br />
              <Link to="/about">
                <Button variant="outlined" size="large">Learn More</Button>
              </Link>
            </div>
            <div className="about-wrapper">
              <h2 className="gradient-font">About This Site</h2>
              <p>Welcome to my website! Please feel free to read more <Link to="/about">about</Link> me, or you can check out my <Link to="/resume">resume</Link>, peculiar <Link to="/projects">projects</Link>, collection of <Link to="/photos">photos</Link>, or <Link to="/contact">contact</Link> me.</p>
              <p>Source available on GitHub <a href="https://github.com/mwong775/melaniewong.github.io/tree/development" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h2 className="gradient-font">Experience</h2>
          </div>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {featuredCards.map((content) => (
                <FeaturedCard key={content.title} content={content} />
              ))}
            </Grid>
          </Container>
          <div id="education">
            <h2 className="gradient-font">Education</h2>

            <Card className="education-block">
              <CardContent>
                <Typography variant="h5" component="h3">
                  University of California, Santa Cruz
                </Typography>
                <span className="education-date">Sep 2020 - Present</span>
                <Typography component="h4">
                  M.S. Computer Science and Engineering
                </Typography>
                <ul>
                  {grad.map((point) => {
                    return (
                      <li>{point}</li>
                    )
                  })}
                </ul>
              </CardContent>
            </Card>

            <Card className="education-block">
              <CardContent>
                <Typography variant="h5" component="h3">
                  University of California, Santa Cruz
                </Typography>
                <span className="education-date">Sep 2017 - June 2020</span>
                <Typography component="h4">
                B.S. Computer Science
                </Typography>
                <ul>
                  {undergrad.map((p) => {
                    return (
                      <li>{p}</li>
                    )
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div id="skills">
            <h2 className="gradient-font">Skills</h2>
            <ul>
              {skills.map((skill) => {
                return (
                  <Fab variant="extended" color="primary" style={{margin: '5px', color: 'white'}}>{skill}</Fab>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


