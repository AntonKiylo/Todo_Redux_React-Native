import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoContainer = () => {
  const todos = useSelector(state => state);

  if (!todos || !todos.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text>NO TODOS</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Todo todo={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignSelf: 'stretch',
    padding: 12
  },
  emptyContainer: {
    flex: 5,
    justifyContent:'center',
    alignItems: 'center'
  }
});

export default TodoContainer;