import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const Dashboard = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, marginTop: 60, marginLeft: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Image
              style={{ height: 20, width: 20, top: 5 }}
              source={require('./assets/images/arrow.png')}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              Driver Dashboard
            </Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 10, marginRight: 10 }}>
            <Image
              style={{ height: 20, width: 20, top: 5 }}
              source={require('./assets/images/bell.png')}
            />
            <Image
              style={{ height: 20, width: 20, top: 5 }}
              source={require('./assets/images/user(1).png')}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'row' ,gap:10}}>
            <Image
              style={{ height: 20, width: 20, top: 5 }}
              source={require('./assets/images/user(1).png')}
            />
            <View style={{flexDirection:'column',gap:10}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>Rohit Kumar</Text>
                <Text>4.8(356 trips)</Text>
                <Text>DL- HR26AB1234</Text>

            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' ,gap:10}}>
             
            <View style={{flexDirection:'column',gap:10}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>Rohit Kumar</Text>
                <Text>4.8(356 trips)</Text>
                <Text>DL- HR26AB1234</Text>

            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
