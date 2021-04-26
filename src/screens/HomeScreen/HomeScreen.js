import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';
import Header from './Header';
import Todo from './Todo';
import EmptyTodoContainer from './EmptyTodoContainer';

const key = (item) => item;
const renderItem = ({ item }) => <Todo id={item} />;

const HomeScreen = () => {
  const idArray = Object.values(useSelector((state) => state.todoReducer)).map(item => item.id);

  return (
    <View style={styles.home}>
      <StatusBar barStyle="light-content" />
      <Header />

      {!idArray || !idArray.length ? (
        <EmptyTodoContainer />
      ) : (
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            contentContainerStyle={styles.todoContainer}
            data={idArray}
            renderItem={renderItem}
            keyExtractor={key}
          />
        </SafeAreaView>
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
    paddingHorizontal: 12,
    paddingTop: 12,
  },
});

export default HomeScreen;
