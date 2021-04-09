import React from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/actions';

const CreateSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'To short!')
    .max(50, 'To long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'To short!')
    .max(50, 'To long!')
    .required('Required'),
});

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ userName: '', password: '' }}
      validationSchema={CreateSchema}
      onSubmit={(values) =>
        dispatch(
          setUserData({ userName: values.userName, password: values.password })
        )
      }
    >
      {(props) => (
        <View style={styles.form}>
          <StatusBar barStyle='light-content' />
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={props.values.userName}
              onChangeText={props.handleChange('userName')}
              placeholder='Username'
              placeholderTextColor='#ccc'
            />
            {props.errors.userName && props.touched.userName && (
              <Text style={styles.errorText}>{props.errors.userName}</Text>
            )}
          </View>

          <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={props.values.password}
            onChangeText={props.handleChange('password')}
            placeholder='Password'
            placeholderTextColor='#ccc'
          />
          {props.errors.password && props.touched.password && (
            <Text style={styles.errorText}>{props.errors.password}</Text>
          )}
          </View>

          <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.horizontalLine} />

          <TouchableOpacity
            style={styles.createButton}
            onPress={() => navigation.navigate('CreateAccountScreen')}
          >
            <Text style={styles.createButtonText}>Create New Account</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#31315b",
  },
  inputWrapper: {
    alignSelf: "stretch",
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    borderRadius: 12,
    padding: 8,
    backgroundColor: "#282851",
    color: "#fff",
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
  },
  createButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  errorText: {
    color: "red",
    textAlign: "center"
  }
});

export default LoginScreen;
