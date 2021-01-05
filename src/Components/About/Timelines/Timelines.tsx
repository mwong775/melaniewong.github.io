import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HtTimeline from './HtTimeline';
import ExpTimeline from './ExpTimeline';
import EvtTimeline from './EvtTimeline';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import WorkIcon from '@material-ui/icons/Work';
import EventIcon from '@material-ui/icons/Event';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          centered
        >
          <Tab label="Highlights" icon={<AmpStoriesIcon />} {...a11yProps(0)} />
          <Tab label="Experience" icon={<WorkIcon />} {...a11yProps(1)} />
          <Tab label="Events/Awards" icon={<EventIcon />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
            <HtTimeline />
      </TabPanel>
      <TabPanel value={value} index={1}>
            <ExpTimeline />
      </TabPanel>
      <TabPanel value={value} index={2}>
            <EvtTimeline />
      </TabPanel>
    </div>
  );
}
