import React, { Component } from 'react';
import {
    Container,
    Divider,
    Header
} from 'semantic-ui-react';

import { FormRenderer } from '../components/form-renderer'

export class NewProcessView extends Component {

    steps = [
        {
            title: "Title",
            fields: [
                {
                    title: "Title"
                }
            ]
        },
        {
            title: "Description",
            fields: [
                {
                    title: "Description"
                }
            ]
        }
    ];

    render() {
        return (
            <div>
                <Container>
                    <Divider hidden />
                    <Header as="h1" align="center">
                        New Process
                    </Header>
                    <Divider hidden />
                    <FormRenderer steps={this.steps} />
                </Container>
            </div>
        );
    }
}