import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const languages = [
  { label: 'english', value: 'English' },
  { label: 'chinese', value: 'Chinese' },
  { label: 'spanish', value: 'Spanish' },
  { label: 'russian', value: 'Russian' },
  { label: 'german', value: 'German' },
];

const LanguageSelectScreen = () => {
  const [language, setLanguage] = useState('english');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select language</Text>
      <RNPickerSelect
        style={pickerSelectStyles}
        placeholder={{}}
        value={language}
        onValueChange={(value) => setLanguage(value)}
        items={languages}
      />
      <Text style={styles.text}>Your language is {language}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#31315b',
  },
  text: {
    color: '#ccc',
    fontSize: 18,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginVertical: 16,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: '#ccc',
    paddingRight: 30,
  },
  inputAndroid: {
    marginVertical: 16,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 1,
    color: '#ccc',
    paddingRight: 30,
  },
});

export default LanguageSelectScreen;
