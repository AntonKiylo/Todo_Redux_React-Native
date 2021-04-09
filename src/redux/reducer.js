import { ACTIONS } from "./actionTypes";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload];
    case ACTIONS.REMOVE_TODO:
      return state.filter(item => item.id !== action.payload);
    case ACTIONS.TOGGLE_TODO_STATUS:
      return state.map(item => (item.id === action.payload ? { ...item, isComplited: !item.isComplited } : item));
    default:
      return state;
  }
};

const authenticationState = {
  isLoading: true,
  userToken: null,
};

export const authenticationReducer = (state = authenticationState, action) => {
  switch (action.type) {
    case ACTIONS.RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.payload,
        isLoading: false,
      };
    case ACTIONS.SIGN_IN:
      return {
        ...state,
        userToken: action.payload,
      };
    case ACTIONS.SIGN_OUT:
      return {
        ...state,
        userToken: null,
      };
    default:
      return state;
  }
};