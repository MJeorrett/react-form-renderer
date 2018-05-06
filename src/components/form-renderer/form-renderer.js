import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { Breadcrumbs } from './breadcrumbs';
import { Step } from './step';
import { Buttons } from './buttons';
import {
    previousStep,
    nextStep,
    selectStep,
    submit
} from '../../store/form-render/form-renderer.actions';

class FormRenderer extends Component {
    render() {
        const { steps, activeStepIndex, onPrevious, onNext, onSubmit, selectStep } = this.props
        const isFirstPage = activeStepIndex === 0;
        const isLastPage = activeStepIndex === steps.length - 1;
        return (
            <div>
                <Breadcrumbs
                    titles={this.props.steps.map(s => s.title)}
                    activeStepIndex={activeStepIndex}
                    onTitleSelected={selectStep} />
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
                    onPrevious={onPrevious}
                    onNext={onNext}
                    onSubmit={onSubmit}/>
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

const mapStateToProps = (state) => {
    return {
        activeStepIndex: state.formRenderer.activeStepIndex
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPrevious: () => dispatch(previousStep()),
        onNext: () => dispatch(nextStep()),
        onSubmit: () => dispatch(submit()),
        selectStep: (index) => {
            dispatch(selectStep(index))
        }
    };
};

const FormRendererContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormRenderer);

export default FormRendererContainer;