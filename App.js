import React from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import TodoContainer from './components/ContainerTodo';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <TodoContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;