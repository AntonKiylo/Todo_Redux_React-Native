import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

const logger = (store) => (next) => (action) => {
  console.groupCollapsed('action', action.type);
  console.log('action', action);
  const output = next(action);
  console.log('store', store.getState());
  console.groupEnd();
  return output;
};

const store = createStore(reducer, applyMiddleware(logger));

export default store;
