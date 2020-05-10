import React, { useEffect } from 'react'
import useStyles from './styles';
import { useDispatch } from 'react-redux';

export default function Home(){
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'HOME' });
    }, [dispatch]);

    return (
        <div className={classes.container}>
            <h1 className={classes.text}>Home Component</h1>
        </div>
    )
}