import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { authenticationReducer } from './authenticationReducer';

export const rootReducer = combineReducers({ todoReducer, authenticationReducer });