import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

export class HomeView extends Component {
    render() {
        return (
            <Container>
                <Header as="h1">Welcome to Form Builder</Header>
            </Container>
        );
    }
}