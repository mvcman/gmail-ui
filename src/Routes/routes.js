import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Pages/Home/home';
import First from '../Pages/first/first';
import Second from '../Pages/second/second';

export default function Routes(){
    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/first">
                    <First />
                </Route>
                <Route exact path="/first">
                    <Second />
                </Route>
            </Switch>
        </Router>
    );
}