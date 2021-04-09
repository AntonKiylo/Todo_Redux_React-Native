import React, { useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { removeTodo, toggleTodoStatus } from '../redux/actions';
import { MaterialIcons } from '@expo/vector-icons';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const onHandleRemoveTodo = useCallback(() => {
    dispatch(removeTodo(todo.id));
  }, [todo.id]);

  const onHandleToggleTodoState = useCallback(() => {
    dispatch(toggleTodoStatus(todo.id));
  }, [todo.id]);

  return (
    <View style={styles.todo}>
      <View style={styles.textWrapper}>
        <BouncyCheckbox
          size={23}
          iconStyle={{ borderColor: '#ccc' }}
          fillColor='#3d79b1'
          onPress={onHandleToggleTodoState}
        />
        <Text style={[styles.notComplitedTodo, todo.isComplited && styles.complitedTodo]}>
          {todo.content}
        </Text>
      </View>
      <TouchableOpacity onPress={onHandleRemoveTodo}>
        <MaterialIcons name='delete' size={32} color='#ccc' />
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
    backgroundColor: '#44446b',
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 10,
  },
  notComplitedTodo: {
    color: '#fff',
    fontSize: 18,
    flexWrap: 'wrap',
    flex: 1,
  },
  complitedTodo: {
    color: '#ccc',
    textDecorationLine: 'line-through',
  },
});

export default Todo;
