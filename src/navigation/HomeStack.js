import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import EditTodoScreen from '../screens/EditTodoScreen';

const StackNavigator = createStackNavigator();

const HomeStack = () => {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen
        name='HomeScreen'
        component={HomeScreen}
        // options={{
        //   title: 'Log into your account here',
        //   headerStyle: { backgroundColor: '#31315b' },
        //   headerTintColor: '#ccc',
        //   headerTitleAlign: 'center',
        // }}
      />
      <StackNavigator.Screen
        name='EditTodoScreen'
        component={EditTodoScreen}
        // options={{
        //   title: 'Log In',
        //   headerStyle: { backgroundColor: '#31315b' },
        //   headerTintColor: '#ccc',
        // }}
        options={{
          headerShown: true,
          title: '',
          headerStyle: { backgroundColor: '#31315b' },
          headerTintColor: '#ccc',
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default HomeStack;
