import React from "react";
import { TextInput, Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/actions";

const CreacteAccaunt = ({ navigation }) => {
  const dispatch = useDispatch();

  // const onHandlerCreate = () => {
  //   dispatch(setUserData({ userName: usernameText, password: passwordText }));
  // };

  return (
    <Formik
      initialValues={({ userName: "" }, { password: "" })}
      onSubmit={(values) => dispatch(setUserData({ userName: values.userName, password: values.password }))}
    >
      {({ handleChange, values, handleSubmit }) => (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={values.userName}
            onChangeText={handleChange("userName")}
            placeholder="Username"
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={styles.input}
            value={values.password}
            onChangeText={handleChange("password")}
            placeholder="Password"
            placeholderTextColor="#ccc"
          />
          <TouchableOpacity
            style={styles.createButton}
            //disabled={!(usernameText.trim() && passwordText.trim())}
            onPress={handleSubmit}
          >
            <Text style={styles.createButtonText}>Create New Accaunt</Text>
          </TouchableOpacity>

          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.footerText}>Already have accaunt?</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
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