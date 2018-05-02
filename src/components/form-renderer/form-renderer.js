import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

import './form-renderer.css';
import { StepGroup } from './step-group';

export class FormRenderer extends Component {

    constructor(props) {
        super(props);

        this.state = { selectedStepIndex: 0 };
    }

    selectStep = (index) => {
        this.setState({
            selectedStepIndex: index
        });
    }

    nextStep = () => this.selectStep(this.state.selectedStepIndex + 1)
    previousStep = () => this.selectStep(this.state.selectedStepIndex - 1)

    renderStep = (step, index) => {

        const selected = index === this.state.selectedStepIndex;
        const first = index === 0;
        const last = index === this.props.steps.length - 1;

        return (
            <div key={index} className={selected ? "" : "displayNone"}>
                <Form>
                    {step.fields.map(this.renderStepField)}
                </Form>
                { first ? null : <Button onClick={this.previousStep}>Previous</Button> }
                { last ? null : <Button onClick={this.nextStep}>Next</Button> }
                { last ? <Button positive>Submit</Button> : null }
            </div>
        );
    }

    renderStepField(field, index) {
        return (
            <Form.Group key={index} widths='equal'>
                <Form.Input
                    fluid
                    label={field.title}
                    placeholder={field.title}>
                </Form.Input>
            </Form.Group>
        );
    }

    render() {
        return (
            <div>
                <StepGroup
                    titles={this.props.steps.map(s => s.title)}
                    selectedIndex={this.state.selectedStepIndex}
                    onTitleSelected={this.selectStep} />
                {this.props.steps.map(this.renderStep)}
            </div>
        );
    }
}

FormRenderer.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        fields: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string
        }))
    }))
};