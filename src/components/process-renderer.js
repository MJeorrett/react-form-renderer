import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

import { StepGroup } from './step-group';

export class ProcessRenderer extends Component {

    renderStep = (step, index) => {
        return (
            <div key={index}>
                <Header as='h1'>{step.title}</Header>
                {this.renderStepFields(step.fields)}
            </div>
        );
    }

    renderStepFields(fields) {
        return (
            fields.map((field, index) => {
                return (
                    <div key={index}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label={field.title} placeholder={field.title}></Form.Input>
                            </Form.Group>
                        </Form>
                    </div>
                )
            })
        );
    }

    render() {
        return (
            <div>
                <StepGroup titles={this.props.steps.map(s => s.title)} />
                {this.props.steps.map(this.renderStep)}
                {JSON.stringify(this.state, null, 2)}
            </div>
        );
    }
}

ProcessRenderer.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        fields: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string
        }))
    }))
};