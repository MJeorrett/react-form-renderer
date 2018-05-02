import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as Views from '../../views';

export class MyAppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/new-process" component={Views.NewProcessView} />
                </Switch>
            </BrowserRouter>
        )
    }
}