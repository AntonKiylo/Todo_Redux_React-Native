import { ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_TODO_STATUS } from './actionTypes';

let todoId = 0;

export const addTodo = (inputText) => ({
  type: ADD_TODO,
  payload: {
    content: inputText,
    id: (++todoId).toString(),
    isCompleted: false,
  },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: { id, text },
});

export const toggleTodoStatus = (id) => ({
  type: TOGGLE_TODO_STATUS,
  payload: id,
});
