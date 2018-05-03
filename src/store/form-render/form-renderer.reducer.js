import { FormRendererState } from './form-renderer.state';
import {
    actionTypes
} from './form-renderer.actions';

function updatePreviousStep(state) {
    return Object.assign({}, state, {
        currentStepIndex: state.currentStepIndex - 1
    });
}

function updateNextStep(state) {
    return Object.assign({}, state, {
        currentStepIndex: state.currentStepIndex + 1
    });
}

function updateSelectStep(state, action) {
    return Object.assign({}, state, {
        currentStepIndex: action.payload
    });
}

function updateSubmitStep(state) {
    console.log("Form submitted!");
    return state;
}

export default (state = new FormRendererState(), action) => {
    switch(action.type) {
        case actionTypes.previousStep:
            return updatePreviousStep(state);

        case actionTypes.nextStep:
            return updateNextStep(state);

        case actionTypes.selectStep:
            return updateSelectStep(state, action);

        case actionTypes.submit:
            return updateSubmitStep(state);

        default:
            return state;
    }
}