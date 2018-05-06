import React, { Component } from 'react';
import {
    Container,
    Divider,
    Header
} from 'semantic-ui-react';

import {
    AppNavBar,
    FormRenderer
} from '../components'

export class NewFormView extends Component {

    steps = [
        {
            title: "Title",
            fields: [
                {
                    title: "Title"
                },
                {
                    title: "Sub-title"
                }
            ]
        },
        {
            title: "Description",
            fields: [
                {
                    title: "Description"
                },
                {
                    title: "Version"
                }
            ]
        }
    ];

    render() {
        return (
            <Container fluid>
                <AppNavBar />
                <Container>
                    <Header as="h1" align="center">
                        New Form
                    </Header>
                    <Divider hidden />
                    <FormRenderer steps={this.steps} />
                </Container>
            </Container>
        );
    }
}