import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
const rootReducer = combineReducers(reducers);
const logger = createLogger({ collapsed: true });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;