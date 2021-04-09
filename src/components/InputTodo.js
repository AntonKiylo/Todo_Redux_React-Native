import React, { useState, useCallback } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import { AntDesign } from '@expo/vector-icons';

const InputTodo = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const onHandleAddTodo = useCallback(() => {
    dispatch(addTodo(inputText));
    setInputText('');
  }, [inputText]);

  return (
    <View style={styles.inputBlock}>
      <TextInput
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        style={styles.input}
        placeholder='Add Item'
        placeholderTextColor='#ccc'
      />
      <TouchableOpacity onPress={onHandleAddTodo} disabled={!inputText.trim()}>
        <AntDesign name='pluscircle' size={29} color='#3d79b1' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#282851',
    padding: 8,
  },
  input: {
    flex: 1,
    paddingRight: 10,
    fontSize: 18,
    color: '#fff',
  },
});

export default InputTodo;
