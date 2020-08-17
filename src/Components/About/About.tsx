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
  return ['Introduction', 'During 2019...', 'Earlier in 2020...', 'This Summer (so far)...'];
}

function getStepContent(step: Number) {
  switch (step) {
    case 0:
      return `I am an incoming Master's student pursuing a 4-year B.S./M.S. in Computer Science at UC Santa Cruz. 
      Interests primarily include topics in computer & network security, distributed systems, web development, 
      cloud-based platforms, and many other domains within the field of software engineering. I'm eager to work with diverse
      technologies to expand my expertise.`;
    case 1:
      return `I was a Computation Intern at the National Ignition Facility, a division of Lawrence Livermore National Laboratory. 
      In the quarter of Fall 2019,  I began a research project focused on web and network security for everyday online users.
      I also worked part time this Fall as a Mozilla Ingenious for the Glass Room, a pop-up exhibition in downtown San Francisco 
      sponsored by Tactical Tech and Mozilla Firefox to address modern issues surrounding data privacy and digital security.`;
    case 2:
      return `I recently graduated with my Bachelor's in June, and will spend my fourth year at UCSC pursuing a Master's
      to finish by Spring 2021 as part of the new B.S./M.S. pathways program. I was also selected for the Building Belonging Fellowship award,
      an opportunity to build software for conducting research in an experimental economics lab at UCSC over this summer.`;
    case 3:
      return `I just finished my internship at Bank of America as a Global Technology Summer Analyst. My team and I scraped over
      30+ financial and regulatory documents to build an NLP language model using Python. We also created a document search engine with
      similarity scoring and keyword highlighting using frequency and deep learning models.`;
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
        <p>Other interests: playing piano, hiking, rock climbing, collecting plushies, playing Animal Crossing~</p>
				<p>More information on the Tech4Good Lab can be found <a href="https://tech4good.soe.ucsc.edu/#/" target="_blank" rel="noopener noreferrer">here</a>.</p>
				<p>The Glass Room website can be found <a href="https://theglassroom.org" target="_blank" rel="noopener noreferrer">here</a>.</p>
				<p>The Glass Room offers Data Detox Kits, which are available online <a href="https://datadetoxkit.org/en/home" target="_blank" rel="noopener noreferrer">here</a>.</p>
			</div>
			);
	}
}
