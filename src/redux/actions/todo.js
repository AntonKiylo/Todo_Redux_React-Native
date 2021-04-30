import { createAction } from 'typesafe-actions';

let todoId = 0;

export const addTodo = createAction('ADD_TODO', (inputText) => ({
  content: inputText,
  id: (++todoId).toString(),
  isCompleted: false,
}))();

export const removeTodo = createAction('REMOVE_TODO', (id) => id)();

export const editTodo = createAction('EDIT_TODO', (id, text) => ({ id, text }))();

export const toggleTodoStatus = createAction('TOGGLE_TODO_STATUS', (id) => id)();
