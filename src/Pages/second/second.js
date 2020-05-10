import React, { useEffect } from 'react';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

export default function Second(){
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'SECOND' });
    }, [dispatch]);

    return (
        <div className={classes.container}>
            <h1 className={classes.text}>Second function</h1>
        </div>
    );
}