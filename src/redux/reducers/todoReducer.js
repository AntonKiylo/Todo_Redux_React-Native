import { action, createReducer } from 'typesafe-actions';
import * as R from 'ramda';
import {
  addTodo,
  toggleTodoStatus,
  removeTodo,
  editTodo,
} from '../actions/todo';

const initialState = {};

export const todoReducer = createReducer(initialState)
  .handleAction(addTodo, (state, action) => R.assoc(action.payload.id, action.payload, state))
  .handleAction(removeTodo, (state, action) => R.dissoc(action.payload, state))
  .handleAction(toggleTodoStatus, (state, action) => ({...state, [action.payload]: {...state[action.payload], isCompleted: !state[action.payload].isCompleted}}))
  .handleAction(editTodo, (state, action) => ({...state, [action.payload.id]: {...state[action.payload.id], content: action.payload.text}}))
  
  
  // R.set(
  //   R.lensPath([action.payload, 'isCompleted']),
  //   !state[action.payload].isCompleted,
  //   state,
  // ),
  
  // .handleAction(editTodo, (state, action) => 
  //     R.set(
  //       R.lensPath([action.payload.id, 'content']),
  //       action.payload.text,
  //       state
  //     )
  
