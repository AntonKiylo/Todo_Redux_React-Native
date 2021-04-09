import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { logOut } from '../redux/actions';
import { useDispatch } from 'react-redux';


const SettingScreen = () => {
  const dispatch = useDispatch();
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => dispatch(logOut())} >
        <Text style={styles.buttonText}>Log Out</Text>
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
    borderRadius: 12,
    backgroundColor: "#3d79b1",
    padding: 8,
    width: 100,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#ccc",
  },
});

export default SettingScreen;
