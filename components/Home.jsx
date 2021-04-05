import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Header from "./Header";
import ContainerTodo from "./ContainerTodo";

const Home = ({ navigation }) => (
  <View style={styles.home}>
    <StatusBar barStyle="light-content" />
    <Header navigation={navigation} />
    <ContainerTodo />
  </View>
);

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#31315b',
  }
});

export default Home;