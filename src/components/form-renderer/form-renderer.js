import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Breadcrumbs } from './breadcrumbs';
import { Step } from './step';
import { Buttons } from './buttons';

export class FormRenderer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStepIndex: 0
        };
    }

    setActiveStepIndex = (index) => {
        this.setState({
            activeStepIndex: index
        });
    }

    onNext = () => {
        this.setActiveStepIndex(this.state.activeStepIndex + 1);
    }

    onPrevious = () => {
        this.setActiveStepIndex(this.state.activeStepIndex - 1);
    }

    onSubmit = () => {
        console.log("Form submitted!");
    }

    render() {
        const { steps } = this.props
        const { activeStepIndex } = this.state;
        const isFirstPage = activeStepIndex === 0;
        const isLastPage = activeStepIndex === steps.length - 1;
        return (
            <div>
                <Breadcrumbs
                    titles={steps.map(s => s.title)}
                    activeStepIndex={activeStepIndex}
                    onTitleSelected={this.setActiveStepIndex} />
                {this.props.steps.map((step, index) => {
                    return (
                        <Step key={index}
                            step={step}
                            isActive={activeStepIndex === index}
                        />
                    );
                })}
                <Buttons 
                    isFirstPage={isFirstPage}
                    isLastPage={isLastPage}
                    onPrevious={this.onPrevious}
                    onNext={this.onNext}
                    onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

FormRenderer.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        fields: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired
        })).isRequired
    })).isRequired
};