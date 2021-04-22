import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';

const StackNavigator = createStackNavigator();

const MapStack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name='MapScreen'
        component={MapScreen}
        options={{
          title: 'Map',
          headerStyle: { backgroundColor: '#31315b' },
          headerTintColor: '#ccc',
          headerTitleAlign: 'center',
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default MapStack;
