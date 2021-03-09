import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

// Icons
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import PostAddIcon from '@material-ui/icons/PostAdd';
import WorkIcon from '@material-ui/icons/Work';
import MapIcon from '@material-ui/icons/Map';
import ForumIcon from '@material-ui/icons/Forum';
import Divider from '@material-ui/core/Divider';

{/* <Route path="/" exact component={Home} />
<Route path="/about" exact component={About} />
<Route path="/resume" exact component={Resume} />
<Route path="/projects" exact component={Projects} />
<Route path="/gifinder" exact component={GIFinder} />
<Route path="/bobamap" exact component={BobaMap} />
<Route path="/ramenmap" exact component={RamenMap} />
<Route path="/pokedex" exact component={Pokedex} />
<Route path="/llnlposter" exact component={Poster} />
<Route path="/markdownpreviewer" exact component={MarkdownPreviewer} />
<Route path="/photos" exact component={Photos} />
<Route path="/contact" exact component={Contact} />
<Redirect to='/' /> */}

const textColor = "#ffffff";

export const mainListItems = (
    <div>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Home" style={{ color: textColor }} />
            </ListItem>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <EmojiPeopleIcon />

                </ListItemIcon>
                <ListItemText primary="About" style={{ color: textColor }} />
            </ListItem>
        </Link>
        <Link to="/resume" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Resume" style={{ color: textColor }} />
            </ListItem>
        </Link>
        <Link to="/projects" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" style={{ color: textColor }} />
            </ListItem>
        </Link>
        <Link to="/photos" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <MapIcon />

                </ListItemIcon>
                <ListItemText primary="Photos" style={{ color: textColor }} />
            </ListItem>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" style={{ color: textColor }} />
            </ListItem>
        </Link>
    </div>
);

export const secondaryListItems = (
    <div>
        {/* <Link to="/sharencare" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <ForumIcon />
                </ListItemIcon>
                <ListItemText primary="Share and Care" />
            </ListItem>
        </Link> */}
    </div>
);
