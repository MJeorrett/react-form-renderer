import React, { Component } from 'react';
import { Step } from 'semantic-ui-react';

import { PropTypes } from 'prop-types'

export class Breadcrumbs extends Component {

    renderOption = (title, index) => {
        const { activeStepIndex, onTitleSelected } = this.props;
        return (
            <Step
                key={index}
                active={index === activeStepIndex}
                onClick={(e) => onTitleSelected(index)}>
                <Step.Title>{title}</Step.Title>
            </Step>
        )
    }

    render() {
        return (
            <Step.Group>
                {this.props.titles.map(this.renderOption)}                
            </Step.Group>
        );
    }
}

Breadcrumbs.propTypes = {
    titles: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeStepIndex: PropTypes.number,
    onTitleSelected: PropTypes.func.isRequired
};