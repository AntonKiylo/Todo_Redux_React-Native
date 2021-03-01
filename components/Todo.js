import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import { removeTodo, toggleState } from './redux/actions';
import RemoveButtonImage from '../assets/remove-button.png';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const onHandlePress = () => {
    dispatch(removeTodo(todo.id));
  }

  const onHandleChange = () => {
    dispatch(toggleState(todo.id));
  }

  return (
    <View style={styles.todo}>
      <View style={styles.textWrapper}>
        <CheckBox
          value={todo.isComplited}
          onValueChange={onHandleChange}
          tintColors={{true: '#3d79b1', false: '#ccc'}}
        />
        <Text style={todo.isComplited ? styles.complitedTodo : styles.notComplitedTodo}>
          {todo.todo}
        </Text>
      </View>
      <TouchableOpacity onPress={onHandlePress}>
        <Image source={RemoveButtonImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    marginBottom: 12,
    padding: 10,
    borderRadius: 12,
    borderColor: '#494d79',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#44446b'
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 10
  },
  complitedTodo: {
    color: '#ccc',
    textDecorationLine: 'line-through',
    fontSize: 18,
    flexWrap: 'wrap',
    flex: 1
  },
  notComplitedTodo: {
    color: '#fff',
    fontSize: 18,
    flexWrap: 'wrap',
    flex: 1
  }
});

export default Todo;