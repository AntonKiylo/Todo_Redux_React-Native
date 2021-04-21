import { ACTIONS } from '../actions/actionTypes';

const initialState = {
  isLoading: true,
  userToken: null,
};

export const authenticationReducer = (state = initialState, action) => {
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
