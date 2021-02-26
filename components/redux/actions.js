import {ACTIONS} from './actionTypes';

let todoId = 0;

export const addTodo = inputText => ({
  type: ACTIONS.ADD_TODO,
  payload: {
    todo: inputText,
    id: (++todoId).toString(),
    isComplited: false
  }
});

export const removeTodo = id => ({
  type: ACTIONS.REMOVE_TODO,
  payload: id
});

export const toggleState = id => ({
  type: ACTIONS.TOGGLE_STATE,
  payload: id
});