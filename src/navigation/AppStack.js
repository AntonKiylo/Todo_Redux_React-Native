import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loader from '../components/Loader';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { fetchRestoreToken } from '../redux/actions/authentication';

const StackNavigator = createStackNavigator();

const AppStack = () => {
  const isAuthenticationStateLoading = useSelector(
    (state) => state.authenticationReducer.isLoading,
  );
  const userToken = useSelector(
    (state) => state.authenticationReducer.userToken,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestoreToken());
  }, [isAuthenticationStateLoading, userToken]);

  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticationStateLoading ? (
          <StackNavigator.Screen name='Loader' component={Loader} />
        ) : userToken === null ? (
          <StackNavigator.Screen
            name='AuthStack'
            component={AuthStack}
          />
        ) : (
          <StackNavigator.Screen
            name='MainStack'
            component={MainStack}
          />
        )}
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;


{/* <StackNavigator.Screen
  name='EditTodoScreen'
  component={EditTodoScreen}
  options={{
    headerShown: true,
    title: '',
    headerStyle: { backgroundColor: '#31315b' },
    headerTintColor: '#ccc',
  }}
/> */}

{/* <StackNavigator.Screen
  name='HomeStack'
  component={HomeStack}
  options={{ title: 'Back' }}
/> */}