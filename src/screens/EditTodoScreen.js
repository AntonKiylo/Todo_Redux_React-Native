import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EditTodoScreen = ({ route }) => {
  const {todo} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {todo}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31315b',
    padding: 12,
  },
  text: {
    color: '#fff',
    fontSize: 18
  }
});

export default EditTodoScreen;
