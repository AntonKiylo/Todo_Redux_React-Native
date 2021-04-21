import AsyncStorage from '@react-native-async-storage/async-storage';
import { ACTIONS } from './actionTypes';

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
