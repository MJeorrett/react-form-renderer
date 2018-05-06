import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Form } from 'semantic-ui-react';

import './step.css';
import { Field } from './field';

export class Step extends Component {

    constructor(props) {
        super(props);

        const state = {};
        props.step.fields.forEach(field => {
            state[field.title] = null;
        });
        this.state = state;
    }

    handleChange = (field, newValue) => {
        this.setState({
            [field.title]: newValue
        },
        () => {
            this.props.onUpdate(this.state)
        });
    }

    render = () => {
        const { isActive, step } = this.props;

        return (
            <div className={isActive ? "" : "displayNone"}>
                <Form>
                    {step.fields.map((field, index) => {
                        return (
                            <Field
                                key={index}
                                field={field}
                                onUpdate={newValue => this.handleChange(field, newValue)} />
                        )
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
    isActive: PropTypes.bool.isRequired,
    onUpdate: PropTypes.func.isRequired
};