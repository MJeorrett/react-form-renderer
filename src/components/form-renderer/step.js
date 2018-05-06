import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Form } from 'semantic-ui-react';

import './step.css';

export class Step extends Component {

    renderField(field, index) {
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

    render = () => {
        const { isActive, step } = this.props;

        return (
            <div className={isActive ? "" : "displayNone"}>
                <Form>
                    {step.fields.map(this.renderField)}
                </Form>
            </div>
        );
    }
}

Step.propTypes = {
    step: PropTypes.shape({
        title: PropTypes.string.isRequired,
        fields: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired
            })
        ).isRequired
    }).isRequired,
    isActive: PropTypes.bool.isRequired
};