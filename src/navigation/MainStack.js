import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import SettingStack from './SettingStack';
import MapStack from './MapStack';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const TabNavigator = createBottomTabNavigator();

const MainStack = () => {
  const todosAmount = useSelector((state) => state.todoReducer.length);

  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        activeTintColor: '#3d79b1',
        inactiveTintColor: '#ccc',
        showLabel: false,
        style: {
          backgroundColor: '#31315b',
        },
      }}
    >
      <TabNavigator.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={30} color={color} />
          ),
          tabBarBadge: todosAmount,
        }}
      />
      <TabNavigator.Screen
        name="MapStack"
        component={MapStack}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="map" size={28} color={color} />
          ),
        }}
      />
      <TabNavigator.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-sharp" size={30} color={color} />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
};

export default MainStack;
