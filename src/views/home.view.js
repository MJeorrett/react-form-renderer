import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Button, Divider } from 'semantic-ui-react';

import { AppNavBar } from '../components';

export class HomeView extends Component {
    render() {
        return (
            <Container fluid>
                <AppNavBar />
                <Container>
                    <Header as="h1">Welcome to Form Builder</Header>
                    <Divider hidden />
                    <Button>
                        <Link to="/new-form">New Form</Link>
                    </Button>
                </Container>
            </Container>
        );
    }
}