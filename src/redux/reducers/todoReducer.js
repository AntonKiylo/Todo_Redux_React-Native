import { ACTIONS } from '../actions/actionTypes';

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload];
    case ACTIONS.REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case ACTIONS.EDIT_TODO:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, content: action.payload.text }
          : item,
      );
    case ACTIONS.TOGGLE_TODO_STATUS:
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item,
      );
    default:
      return state;
  }
};
