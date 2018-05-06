import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'semantic-ui-react';

export class Buttons extends Component {
    render = () => {

        const { isFirstPage, isLastPage, onPrevious, onNext, onSubmit } = this.props;

        return (
            <div>
                { !isFirstPage && <Button onClick={onPrevious}>Previous</Button> }
                { !isLastPage && <Button onClick={onNext}>Next</Button> }
                { isLastPage && <Button positive onClick={onSubmit}>Submit</Button> }
            </div>
        )
    }
}

Buttons.propTypes = {
    isFirstPage: PropTypes.bool.isRequired,
    isLastPage: PropTypes.bool.isRequired,
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};