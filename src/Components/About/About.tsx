import * as React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Timelines from '../About/Timelines/Timelines';
import './About.scss';

function getSteps() {
  return ['Introduction', 'During my undergraduate studies...', 'In 2020...', 'Nowadays...'];
}

function getStepContent(step: Number) {
  switch (step) {
    case 0:
      return `I am currently a Master's student pursuing a 4-year B.S./M.S. in Computer Science at UC Santa Cruz. 
      My interests primarily include topics in computer & network security, distributed systems, web development, 
      cloud-based platforms, and many other domains within the field of software engineering. I'm always eager to work with diverse
      technologies to learn and expand my expertise.`;
    case 1:
      return `I started at UCSC as an NCAA student-athlete in track & field, competing in sprints and hurdles for 2 years.
      My first internship role was a Computation Intern at the National Ignition Facility, a division of Lawrence Livermore National Laboratory. 
      In the quarter of Fall 2019,  I began a research project focused on web and network security for everyday online users.`;
    case 2:
      return `I recently graduated with my Bachelor's in June, and spending my fourth year at UCSC pursuing a Master's
      to finish by Spring 2021 as part of the new B.S./M.S. pathways program. I also completed an internship at Bank of America as a Global Technology Summer Analyst.`;
    case 3:
      return `I'm just trying my best to manage graduate coursework, working as a graduate teaching assistant, and some part-time coding for economics experiments - all while catching up on sleep :)`;
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
        <p>Other interests: playing piano, hiking, rock climbing, collecting plushies, playing Animal Crossing~</p>
        <p>More information on the Tech4Good Lab can be found <a href="https://tech4good.soe.ucsc.edu/#/" target="_blank" rel="noopener noreferrer">here</a>.</p>
        <p>The Glass Room website can be found <a href="https://theglassroom.org" target="_blank" rel="noopener noreferrer">here</a>.</p>
        <p>The Glass Room offers Data Detox Kits, which are available online <a href="https://datadetoxkit.org/en/home" target="_blank" rel="noopener noreferrer">here</a>.</p>
      </div>
    );
  }
}
