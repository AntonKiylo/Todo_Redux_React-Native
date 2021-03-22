import { createStore, applyMiddleware, combineReducers } from "redux";
import { todoReducer, authenticationReducer } from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ todoReducer, authenticationReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// const logger = (store) => (next) => (action) => {
//   console.groupCollapsed('action', action.type);
//   console.log('action', action);
//   const output = next(action);
//   console.log('store', store.getState());
//   console.groupEnd();
//   return output;
// };