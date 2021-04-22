import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from '../screens/SettingScreen';
import LanguageSelectScreen from '../screens/LanguageSelectScreen';
import AboutScreen from '../screens/AboutScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';

const StackNavigator = createStackNavigator();

const SettingStack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name='SettingScreen'
        component={SettingScreen}
        options={{
          headerShown: false,
          headerTitle: 'Back',
        }}
      />
      <StackNavigator.Screen
        name='LanguageSelectScreen'
        component={LanguageSelectScreen}
        options={{
          title: 'Languages',
          headerStyle: { backgroundColor: '#31315b' },
          headerTintColor: '#ccc',
          headerTitleAlign: 'center',
        }}
      />
      <StackNavigator.Screen
        name='AboutScreen'
        component={AboutScreen}
        options={{
          title: 'About',
          headerStyle: { backgroundColor: '#31315b' },
          headerTintColor: '#ccc',
          headerTitleAlign: 'center'
        }}
      />
      <StackNavigator.Screen
        name='PrivacyPolicyScreen'
        component={PrivacyPolicyScreen}
        options={{
          title: 'Privacy',
          headerStyle: { backgroundColor: '#31315b' },
          headerTintColor: '#ccc',
          headerTitleAlign: 'center',
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default SettingStack;
