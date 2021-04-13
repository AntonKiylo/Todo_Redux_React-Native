import AsyncStorage from '@react-native-async-storage/async-storage';
import { ACTIONS } from './actionTypes';

let todoId = 0;

export const addTodo = (inputText) => ({
  type: ACTIONS.ADD_TODO,
  payload: {
    content: inputText,
    id: (++todoId).toString(),
    isComplited: false,
  },
});

export const removeTodo = (id) => ({
  type: ACTIONS.REMOVE_TODO,
  payload: id,
});

export const editTodo = (id, text) => ({
  type: ACTIONS.EDIT_TODO,
  payload: { id, text },
});

export const toggleTodoStatus = (id) => ({
  type: ACTIONS.TOGGLE_TODO_STATUS,
  payload: id,
});

export const fetchRestoreToken = () => (dispatch) => {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      const output = jsonValue != null ? JSON.parse(jsonValue) : null;

      dispatch({
        type: ACTIONS.RESTORE_TOKEN,
        payload: output,
      });
    } catch (error) {
      console.log(error);
    }
  };

  getData();
};

export const setUserData = (value) => (dispatch) => {
  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
      dispatch({
        type: ACTIONS.SIGN_IN,
        payload: value,
      });
    } catch (error) {
      console.log(error);
    }
  };

  storeData();
};

export const logOut = () => (dispatch) => {
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
      dispatch({ type: ACTIONS.SIGN_OUT });
    } catch (error) {
      console.log(error);
    }
  };

  clearAll();
};
