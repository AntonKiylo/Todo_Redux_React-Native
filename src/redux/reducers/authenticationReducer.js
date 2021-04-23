import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from '../actions/actionTypes';

const initialState = {
  isLoading: true,
  userToken: null,
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.payload,
        isLoading: false,
      };
    case SIGN_IN:
      return {
        ...state,
        userToken: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        userToken: null,
      };
    default:
      return state;
  }
};
