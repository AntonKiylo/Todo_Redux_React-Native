import React, {useCallback} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import { removeTodo, toggleTodoStatus } from './redux/actions';
import RemoveButtonImage from '../assets/remove-button.png';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const onHandleRemoveTodo = useCallback(() => {
    dispatch(removeTodo(todo.id));
  }, []);

  const onHandleToggleTodoState = useCallback(() => {
    dispatch(toggleTodoStatus(todo.id));
  }, []);

  return (
    <View style={styles.todo}>
      <View style={styles.textWrapper}>
        <CheckBox
          value={todo.isComplited}
          onValueChange={onHandleToggleTodoState}
          tintColors={{true: '#3d79b1', false: '#ccc'}}
        />
        <Text style={[styles.notComplitedTodo, todo.isComplited && styles.complitedTodo]}>
          {todo.content}
        </Text>
      </View>
      <TouchableOpacity onPress={onHandleRemoveTodo}>
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
  notComplitedTodo: {
    color: '#fff',
    fontSize: 18,
    flexWrap: 'wrap',
    flex: 1
  },
  complitedTodo: {
    color: '#ccc',
    textDecorationLine: 'line-through',
  },
});

export default Todo;