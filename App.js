import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './src/redux/reducers/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MainStack from './src/navigation/MainStack';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
