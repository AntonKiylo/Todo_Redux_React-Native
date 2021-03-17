import { ACTIONS } from './actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload];
    case ACTIONS.REMOVE_TODO:
      return state.filter(item => item.id !== action.payload);
    case ACTIONS.TOGGLE_TODO_STATUS:
      return state.map(item => (item.id === action.payload ? {...item, isComplited: !item.isComplited} : item));
    default:
      return state;
  }
};

export default reducer;
