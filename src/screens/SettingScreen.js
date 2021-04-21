import React from 'react';
import { StyleSheet, View } from 'react-native';
import { logOut } from '../redux/actions/authentication';
import { useDispatch } from 'react-redux';
import LogButton from '../components/LogButton';

const SettingScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <LogButton title="Log Out" handleSubmit={() => dispatch(logOut())} />
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
});

export default SettingScreen;
