import { createReducer } from 'typesafe-actions';
import {
  addTodo,
  toggleTodoStatus,
  removeTodo,
  editTodo,
} from '../actions/todo';

const initialState = [];

export const todoReducer = createReducer(initialState)
  .handleAction(addTodo, (state, action) => [...state, action.payload])
  .handleAction(removeTodo, (state, action) =>
    state.filter((item) => item.id !== action.payload)
  )
  .handleAction(toggleTodoStatus, (state, action) =>
    state.map((item) =>
      item.id === action.payload
        ? { ...item, isCompleted: !item.isCompleted }
        : item,
    )
  )
  .handleAction(editTodo, (state, action) =>
    state.map((item) =>
      item.id === action.payload.id
        ? { ...item, content: action.payload.text }
        : item,
    )
  );
