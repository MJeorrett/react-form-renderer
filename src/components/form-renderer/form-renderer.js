import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

import './form-renderer.css';
import { Breadcrumbs } from './breadcrumbs';
import {
    previousStep,
    nextStep,
    selectStep,
    submit
} from '../../store/form-render/form-renderer.actions';
import { Buttons } from './buttons';

class FormRenderer extends Component {
    renderStep = (step, index) => {
        const selected = index === this.props.selectedStepIndex;

        return (
            <div key={index} className={selected ? "" : "displayNone"}>
                <Form>
                    {step.fields.map(this.renderStepField)}
                </Form>
                <Buttons
                    numberOfSteps={this.props.steps.length}
                    currentIndex={this.props.selectedStepIndex}
                    onPrevious={this.props.previousStep}
                    onNext={this.props.nextStep}
                    onSubmit={this.props.submit} />
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
                <Breadcrumbs
                    titles={this.props.steps.map(s => s.title)}
                    selectedIndex={this.props.selectedStepIndex}
                    onTitleSelected={this.props.selectStep} />
                {this.props.steps.map(this.renderStep)}
            </div>
        );
    }
}

FormRenderer.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        fields: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired
        }).isRequired)
    })).isRequired
};

const mapStateToProps = (state) => {
    return {
        selectedStepIndex: state.formRenderer.currentStepIndex
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        nextStep: () => dispatch(nextStep()),
        previousStep: () => dispatch(previousStep()),
        selectStep: (index) => {
            dispatch(selectStep(index))
        },
        submit: () => dispatch(submit())
    };
};

const FormRendererContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormRenderer);

export default FormRendererContainer;