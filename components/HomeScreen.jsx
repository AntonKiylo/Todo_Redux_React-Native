import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import ContainerTodo from './ContainerTodo';

const HomeScreen = () => (
  <View style={styles.container}>
    <Header />
    <ContainerTodo />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31315b',
  },
});

export default HomeScreen;
