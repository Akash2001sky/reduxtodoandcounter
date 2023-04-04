/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react';
import type {PropsWithChildren} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Provider } from "react-redux";
import MyTab from './components/Tab/MyTab';
import store from './components/redux/store/Store';
const App=()=>{
  return(
  <Provider store={store}>

 
    <NavigationContainer >
      <MyTab/>
    </NavigationContainer>
    </Provider>

  )
}
export default App;
