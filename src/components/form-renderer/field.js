import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Form, Label } from 'semantic-ui-react';

import './field.css';
import { field as fieldPropType } from './propTypes';
import { VALIDATIONS } from './validations';

export class Field extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            isRequired: false,
            isError: false,
            pristine: true
        };
    }

    handleChange = (event) => {
        const value = event.target.value;

        this.setState({
            value
        });

        this.props.onUpdate(value);
    }

    handleOnBlur = () => {
        const { isRequired, value } = this.state;

        this.setState({
            pristine: false,
            isError: isRequired && !value
        });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { field } = nextProps;
        const { pristine, value } = prevState;

        const isRequired = field.validations && field.validations.includes(VALIDATIONS.REQUIRED);
        const isError = isRequired && !pristine && !value;

        return {
            isRequired,
            isError
        };
    }

    render() {
        const { field } = this.props;
        const { isRequired, isError } = this.state;

        return (
            <div>
            <Form.Input
                fluid
                error={isError}
                label={field.title}
                placeholder={field.title}
                onChange={this.handleChange}
                onBlur={this.handleOnBlur}
                required={isRequired}>
            </Form.Input>
            <Label className={isError ? '' : 'visibilityHidden'} color="red">Please enter a value.</Label>
            </div>
        )
    }
}

Field.propTypes = {
    field: fieldPropType,
    onUpdate: PropTypes.func.isRequired
};