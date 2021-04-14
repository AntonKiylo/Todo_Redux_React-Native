import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from './Header';
import ContainerTodo from './ContainerTodo';

const HomeScreen = () => (
  <View style={styles.home}>
    <StatusBar barStyle='light-content' />
    <Header />
    <ContainerTodo />
  </View>
);

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#31315b',
  },
});

export default HomeScreen;
