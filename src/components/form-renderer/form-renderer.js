import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Divider } from 'semantic-ui-react';

import { Breadcrumbs } from './breadcrumbs';
import { Step } from './step';
import { Buttons } from './buttons';
import * as propTypes from './propTypes';

export class FormRenderer extends Component {
    constructor(props) {
        super(props);

        const data = {};

        props.steps.forEach(step => {
            data[step.title] = {};

            step.fields.forEach(field => {
                data[step.title][field.title] = null
            });
        });

        this.state = {
            activeStepIndex: 0,
            data
        };
    }

    onUpdate = (step, newValue) => {
        const newData = Object.assign({}, this.state.data, {
            [step.title]: newValue
        });
        this.setState({
            data: newData
        });
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
        console.log("Form submitted:", this.state.data);
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
                            onUpdate={newValue => this.onUpdate(step, newValue)}
                        />
                    );
                })}
                <Divider hidden />
                <Buttons 
                    isFirstPage={isFirstPage}
                    isLastPage={isLastPage}
                    onPrevious={this.onPrevious}
                    onNext={this.onNext}
                    onSubmit={this.onSubmit}/>
                
                <pre>
                    {JSON.stringify(this.state, null, 3)}
                </pre>
            </div>
        );
    }
}

FormRenderer.propTypes = {
    steps: PropTypes.arrayOf(propTypes.step)
};