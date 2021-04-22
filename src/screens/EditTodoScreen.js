import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, removeTodo } from '../redux/actions/todo';
import { Entypo } from '@expo/vector-icons';

const EditTodoScreen = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;
  
  const todoContent = useSelector(state => (
    state.todoReducer.find(item => item.id === id)?.content
  ));
  
  const [inputText, setInputText] = useState(todoContent);
  const dispatch = useDispatch();

  const handleEditTodo = useCallback(() => {
    dispatch(editTodo(id, inputText));
    navigation.navigate('HomeScreen');
  });

  const handleRemoveTodo = useCallback(() => {
    dispatch(removeTodo(id));
    navigation.navigate('HomeScreen');
  });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            style={{ marginRight: 12 }}
            disabled={!inputText.trim()}
            onPress={handleEditTodo}
          >
            <Entypo name='save' size={32} color='#ccc' />
          </TouchableOpacity>
        );
      },
    });
  }, [handleEditTodo]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={text => setInputText(text)}
        autoFocus={true}
        multiline={true}
        textAlignVertical='top'
      />

      <TouchableOpacity style={styles.button} onPress={handleRemoveTodo}>
        <Text style={styles.buttonText}>DELETE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31315b',
    padding: 20,
  },
  input: {
    flex: 1,
    fontSize: 18,
    borderRadius: 12,
    padding: 8,
    backgroundColor: '#282851',
    color: '#fff',
  },
  button: {
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: 'coral',
    padding: 8,
    width: 100,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default EditTodoScreen;
