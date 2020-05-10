import React from 'react';
import useStyles from './styles';
//import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';

export default function Navbar(){
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <div className={classes.navbar}>
            <MenuIcon fontSize="large" style={{ margin: 'auto 0' }} onClick={() => dispatch({ type: 'TOGGLE' })}/>
            {/*<AccountCircleIcon />*/}
        </div>
    );
}