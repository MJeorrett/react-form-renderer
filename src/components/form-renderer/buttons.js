import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'semantic-ui-react';

export class Buttons extends Component {
    render = () => {

        const { currentIndex, onPrevious, onNext, onSubmit, numberOfSteps } = this.props;

        const first = currentIndex === 0;
        const last = currentIndex === numberOfSteps - 1;

        return (
            <div>
                { !first && <Button onClick={onPrevious}>Previous</Button> }
                { !last && <Button onClick={onNext}>Next</Button> }
                { last && <Button positive onClick={onSubmit}>Submit</Button> }
            </div>
        )
    }
}

Buttons.propTypes = {
    numberOfSteps: PropTypes.number.isRequired,
    currentIndex: PropTypes.number.isRequired,
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};