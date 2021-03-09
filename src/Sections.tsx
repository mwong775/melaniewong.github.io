import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Icons
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import GifIcon from '@material-ui/icons/Gif';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MenuBookIcon from '@material-ui/icons/MenuBook';

export const mainListItems = (
    <div>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <AccountBoxIcon />

                </ListItemIcon>
                <ListItemText primary="About" />
            </ListItem>
        </Link>
        <Link to="/resume" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Resume" />
            </ListItem>
        </Link>
        <Link to="/projects" style={{ textDecoration: 'none' }}>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <ListItemIcon>
                        <CodeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Projects" style={{ color: '#1b95f0' }} />

                </AccordionSummary>
                <Link to="/gifinder" style={{ textDecoration: 'none' }}>

                    <ListItem button>
                        <ListItemIcon>
                            <GifIcon />
                        </ListItemIcon>
                        <ListItemText primary="GIFinder" />
                    </ListItem>
                </Link>
                <Link to="/bobamap" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <EmojiFoodBeverageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Boba Map" />
                    </ListItem>
                </Link>
                <Link to="/ramenmap" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <FastfoodIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ramen Map" />
                    </ListItem>
                </Link>
                <Link to="/pokedex" style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <MenuBookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pokedex" />
                    </ListItem>
                </Link>
            </Accordion>
        </Link>
        <Link to="/photos" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <PhotoLibraryIcon />
                </ListItemIcon>
                <ListItemText primary="Photos" />
            </ListItem>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <ContactMailIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
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
