import React, { Component } from 'react';
import { Step } from 'semantic-ui-react';

export class StepGroup extends Component {

    constructor(props) {
        super(props);

        this.state = { activeStepIndex: 0 }
    }

    handleStepClick = (index) => {
        this.setState({
            activeStepIndex: index
        });
    }

    renderStepGroupOption = (title, index) => {
        return (
            <Step
                key={index}
                active={index === this.state.activeStepIndex}
                onClick={(e) => this.handleStepClick(index)}>
                <Step.Title>{title}</Step.Title>
            </Step>
        )
    }

    render() {
        return (
            <Step.Group>
                {this.props.titles.map(this.renderStepGroupOption)}                
            </Step.Group>
        );
    }
}