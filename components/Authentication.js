import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

const Authentication = () => {
  const [usernameText, setUsernameText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        value={usernameText}
        onChangeText={text => setUsernameText(text)}
        placeholder='Username'
        placeholderTextColor='#ccc'
      />
      <TextInput
        style={styles.input}
        value={passwordText}
        onChangeText={text => setPasswordText(text)}
        placeholder='Password'
        placeholderTextColor='#ccc'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('it works')}
        disabled={!(usernameText.trim() && passwordText.trim())}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  input: {
    alignSelf: 'stretch',
    marginBottom: 20,
    fontSize: 18,
    borderRadius: 12,
    padding: 8,
    backgroundColor: '#282851',
    color: '#fff'
  },
  button: {
    borderRadius: 12,
    backgroundColor: '#3d79b1',
    padding: 8,
    width: 100,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#ccc'
  }
});

export default Authentication;