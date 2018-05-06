import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Form } from 'semantic-ui-react';

import { field as fieldPropType } from './propTypes';

export class Field extends Component {
    handleChange = (event) => {
        this.props.onUpdate(event.target.value);
    }

    render() {
        const { field } = this.props;

        return (
            <Form.Input
                fluid
                label={field.title}
                placeholder={field.title}
                onChange={this.handleChange}>
            </Form.Input>
        )
    }
}

Field.propTypes = {
    field: fieldPropType,
    onUpdate: PropTypes.func.isRequired
};