import React from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import poster from '../Photos/images/Poster.jpg';

function getSteps() {
  return ['Introduction', 'This past Summer...', 'This Fall...'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `I am a student at UC Santa Cruz pursuing a B.S. in Computer Science. I'm also a Division III student-athlete in 
      			track & field, and specialize in sprints and hurdles.`;
    case 1:
      return 'I was a Computing Intern at Lawrence Livermore National Laboratory, specifically the National Ignition Facility. My project involved migrating the tech stack of an in-house web-based application from Apache Struts to React. This involved redesigning the user interface in TypeScript, as well as implementing web services in Java.';
   
    case 2:
      return `I'm starting my second quarter in the Tech4Good Lab at UCSC, focusing on improving usability and experience on one of our learning platforms. I'm also working part time as an "Ingenious" for the Glass Room, a pop-up exhibition in downtown San Francisco sponsored by Tactical Tech and Mozilla Firefox. In the Glass Room, we faciliate workshops and activities addressing today's issues regarding data privacy and digital security.`;
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
          <Typography>Timeline steps completed - you made it!</Typography>
          <Button onClick={handleReset}>
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
			<>
				<h2>About Me</h2>
				<VerticalLinearStepper/>
				<br/>
				<h6>Project poster from my internship at LLNL</h6>
				<div style={{width: '80%', margin: 'auto', marginTop: '2%'}}>
					 <img
				      className="d-block w-100"
				      src={poster}
				      alt="LLNL Poster"
				    />
			    </div>
				<p>More information on the Tech4Good Lab can be found <a href="https://tech4good.soe.ucsc.edu/#/" target="_blank">here</a>.</p>
				<p>The Glass Room website can be found <a href="https://theglassroom.org" target="_blank">here</a>.</p>
				<p>The Glass Room SF offers Data Detox Kits, which are also available online <a href="https://datadetoxkit.org/en/privacy/essential" target="_blank">here</a>.</p>

			</>
			);
	}
}

/*
<h4>Some History</h4>
*/