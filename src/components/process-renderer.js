import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

import './process-renderer.css';
import { StepGroup } from './step-group';

export class ProcessRenderer extends Component {

    constructor(props) {
        super(props);

        this.state = { selectedStepIndex: 0 };
    }

    stepSelected = (index) => {
        this.setState({
            selectedStepIndex: index
        });
    }

    renderStep = (step, index) => {
        return (
            <div key={index} className={index === this.state.selectedStepIndex ? "" : "displayNone"}>
                <Header as='h1'>{step.title}</Header>
                {step.fields.map(this.renderStepField)}
            </div>
        );
    }

    renderStepField(field, index) {
        return (
            <div key={index}>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label={field.title} placeholder={field.title}></Form.Input>
                    </Form.Group>
                </Form>
            </div>
        );
    }

    render() {
        return (
            <div>
                <StepGroup titles={this.props.steps.map(s => s.title)} titleSelected={this.stepSelected} />
                {this.props.steps.map(this.renderStep)}
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