import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
// images on summary tab
import boba_summary_old from './figures_old/boba_summary.png';
import boba_summary from './figures/boba_summary.png';
import avg_review_count_old from './figures_old/boba_avg_review_count.png';
import avg_review_count from './figures/boba_avg_review_count.png';
import boba_bigram_freq from './figures/boba_bigram_freq.png';
import boba_bigram_freq_old from './figures_old/boba_bigram_freq.png';
// boba guys tab
import boba_freq_boba_guys from './figures/boba_freq_Boba Guys.png';
import boba_bigram_freq_boba_guys from './figures/boba_bigram_freq_Boba Guys.png'
import boba_freq_boba_guys_old from './figures_old/boba_freq_Boba Guys.png';
import boba_bigram_freq_boba_guys_old from './figures_old/boba_bigram_freq_Boba Guys.png'
// gong cha
import boba_freq_gong_cha from './figures/boba_freq_Gong Cha.png';
import boba_bigram_freq_gong_cha from './figures/boba_bigram_freq_Gong Cha.png'
import boba_freq_gong_cha_old from './figures_old/boba_freq_Gong Cha.png';
import boba_bigram_freq_gong_cha_old from './figures_old/boba_bigram_freq_Gong Cha.png'
// happy lemon
import boba_freq_happy_lemon from './figures/boba_freq_Happy Lemon.png';
import boba_bigram_freq_happy_lemon from './figures/boba_bigram_freq_Happy Lemon.png'
import boba_freq_happy_lemon_old from './figures_old/boba_freq_Happy Lemon.png';
import boba_bigram_freq_happy_lemon_old from './figures_old/boba_bigram_freq_Happy Lemon.png'
// itea
import boba_freq_itea from './figures/boba_freq_i-Tea.png';
import boba_bigram_freq_itea from './figures/boba_bigram_freq_i-Tea.png'
import boba_freq_itea_old from './figures_old/boba_freq_i-Tea.png';
import boba_bigram_freq_itea_old from './figures_old/boba_bigram_freq_i-Tea.png'
// sharetea
import boba_freq_sharetea from './figures/boba_freq_Sharetea.png';
import boba_bigram_freq_sharetea from './figures/boba_bigram_freq_Sharetea.png'
import boba_freq_sharetea_old from './figures_old/boba_freq_Sharetea.png';
import boba_bigram_freq_sharetea_old from './figures_old/boba_bigram_freq_Sharetea.png'
// t4
import boba_freq_t4 from './figures/boba_freq_T4.png';
import boba_bigram_freq_t4 from './figures/boba_bigram_freq_T4.png'
import boba_freq_t4_old from './figures_old/boba_freq_T4.png';
import boba_bigram_freq_t4_old from './figures_old/boba_bigram_freq_T4.png'
import './BobaReviews.scss';

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

export default function BobaReviews() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="content-wrapper">
            <h2 className="gradient-font">Analysis of Boba Reviews</h2>
            <div style={{ paddingBottom: '3%', paddingLeft: '1%' }}>
                <li>Randomly decided to analyze yelp reviews of most common Bay Area boba places back in September 2020</li>
                <li>Recently reran the scripts (after adding a couple more stopwords), now into the post-pandemic</li>
                <li>Can observe if and how recent reviews differ during (left) and after (right) the pandemic</li>
            </div>
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
                        <Tab label="Summary" icon={<AmpStoriesIcon />} {...a11yProps(0)} />
                        <Tab label="Boba Guys" icon={<EmojiFoodBeverageIcon />} {...a11yProps(1)} />
                        <Tab label="Gong Cha" icon={<LocalBarIcon />} {...a11yProps(2)} />
                        <Tab label="Happy Lemon" icon={<LocalDrinkIcon />} {...a11yProps(3)} />
                        <Tab label="i-Tea" icon={<EmojiFoodBeverageIcon />} {...a11yProps(4)} />
                        <Tab label="Sharetea" icon={<LocalBarIcon />} {...a11yProps(5)} />
                        <Tab label="T4" icon={<LocalDrinkIcon />} {...a11yProps(6)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <img src={boba_summary_old} alt="boba_summary_old" />
                    <img src={boba_summary} alt="boba_summary" />
                    <img src={avg_review_count_old} alt="avg_review_count_old" />
                    <img src={avg_review_count} alt="avg_review_count" />
                    <img src={boba_bigram_freq_old} alt="boba_bigram_freq_old" />
                    <img src={boba_bigram_freq} alt="boba_bigram_freq" />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <img src={boba_freq_boba_guys_old} alt="boba_freq_boba_guys_old" />
                    <img src={boba_freq_boba_guys} alt="boba_freq_boba_guys" />
                    <img src={boba_bigram_freq_boba_guys_old} alt="boba_bigram_freq_boba_guys_old" />
                    <img src={boba_bigram_freq_boba_guys} alt="boba_bigram_freq_boba_guys" />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <img src={boba_freq_gong_cha_old} alt="boba_freq_gong_cha_old" />
                    <img src={boba_freq_gong_cha} alt="boba_freq_gong_cha" />
                    <img src={boba_bigram_freq_gong_cha_old} alt="boba_bigram_freq_gong_cha_old" />
                    <img src={boba_bigram_freq_gong_cha} alt="boba_bigram_freq_gong_cha" />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <img src={boba_freq_happy_lemon_old} alt="boba_freq_happy_lemon_old" />
                    <img src={boba_freq_happy_lemon} alt="boba_freq_happy_lemon" />
                    <img src={boba_bigram_freq_happy_lemon_old} alt="boba_bigram_freq_happy_lemon_old" />
                    <img src={boba_bigram_freq_happy_lemon} alt="boba_bigram_freq_happy_lemon" />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <img src={boba_freq_itea_old} alt="boba_freq_itea_old" />
                    <img src={boba_freq_itea} alt="boba_freq_itea" />
                    <img src={boba_bigram_freq_itea_old} alt="boba_bigram_freq_itea_old" />
                    <img src={boba_bigram_freq_itea} alt="boba_bigram_freq_itea" />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <img src={boba_freq_sharetea_old} alt="boba_freq_sharetea_old" />
                    <img src={boba_freq_sharetea} alt="boba_freq_sharetea" />
                    <img src={boba_bigram_freq_sharetea_old} alt="boba_bigram_freq_sharetea_old" />
                    <img src={boba_bigram_freq_sharetea} alt="boba_bigram_freq_sharetea" />
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <img src={boba_freq_t4_old} alt="boba_freq_t4_old" />
                    <img src={boba_freq_t4} alt="boba_freq_t4" />
                    <img src={boba_bigram_freq_t4_old} alt="boba_bigram_freq_t4_old" />
                    <img src={boba_bigram_freq_t4} alt="boba_bigram_freq_t4" />
                </TabPanel>
            </div>
        </div>
    );
}

/**
 * Happy Lemon 45
DuckFace Bubble Tea 3
Yokee Milk Tea 6
Boba Bliss 6
Feng Cha Teahouse  奉茶 3
Royaltea USA 3
Pâte à Choux 3
Gong Cha 42
Gong cha 3
Black Sugar 6
Sharetea 60
Cha Express 3
U Cha 6
Boba Guys 30
Boba Guys - San Ramon 3
Asha Tea House 6
Urban Ritual 3
Plentea 6
The Burrow 3
Purple Kow 6
Feng Cha Teahouse 奉茶 3
T4 54
T4 - Walnut Creek 3
T4 Story Road 3
i-Tea 45
iTea 3
Sharetea Hillsdale 3
 */
