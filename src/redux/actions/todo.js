import { ACTIONS } from './actionTypes';

let todoId = 0;

export const addTodo = (inputText) => ({
  type: ACTIONS.ADD_TODO,
  payload: {
    content: inputText,
    id: (++todoId).toString(),
    isCompleted: false,
  },
});

export const removeTodo = (id) => ({
  type: ACTIONS.REMOVE_TODO,
  payload: id,
});

export const editTodo = (id, text) => ({
  type: ACTIONS.EDIT_TODO,
  payload: { id, text },
});

export const toggleTodoStatus = (id) => ({
  type: ACTIONS.TOGGLE_TODO_STATUS,
  payload: id,
});
