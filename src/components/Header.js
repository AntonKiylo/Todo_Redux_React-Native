import React from 'react';
import { StyleSheet, View } from 'react-native';
import InputTodo from './InputTodo';

const Header = () => (
  <View style={styles.header}>
    <InputTodo />
  </View>
);

const styles = StyleSheet.create({
  header: {
    padding: 12,
    paddingTop: 50,
    borderBottomColor: '#494d79',
    borderBottomWidth: 1,
  },
  title: {
    alignSelf: 'flex-end',
    color: '#ccc',
    fontSize: 18,
  }
});

export default Header;
