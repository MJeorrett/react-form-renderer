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

import { VALIDATIONS } from '../components/form-renderer'

export class NewFormView extends Component {

    steps = [
        {
            title: "Title",
            fields: [
                {
                    title: "Title",
                    validations: [ VALIDATIONS.REQUIRED ]
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
                    title: "Description",
                    validations: [ VALIDATIONS.REQUIRED ]
                },
                {
                    title: "Version",
                    validations: [ VALIDATIONS.REQUIRED ]
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