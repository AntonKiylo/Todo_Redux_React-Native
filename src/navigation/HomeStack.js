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
        options={{
          title: 'Back',
        }}
      />
      <StackNavigator.Screen
        name='EditTodoScreen'
        component={EditTodoScreen}
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
