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
    <SafeAreaView style={{flex:1}} edges={['top']}>
      <StatusBar
        barStyle="dark-content"
     
        
      />
      
      <View style={{ ...styles.box, backgroundColor: Colors.orange }} />
      <View style={[styles.box,styles.middleContainer]}>
        <View style={styles.circle} />
      </View>
      <View style={{...styles.box,backgroundColor:Colors.green}} />
    
        
    </SafeAreaView>
     
  );
};


export default App;

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
    
  middleContainer: {

    backgroundColor:Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    borderWidth: vw(7),
    borderRadius: vw(135),
    borderColor: Colors.blue,

    height: vh(200),
    width: vw(200),

    backgroundColor: 'white',
  },
   
});
