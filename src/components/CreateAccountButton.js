import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CreateAccountButton = ({ title, handleSubmit }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handleSubmit}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>    
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: "#8ac926",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default CreateAccountButton;