import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageSelectScreen from '../screens/LanguageSelectScreen';
import AboutScreen from '../screens/AboutScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';

const StackNavigator = createStackNavigator();

const SettingStack = () => {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen
        name='LanguageSelectScreen'
        component={LanguageSelectScreen}
        // options={{
        //   title: 'Log into your account here',
        //   headerStyle: { backgroundColor: '#31315b' },
        //   headerTintColor: '#ccc',
        //   headerTitleAlign: 'center',
        // }}
      />
      <StackNavigator.Screen
        name='AboutScreen'
        component={AboutScreen}
        // options={{
        //   title: 'Log In',
        //   headerStyle: { backgroundColor: '#31315b' },
        //   headerTintColor: '#ccc',
        // }}
      />
      <StackNavigator.Screen
        name='PrivacyPolicyScreen'
        component={PrivacyPolicyScreen}
        // options={{
        //   title: 'Log In',
        //   headerStyle: { backgroundColor: '#31315b' },
        //   headerTintColor: '#ccc',
        // }}
      />
    </StackNavigator.Navigator>
  );
};

export default SettingStack;
