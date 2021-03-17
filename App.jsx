import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './components/redux/store';
import AuthenticationScreen from './components/AuthenticationScreen';
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const getData = async () => {
      let data;

      try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key');
        data = (jsonValue !== null) ? JSON.parse(jsonValue) : null;
      } catch (e) {
        alert(e);
      }

      if (data === null) {
        setIsLogged(true);
      }

    }

    getData();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {!isLogged
            ? <Stack.Screen name="AuthenticationScreen" component={AuthenticationScreen} />
            : <Stack.Screen name="HomeScreen" component={HomeScreen} />}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
