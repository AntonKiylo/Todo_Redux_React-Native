import { createStore, applyMiddleware } from "redux";
import reducer from './reducer';

const logger = store => next => action => {
  let output;
  console.groupCollapsed('action', action.type);
  console.log('action', action);
  output = next(action);
  console.log('store', store.getState());
  console.groupEnd();
  return output;
}

const store = createStore(reducer, applyMiddleware(logger));

export default store;