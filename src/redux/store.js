import { createStore, applyMiddleware, combineReducers } from 'redux';
import { todoReducer, authenticationReducer } from './reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ todoReducer, authenticationReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
