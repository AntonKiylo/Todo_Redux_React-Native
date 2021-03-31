import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LogIn from "./LogIn";
import CreacteAccaunt from "./CreacteAccaunt";

const ScreensStack = createStackNavigator();

const AuthenticationScreen = () => {
  return (
    <ScreensStack.Navigator>
      <ScreensStack.Screen
        name="LogIn"
        component={LogIn}
        options={{
          title: "Log into your account here",
          headerStyle: {backgroundColor: "#31315b"},
          headerTintColor: "#ccc",
          headerTitleAlign: "center"
        }}
      />
      <ScreensStack.Screen
        name="CreacteAccaunt"
        component={CreacteAccaunt}
        options={{
          title: "Log In",
          headerStyle: {backgroundColor: "#31315b"},
          headerTintColor: "#ccc",
        }}
      />
    </ScreensStack.Navigator>
  );
};

export default AuthenticationScreen;