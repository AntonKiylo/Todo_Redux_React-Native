import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './src/redux/reducers/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AppStack from './src/navigation/AppStack';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
