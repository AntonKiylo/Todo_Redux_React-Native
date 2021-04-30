import { createReducer } from 'typesafe-actions';
import { fetchRestoreTokenAction, logOutAction, setUserDataAction } from '../actions/authentication';

const initialState = {
  isLoading: true,
  userToken: null,
};

export const authenticationReducer = createReducer(initialState)
  .handleAction(fetchRestoreTokenAction.success, (state, action) => ({...state, isLoading: false, userToken: action.payload}))
  .handleAction(setUserDataAction.success, (state, action) => ({...state, userToken: action.payload}))
  .handleAction(logOutAction.success, (state) => ({...state, userToken: null}));
