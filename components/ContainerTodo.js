import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const renderItem = ({ item }) => <Todo todo={item} />;
const key = item => item.id;

const TodoContainer = () => {
  const todos = useSelector(state => state);

  if (!todos || !todos.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyContainerText}>NO TODOS</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.todoContainer}
      data={todos}
      renderItem={renderItem}
      keyExtractor={key}
    />
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    padding: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  emptyContainerText: {
    color: '#ccc',
    fontSize: 24
  }
});

export default TodoContainer;