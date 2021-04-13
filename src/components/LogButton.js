import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const LogButton = ({ title, handleSubmit }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    backgroundColor: '#3d79b1',
    padding: 8,
    width: 100,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#ccc',
  },
});

export default LogButton;
