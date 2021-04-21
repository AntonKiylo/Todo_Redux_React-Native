import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const EmptyTodoContainer = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyContainerText}>NO TODOS</Text>
  </View>
);

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainerText: {
    color: '#ccc',
    fontSize: 24,
  },
});

export default EmptyTodoContainer;
