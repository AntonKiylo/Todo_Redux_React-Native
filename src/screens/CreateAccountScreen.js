import React from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/actions/authentication';
import CreateAccountButton from '../components/CreateAccountButton';

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'To short!')
    .max(50, 'To long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'To short!')
    .max(50, 'To long!')
    .required('Required'),
});

const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        setUserData({ userName: values.userName, password: values.password }),
      );
    },
  });

  return (
    <View style={styles.form}>
      <StatusBar barStyle="light-content" />
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={formik.values.userName}
          onChangeText={formik.handleChange('userName')}
          placeholder="Username"
          placeholderTextColor="#ccc"
        />
        {formik.errors.userName && formik.touched.userName && (
          <Text style={styles.errorText}>{formik.errors.userName}</Text>
        )}
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          placeholder="Password"
          placeholderTextColor="#ccc"
        />
        {formik.errors.password && formik.touched.password && (
          <Text style={styles.errorText}>{formik.errors.password}</Text>
        )}
      </View>
      <CreateAccountButton
        title="Create New Account"
        handleSubmit={formik.handleSubmit}
      />
      <TouchableOpacity
        style={styles.footer}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.footerText}>Already have account?</Text>
      </TouchableOpacity>
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
  inputWrapper: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    borderRadius: 12,
    padding: 8,
    backgroundColor: '#282851',
    color: '#fff',
  },
  footer: {
    marginTop: 20,
  },
  footerText: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default CreateAccountScreen;
