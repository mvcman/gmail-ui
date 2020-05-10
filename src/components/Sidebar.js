import React from 'react';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import EventIcon from '@material-ui/icons/Event';
import ApartmentIcon from '@material-ui/icons/Apartment';
import FlightIcon from '@material-ui/icons/Flight';
//import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import AddIcon from '@material-ui/icons/Add';

const pages = [
    {
        id: 1,
        title: 'Dashboard',
        href: '/dashboard',
        icon: <DashboardIcon style={{ marginRight: 20 }}/>,
    },
    {
        id: 2,
        title: 'Calendar',
        href: '/calendar',
        icon: <EventIcon style={{ marginRight: 20 }}/>,
    },
    {
        id: 3,
        title: 'Teams',
        href: '/teams',
        icon: <ApartmentIcon style={{ marginRight: 20 }}/>,
    },
    {
        id: 4,
        title: 'People',
        href: '/people',
        icon: <PeopleIcon style={{ marginRight: 20 }}/>,
    },
    {
        id: 5,
        title: 'Holidays',
        href: '/holiday',
        icon: <FlightIcon style={{ marginRight: 20 }}/>,
    },
    {
        id: 5,
        title: 'Settings',
        href: '/settings',
        icon: <SettingsIcon style={{ marginRight: 20 }}/>,
    },
];

export default function Sidebar(){
    const classes = useStyles();
    const isToggle = useSelector(state => state.toggle.isOpen);
    return (
        <div className={isToggle ? classes.sidebarBig : classes.sidebar}>
            <div className={classes.btn}>
                <AddIcon fontSize="large" style={{ color: 'red', marginRight: 20 }}/> Compose
            </div>
            {
                pages.map((page, i) => (
                    <Link to={{ pathname: page.href }} className={classes.link}>
                        {page.icon}
                        {page.title}
                    </Link>
                ))
            }
        </div>
    );
}