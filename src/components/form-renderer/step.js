import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Form } from 'semantic-ui-react';

import './step.css';
import { Field } from './field';

export class Step extends Component {
    render = () => {
        const { isActive, step } = this.props;

        return (
            <div className={isActive ? "" : "displayNone"}>
                <Form>
                    {step.fields.map((field, index) => {
                        return <Field key={index} field={field} />
                    })}
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