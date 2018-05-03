export const actionTypes = {
    previousStep: "[form-renderer] previousStep",
    nextStep: "[form-renderer] nextStep",
    selectStep: "[form-renderer] selectStep",
    submit: "[form-renderer] submit"
};

Object.freeze(actionTypes);

export function previousStep() {
    return { type: actionTypes.previousStep };
}

export function nextStep() {
    return { type: actionTypes.nextStep };
}

export function selectStep(index) {
    return {
        type: actionTypes.selectStep,
        payload: index
    };
}

export function submit() {
    return { type: actionTypes.submit };
}