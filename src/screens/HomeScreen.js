import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from '../components/Header';
import ContainerTodo from '../components/ContainerTodo';

const HomeScreen = () => (
  <View style={styles.home}>
    <StatusBar barStyle="light-content" />
    <Header />
    <ContainerTodo />
  </View>
);

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#31315b',
  }
});

export default HomeScreen;
