import React, { useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { removeTodo, toggleTodoStatus } from '../../redux/actions/todo';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Todo = ({ id }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onHandleRemoveTodo = useCallback(() => {
    dispatch(removeTodo(id));
  }, [id]);

  const onHandleToggleTodoState = useCallback(() => {
    dispatch(toggleTodoStatus(id));
  }, [id]);

  const todoContent = useSelector(state => state.todoReducer[id])?.content;
  const todoStatus = useSelector(state => state.todoReducer[id])?.isCompleted;

  return (
    <View style={styles.todo}>
      <View style={styles.textWrapper}>
        <BouncyCheckbox
          size={23}
          iconStyle={{ borderColor: '#ccc' }}
          fillColor='#3d79b1'
          onPress={onHandleToggleTodoState}
        />
        <Text
          style={[
            styles.notCompletedTodo,
            todoStatus && styles.completedTodo,
          ]}
        >
          {todoContent}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EditTodoScreen', {
            id: id,
          });
        }}
      >
        <MaterialIcons name='edit' size={30} color='#ccc' />
      </TouchableOpacity>
      <TouchableOpacity onPress={onHandleRemoveTodo}>
        <MaterialIcons name='delete' size={32} color='#ccc' />
      </TouchableOpacity>
    </View>
  );
};

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
  notCompletedTodo: {
    color: '#fff',
    fontSize: 18,
    flexWrap: 'wrap',
    flex: 1,
  },
  completedTodo: {
    color: '#ccc',
    textDecorationLine: 'line-through',
  },
});

export default Todo;
