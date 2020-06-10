import * as React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './About.scss';

function getSteps() {
  return ['Introduction', 'This past Summer...', 'During Fall 2019...', 'During 2020 (so far)...'];
}

function getStepContent(step: Number) {
  switch (step) {
    case 0:
      return `I am a third-year student pursuing a B.S. in Computer Science at UC Santa Cruz. 
      I'm interested in computer & network security, distributed systems, web development, cloud-based platforms, 
      and many other domains within the field of software engineering. I'm eager to work with diverse technologies to expand my expertise. 
      I'm also a former Division III student-athlete in track & field at UCSC, and specialized in sprints and hurdles.`;
    case 1:
      return `I was a Computation Intern at the National Ignition Facility, a division of Lawrence Livermore National Laboratory. 
      My project an in-house web application that used legacy technologies recently discovered to have security vulnerabilities. 
      I worked on migrating the technology stack from Apache Struts to using React and RESTful services. 
      This involved creating a brand new front-end using React and Typescript, implementing API endpoints in Java, 
      and deploying the new application using Atlassian Bamboo.`;
  
    case 2:
      return `This past fall, I began a research project focused on web and network security for everyday online users.
      It involves building a memory-efficient system to aggregate and check web certificates in our browsers, aiming to 
      improve security without delaying connection speeds.
      I was on the UX team in the Tech4Good Lab at UCSC, focusing on improving usability and experience 
      on one of our collaborative learning platforms. I also worked part time this Fall as a Mozilla Ingenious for the Glass Room, 
      a pop-up exhibition in downtown San Francisco sponsored by Tactical Tech and Mozilla Firefox. 
      In the Glass Room, we faciliate workshops and activities addressing today's issues regarding data privacy and digital security.`;
    case 3:
      return `I'm on track to graduate with my Bachelor's in Spring 2020, and subsequently continue my studies and earn a Master's 
      by Spring 2021 as part of the new B.S./M.S. pathways program. I was recently selected for the Building Belonging Fellowship award,
      an opportunity to build software for research projects in an experimental economics lab at UCSC.`;
    default:
      return 'Unknown step';
  }
}

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
              <br/>
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
          <Typography style={{padding: "1%"}}>Introduction completed - scroll down for more info!</Typography>
          <Button variant="contained" color="primary" onClick={handleReset} style={{margin: "1%"}}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}

export class About extends React.Component {
	render() {
		return(
			<div className="content-wrapper">
				<h2 className="gradient-font">About Me</h2>
				<VerticalLinearStepper/>
				<br/>
        <p>Other interests: playing piano, rock climbing, collecting plushies, playing Animal Crossing :P</p>
				<p>More information on the Tech4Good Lab can be found <a href="https://tech4good.soe.ucsc.edu/#/" target="_blank" rel="noopener noreferrer">here</a>.</p>
				<p>The Glass Room website can be found <a href="https://theglassroom.org" target="_blank" rel="noopener noreferrer">here</a>.</p>
				<p>The Glass Room offers Data Detox Kits, which are available online <a href="https://datadetoxkit.org/en/home" target="_blank" rel="noopener noreferrer">here</a>.</p>
			</div>
			);
	}
}
