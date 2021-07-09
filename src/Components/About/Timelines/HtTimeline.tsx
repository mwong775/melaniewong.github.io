import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

export default function HtTimeline() {
  return (
    <React.Fragment>
      <div style={{display: 'flex'}}>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
        </TimelineSeparator>
        <Typography>Internship</Typography>
      </div>
      <div style={{display: 'flex'}}>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <Typography>Part-time/Research</Typography>
      </div>

      <Timeline align="alternate">

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">September 2020 - Present</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Graduate Teaching Assistant, pursuing M.S. Computer Science at UC Santa Cruz</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">June - August 2020</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Global Technology Summer Analyst at Bank of America</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">June 2020</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>B.S. in Computer Science with Highest Honors, Cum Laude at UCSC</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">May 2020 - January 2021</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Lead Programmer for RI Project at LEEPS Lab, UCSC Economics Department</Typography>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">September 2019</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Undergraduate Researcher at Baskin School of Engineering, UCSC</Typography>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">June - September 2019</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Computation Intern at Lawrence Livermore National Laboratory</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">March 2019</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Undergraduate Research Assistant at Tech4Good Lab, UCSC</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">September 2017</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Pursuing B.S. Computer Science at University of California, Santa Cruz</Typography>
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </React.Fragment>
  );
}

