import AsyncStorage from '@react-native-async-storage/async-storage';
import { RESTORE_TOKEN, SIGN_OUT, SIGN_IN } from './actionTypes';

import { createAsyncAction } from 'typesafe-actions';

export const fetchRestoreTokenAction = createAsyncAction(
  'RESTORE_TOKEN_REQUEST',
  'RESTORE_TOKEN_SUCCESS',
  'RESTORE_TOKEN_FAILURE',
)();

export const fetchRestoreToken = () => async (dispatch) => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    const output = jsonValue != null ? JSON.parse(jsonValue) : null;

    dispatch(fetchRestoreTokenAction.success(output))
    // dispatch({
    //   type: RESTORE_TOKEN,
    //   payload: output,
    // });
  } catch (error) {
    console.log(error);
  }
};

// export const setUserData = (value) => (dispatch) => {
//   const storeData = async () => {
//     try {
//       const jsonValue = JSON.stringify(value);
//       await AsyncStorage.setItem('@storage_Key', jsonValue);
//       dispatch({
//         type: SIGN_IN,
//         payload: value,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   storeData();
// };

// export const logOut = () => (dispatch) => {
//   const clearAll = async () => {
//     try {
//       await AsyncStorage.clear();
//       dispatch({ type: SIGN_OUT });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   clearAll();
// };
