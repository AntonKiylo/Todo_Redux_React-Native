import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncAction } from 'typesafe-actions';

export const fetchRestoreTokenAction = createAsyncAction(
  'RESTORE_TOKEN_REQUEST',
  'RESTORE_TOKEN_SUCCESS',
  'RESTORE_TOKEN_FAILURE',
)();
export const setUserDataAction = createAsyncAction(
  'SIGN_IN_REQUEST',
  'SIGN_IN_SUCCESS',
  'SIGN_IN_FAILURE',
)();
export const logOutAction = createAsyncAction(
  'SIGN_OUT_REQUEST',
  'SIGN_OUT_SUCCESS',
  'SIGN_OUT_FAILURE',
)();

export const fetchRestoreToken = () => async (dispatch) => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    const output = jsonValue !== null ? JSON.parse(jsonValue) : null;
    console.log(output);
    dispatch(fetchRestoreTokenAction.success(output));
  } catch (error) {
    console.log(error);
  };
};

export const setUserData = (value) => async (dispatch) => {
  try {
    dispatch(setUserDataAction.success(value));
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (error) {
    console.log(error);
  };
};

export const logOut = () => async (dispatch) => {
  try {
    await AsyncStorage.clear();
    dispatch(logOutAction.success());
  } catch (error) {
    console.log(error);
  }
};
