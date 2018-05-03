import React, { Component } from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';

import * as Views from '../../views';

export class MyAppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" component={Views.HomeView} />
                    <Route exact path="/new-process" component={Views.NewProcessView} />
                    <Redirect to="/home" /> 
                </Switch>
            </BrowserRouter>
        )
    }
}