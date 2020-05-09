import React from 'react';
import useStyles from './styles';

export default function Second(){
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h1 className={classes.text}>Second function</h1>
        </div>
    );
}