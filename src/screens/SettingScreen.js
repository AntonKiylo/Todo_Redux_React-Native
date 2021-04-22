import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/actions/authentication';

const SettingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LanguageSelectScreen')}
      >
        <Text style={styles.text}>Select Language</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AboutScreen')}
      >
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PrivacyPolicyScreen')}
      >
        <Text style={styles.text}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(logOut())}
      >
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#31315b',
  },
  button: {
    marginVertical: 12,
  },
  text: {
    fontSize: 18,
    color: '#ccc',
  },
});

export default SettingScreen;