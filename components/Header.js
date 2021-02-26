import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Image, Text } from 'react-native';
import InputTodo from './InputTodo';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo App</Text>
      <InputTodo />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    padding: 10,
    paddingBottom: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  title: {
    alignSelf: 'flex-end',
    backgroundColor: 'white'
  },
});

export default Header;