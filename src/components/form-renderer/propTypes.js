import { PropTypes } from 'prop-types';

export const field = PropTypes.shape({
    title: PropTypes.string.isRequired,
    validations: PropTypes.arrayOf(PropTypes.string)
});

export const step = PropTypes.shape({
    title: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(field).isRequired
});