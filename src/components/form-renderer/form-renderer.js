import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

import './form-renderer.css';
import { StepGroup } from './step-group';
import {
    previousStep,
    nextStep,
    selectStep,
    submit
} from '../../store/form-render/form-renderer.actions';

class FormRenderer extends Component {

    renderButtons = (index) => {
        const first = index === 0;
        const last = index === this.props.steps.length - 1;

        return (
            <div>
                { !first && <Button onClick={this.props.previousStep}>Previous</Button> }
                { !last && <Button onClick={this.props.nextStep}>Next</Button> }
                { last && <Button positive onClick={this.props.submit}>Submit</Button> }
            </div>
        )
    }

    renderStep = (step, index) => {
        const selected = index === this.props.selectedStepIndex;

        return (
            <div key={index} className={selected ? "" : "displayNone"}>
                <Form>
                    {step.fields.map(this.renderStepField)}
                </Form>
                {this.renderButtons(index)}
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
                    selectedIndex={this.props.selectedStepIndex}
                    onTitleSelected={this.props.selectStep} />
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