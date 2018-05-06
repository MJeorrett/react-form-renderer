import React, { Component } from 'react';
import { Step } from 'semantic-ui-react';

import { PropTypes } from 'prop-types'

export class Breadcrumbs extends Component {

    handleStepClick = (index) => {
        this.props.onTitleSelected(index);
    }

    renderStepGroupOption = (title, index) => {
        return (
            <Step
                key={index}
                active={index === this.props.selectedIndex}
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

Breadcrumbs.propTypes = {
    titles: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedIndex: PropTypes.number,
    onTitleSelected: PropTypes.func.isRequired
};