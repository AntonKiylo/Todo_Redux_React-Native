import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';

const StackNavigator = createStackNavigator();

const MapStack = () => {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen
        name='MapScreen'
        component={MapScreen}
      />
    </StackNavigator.Navigator>
  );
};

export default MapStack;
