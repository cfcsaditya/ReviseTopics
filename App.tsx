import { LogBox, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.fourth}>
        <View style={{ flex: 1, backgroundColor: 'orange' }} />
        <View style={styles.sixth}>
          <View style={styles.circle} />
        </View>
        <View style={styles.third}></View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  fourth: { flexDirection: 'column', flex: 1, marginTop: 60 },
  sixth: {
    flex: 1,
    backgroundColor: '#faf3eb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    borderWidth: 7,
    borderRadius: 135,
    borderColor: 'blue',

    height: 265,
    width: 265,

    backgroundColor: 'white',
  },
  third: {
    flex: 1,
    backgroundColor: 'green',
  },
});
