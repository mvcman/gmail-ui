import React from 'react'
import useStyles from './styles';

export default function First(){
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h1 className={classes.text}>First Component</h1>
        </div>
    )
}