import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Form } from 'semantic-ui-react';

export class Field extends Component {
    render() {
        const { field } = this.props;

        return <Form.Group widths='equal'>
            <Form.Input
                fluid
                label={field.title}
                placeholder={field.title}>
            </Form.Input>
        </Form.Group>
    }
}

Field.propTypes = {
    field: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired
};