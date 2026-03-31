import {
  LogBox,
  
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { vh, vw } from './src/constants/dimensions';
import { Colors } from './src/constants/color';
import Dashboard from './Dashboard';

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Dashboard/>
     
  );
};


export default App;



