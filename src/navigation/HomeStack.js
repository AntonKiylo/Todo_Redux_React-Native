import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import { useSelector } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const TabNavigator = createBottomTabNavigator();

const HomeStack = () => {
  const todosAmount = useSelector(state => state.todoReducer.length)

  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        activeTintColor: '#3d79b1',
        inactiveTintColor: '#ccc',
        showLabel: false,
        style: {
          backgroundColor: '#31315b'
        }
      }}
    >
      <TabNavigator.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={30} color={color} />
          ),
          tabBarBadge: todosAmount
        }}
      />
      <TabNavigator.Screen
        name='SettingScreen'
        component={SettingScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="settings-sharp" size={30} color={color} />
          )
        }}
      />
    </TabNavigator.Navigator>
  );
};

export default HomeStack;
