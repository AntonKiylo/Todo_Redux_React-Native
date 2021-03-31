import React, { useState } from "react";
import { TextInput, Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/actions";

const CreacteAccaunt = ({ navigation }) => {
  const [usernameText, setUsernameText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const dispatch = useDispatch();

  const onHandlerCreate = () => {
    dispatch(setUserData({ userName: usernameText, password: passwordText }));
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        value={usernameText}
        onChangeText={text => setUsernameText(text)}
        placeholder="Username"
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        value={passwordText}
        onChangeText={text => setPasswordText(text)}
        placeholder="Password"
        placeholderTextColor="#ccc"
      />
      <TouchableOpacity
        style={styles.createButton}
        disabled={!(usernameText.trim() && passwordText.trim())}
        onPress={onHandlerCreate}
      >
        <Text style={styles.createButtonText}>Create New Accaunt</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.footerText}>Already have accaunt?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#31315b',
  },
  input: {
    alignSelf: 'stretch',
    marginBottom: 20,
    fontSize: 18,
    borderRadius: 12,
    padding: 8,
    backgroundColor: '#282851',
    color: '#fff',
  },
  horizontalLine: {
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
  },
  createButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: "#8ac926",
    marginBottom: 20
  },
  createButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  footerText: {
    color: "#fff",
    textDecorationLine: "underline"
  }
});

export default CreacteAccaunt;