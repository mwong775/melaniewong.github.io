import * as React from "react";
import './Home.scss';
import { Link } from 'react-router-dom';
import { init } from 'ityped';
import Button from '@material-ui/core/Button';
import cinnamoroll_sup from '../Photos/images/cinna_sup.gif';

export class Home extends React.Component {

  componentDidMount() {
    const name = document.querySelector('#nameId');
    init(name, { showCursor: false, strings: ['Hi there!', 'Melanie Wong'] })
  }

  render() {
    const skills = ["Python", "JavaScript", "C++", "TypeScript", "Angular", "React", "Docker", "Polymer.js", "Java", "HTML", "CSS", "Kubernetes", "Wireshark", "Android", "Node.js"];
    const grad = ["Graduate Teaching Assistant (CSE150/L - Fall 2020, CSE30 - Winter 2021)", "Coursework: Artificial Intelligence, Sensor Networks and Internet of Things"];
    const undergrad = ["Graduated with Highest Honors, Cum Laude", "NCAA Track & Field Student-Athlete (2 years)", "Coursework: Algorithms & Data Structures, Distributed Systems, Computer & Network Security, Machine Learning, Coding for Social Good"];

    return (
      <div className="home">
        <div className="intro">
          <h2 className="name"><div id="nameId" style={{ color: "#ffffff" }}></div></h2>
          <img className="cinnamoroll" src={cinnamoroll_sup} alt="cinnamoroll" />
        </div>
        <div className=" content-wrapper">
          <div className="about">
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
              <p>Welcome to my website! Please feel free to read more <Link to="/about">about</Link> me, or you can check out my <Link to="/resume">resume</Link>, past <Link to="/projects">projects</Link>, collection of <Link to="/photos">photos</Link>, or <Link to="/contact">contact</Link> me.</p>
              <p>Source available on GitHub <a href="https://github.com/mwong775/melaniewong.github.io/tree/development" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
          </div>

          <div id="education">
            <h2 className="gradient-font">Education</h2>
            <div className="education-block">
              <h3>University of California, Santa Cruz</h3>
              <span className="education-date">Sep 2020 - Present</span>
              <h4>M.S. Computer Science and Engineering</h4>
              <ul>
                {grad.map((point) => {
                  return (
                    <li>{point}</li>
                  )
                })}
              </ul>
            </div>
            <div className="education-block">
              <h3>University of California, Santa Cruz</h3>
              <span className="education-date">Sep 2017 - June 2020</span>
              <h4>B.S. Computer Science</h4>
              <ul>
                {undergrad.map((point) => {
                  return (
                    <li>{point}</li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div id="skills">
            <h2 className="gradient-font">Skills</h2>
            <ul>
              {skills.map((skill) => {
                return (
                  <li style={{ color: "#ffffff" }}>{skill}</li>
                )
              })}
            </ul>
          </div>


        </div>
      </div>
    );
  }
}


