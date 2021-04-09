import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loader from '../components/Loader';
import AuthenticationStack from './AuthenticationStack';
import HomeStack from './HomeStack';
import { fetchRestoreToken } from '../redux/actions';

const StackNavigator = createStackNavigator();

const MainStack = () => {
  const isAuthenticationStateLoading = useSelector(state => state.authenticationReducer.isLoading);
  const userToken = useSelector(state => state.authenticationReducer.userToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestoreToken());
  }, [isAuthenticationStateLoading, userToken]);

  return (
    <NavigationContainer>
      <StackNavigator.Navigator headerMode='none'>
        {isAuthenticationStateLoading ? (
          <StackNavigator.Screen name='Loader' component={Loader} />
        ) : userToken === null ? (
          <StackNavigator.Screen
            name='AuthenticationStack'
            component={AuthenticationStack}
          />
        ) : (
          <StackNavigator.Screen name='HomeStack' component={HomeStack} />
        )}
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
