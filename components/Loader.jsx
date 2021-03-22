import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="#ccc" />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#31315b',
  }
});

export default Loader;