import { getType, createReducer } from 'typesafe-actions';
import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from '../actions/actionTypes';
import { fetchRestoreTokenAction } from '../actions/authentication'

const initialState = {
  isLoading: true,
  userToken: null,
};

export const authenticationReducer = createReducer(initialState)
  .handleAction(fetchRestoreTokenAction.success, (state, action) => ({...state, userToken: action.payload, isLoading: false}))


// export const authenticationReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case getType(fetchRestoreTokenAction.success):
//       return {
//         ...state,
//         userToken: action.payload,
//         isLoading: false,
//       };
//     case SIGN_IN:
//       return {
//         ...state,
//         userToken: action.payload,
//       };
//     case SIGN_OUT:
//       return {
//         ...state,
//         userToken: null,
//       };
//     default:
//       return state;
//   }
// };


// import { createReducer } from 'typesafe-actions';
// import * as R from 'ramda';
// import {
//   addTodo,
//   toggleTodoStatus,
//   removeTodo,
//   editTodo,
// } from '../actions/todo';

// const initialState = {};

// export const todoReducer = createReducer(initialState)
//   .handleAction(addTodo, (state, action) => R.assoc(action.payload.id, action.payload, state))
//   .handleAction(removeTodo, (state, action) => R.dissoc(action.payload, state))
//   .handleAction(toggleTodoStatus, (state, action) => ({...state, [action.payload]: {...state[action.payload], isCompleted: !state[action.payload].isCompleted}}))
//   .handleAction(editTodo, (state, action) => ({...state, [action.payload.id]: {...state[action.payload.id], content: action.payload.text}}))