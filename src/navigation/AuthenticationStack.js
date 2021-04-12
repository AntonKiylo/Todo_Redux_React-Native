import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';

const StackNavigator = createStackNavigator();

const AuthenticationStack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{
          title: 'Log into your account here',
          headerStyle: {backgroundColor: '#31315b'},
          headerTintColor: '#ccc',
          headerTitleAlign: 'center'
        }}
      />
      <StackNavigator.Screen
        name='CreateAccountScreen'
        component={CreateAccountScreen}
        options={{
          title: 'Log In',
          headerStyle: {backgroundColor: '#31315b'},
          headerTintColor: '#ccc',
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default AuthenticationStack;