import { ApplicationProvider, Input,Button, Modal, IconRegistry } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as eva from '@eva-design/eva';
import LoginScreen from './containers/LoginScreen';
import { Provider } from 'react-redux';
import VigorhubStore from './store/store'
import { EvaIconsPack } from '@ui-kitten/eva-icons';
export default function App() {
  return (
    <>
    <IconRegistry icons={EvaIconsPack} ></IconRegistry>
    <ApplicationProvider theme={eva.light} {...eva}>
      <Provider store={VigorhubStore}>
       <LoginScreen></LoginScreen>
      </Provider>
    </ApplicationProvider>
   </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
