import React from 'react';
import { StyleSheet, View, StatusBar, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Header from './Header';
import Todo from './Todo';
import EmptyTodoContainer from './EmptyTodoContainer';

const key = (item) => item.id;
const renderItem = ({ item: {id} }) => <Todo id={id} />;

const HomeScreen = () => {
  const todos = useSelector((state) => state.todoReducer);

  return (
    <View style={styles.home}>
      <StatusBar barStyle="light-content" />
      <Header />

      {!todos || !todos.length ? (
        <EmptyTodoContainer />
      ) : (
        <FlatList
          style={styles.todoContainer}
          data={todos}
          renderItem={renderItem}
          keyExtractor={key}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#31315b',
  },
  todoContainer: {
    padding: 12,
  },
});

export default HomeScreen;
