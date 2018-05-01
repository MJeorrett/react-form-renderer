import React, { Component } from 'react';
import { Form, Header, Step } from 'semantic-ui-react';

export class ProcessRenderer extends Component {

    constructor(props) {
        super(props);

        this.state = { activeStepIndex: 0 }
    }

    handleStepClick = (index) => {
        this.setState({
            activeStepIndex: index
        });
    }

    renderStep(step, index) {
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

    renderStepGroup(steps) {
        return (
            <Step.Group>
                {steps.map(this.renderStepGroupOption)}                
            </Step.Group>
        );
    }

    renderStepGroupOption = (step, index) => {
        return (
            <Step
                key={index}
                active={index === this.state.activeStepIndex}
                onClick={(e) => this.handleStepClick(index)}>
                <Step.Title>{step.title}</Step.Title>
            </Step>
        )
    }

    render() {
        return (
            <div>
                {this.renderStepGroup(this.props.steps)}
                {this.props.steps.map((step, index) => this.renderStep(step, index))}
                {JSON.stringify(this.state, null, 2)}
            </div>
        );
    }
}