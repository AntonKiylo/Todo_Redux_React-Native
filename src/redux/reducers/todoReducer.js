import { ADD_TODO, TOGGLE_TODO_STATUS, REMOVE_TODO, EDIT_TODO } from '../actions/actionTypes';

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case EDIT_TODO:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, content: action.payload.text }
          : item,
      );
    case TOGGLE_TODO_STATUS:
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item,
      );
    default:
      return state;
  }
};
