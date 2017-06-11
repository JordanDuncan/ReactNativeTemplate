/*
 * app/config/store.js
 * Configures your redux store.
 * Adds redux-thunk and redux-logger as middleware, as well as registering your reducers from app/reducers/index.js
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from 'app/reducers';

const logger = createLogger({ predicate: (getState, action) => __DEV__ });
let middleware = [thunk, logger];

export default function configureStore(initialState) {
	return createStore(
		reducer,
		initialState,
		applyMiddleware(...middleware)
	);
}