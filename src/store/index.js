import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import formRenderer from './form-render/form-renderer.reducer';

export default function() {
    const reducers = combineReducers({
        formRenderer
    });
    const logger = createLogger();

    return createStore(
        reducers,
        applyMiddleware(logger)
    );
}