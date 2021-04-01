import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Loader from "./Loader";
import AuthenticationScreen from "./AuthenticationScreen";
import HomeScreen from "./HomeScreen";
import { fetchRestoreToken } from "./redux/actions";

const ScreensStack = createStackNavigator();

const Main = () => {
  const authenticationState = useSelector(state => state.authenticationReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestoreToken());
  }, [authenticationState]);

  return (
    <NavigationContainer>
      <ScreensStack.Navigator headerMode="none">
        {authenticationState.isLoading ? (
          <ScreensStack.Screen name="Loader" component={Loader} />
        ) : authenticationState.userToken === null ? (
          <ScreensStack.Screen
            name="AuthenticationScreen"
            component={AuthenticationScreen}
          />
        ) : (
          <ScreensStack.Screen name="HomeScreen" component={HomeScreen} />
        )}
      </ScreensStack.Navigator>
    </NavigationContainer>
  );
};

export default Main;