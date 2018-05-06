import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

import { AppNavBar } from '../components';

export class HomeView extends Component {
    render() {
        return (
            <Container fluid>
                <AppNavBar />
                <Container>
                    <Header as="h1">Welcome to Form Builder</Header>
                </Container>
            </Container>
        );
    }
}