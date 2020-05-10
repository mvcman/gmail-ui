import React, { useEffect } from 'react'
import useStyles from './styles';
import { useDispatch } from 'react-redux';

export default function First(){
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FIRST' });
    }, [dispatch]);

    return (
        <div className={classes.container}>
            <h1 className={classes.text}>First Component</h1>
        </div>
    )
}