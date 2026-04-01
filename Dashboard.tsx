import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { vh, vw } from './src/constants/dimensions';
import { Statsbox } from './stats';
import { RecentActivity } from './RecentActivity';
import { ActiveRental } from './ActiveRental';


function Dashboard() {
 
   
  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar barStyle="dark-content" />
       <View style={styles.topContainer}>
          <View style={styles.topLeftContainer}>
            <Image
              style={styles.arrowimage}
              source={require('./assets/images/arrow.png')}
            />
            <Text style={styles.driver}>Driver Dashboard</Text>
          </View>
          <View style={styles.topRightContainer}>
            <Image
              style={styles.bell}
              source={require('./assets/images/bell.png')}
            />
            <Image
              style={styles.user}
              source={require('./assets/images/user.png')}
            />
          </View>
        </View>
      <ScrollView style={styles.parent} showsVerticalScrollIndicator={false} >
        
        <View style={styles.headerContainer}>
          <View style={styles.headerLeftContainer}>
            <Image
              style={styles.userImage}
              source={require('./assets/images/user.png')}
            />
            <View style={styles.texts}>
              <Text style={styles.name}>Rohit</Text>
              <Text>4.8(356 trips)</Text>
              <Text>DL- HR26AB</Text>
            </View>
            <View style={{...styles.low,backgroundColor:'rgb(205,243,213)',right:20,bottom:6}}>
                <Text style={{ ...styles.badge, color: 'darkgreen' }}>Online</Text>
              </View>
          </View>
          <View style={styles.headerRightContainer}>
            <View style={styles.walletfirst}>
              <View>
                <Text style={styles.wallet}>Wallet Balance</Text>
                <Text style={styles.walletcost}>₹3450.00</Text>
              </View>
              <View style={{...styles.low,backgroundColor: 'rgb(253,213,214)',bottom:2,left:5}}>
                <Text style={{ ...styles.badge, color: 'red' }}>Low</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.add}>
              <Text style={styles.addstyle}>Add Money</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.secondsection}>
          <Text style={styles.today}>Today's Stats</Text>
          <Text style={{ color: 'green' }}>View all</Text>
        </View>
        <Statsbox/>
        <Text style={{ fontSize: 18, fontWeight: 'bold',marginTop:10 }}>Active Rental</Text>
        <ActiveRental/>
        <View style={styles.recent}>
          <Text style={styles.recenttext}>Recent Activity</Text>
          <Text style={styles.seeall}>See all</Text>
        </View>
        <RecentActivity/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  safearea: {
    flex: 1, 
    margin: vw(10)
  },
  parent: { 
    flex: 1 
  },
  topContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  topLeftContainer: { 
    flexDirection: 'row', 
    gap: vw(10) 
  },
  arrowimage: { 
    height: vh(18), 
    width: vw(18), 
    marginTop: vh(2) 
  },
  driver: { 
    fontSize: vh(18), 
    fontWeight: 'bold' 
  },
  topRightContainer: { 
    flexDirection: 'row', 
    gap: vw(10), 
    marginRight: vw(10) 
  },
  bell: { 
    height: vh(18), 
    width: vw(18), 
    marginTop: vh(2) 
  },
  user: { 
    height: vh(18), 
    width: vw(18), 
    marginTop: vh(2) 
  },
  headerContainer: { 
    flexDirection: 'row', 
    marginTop: vh(15), 
    gap: vw(10) 
  },
  headerLeftContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: vw(1),
    borderColor: '#e0e0e0',
    borderRadius: vw(10),
    alignItems: 'center',
    padding: vw(10),
    backgroundColor: 'rgb(241,250,244)',
  },
  userImage: { 
    height: vh(25), 
    width: vw(25) 
  },
  texts: { 
    flexDirection: 'column', 
    gap: vh(3), 
    marginLeft: vw(16) 
  },
  name: { 
    fontSize: vh(15), 
    fontWeight: 'bold' 
  },
  headerRightContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: vh(10),
    borderWidth: 1,
    borderRadius: vw(10),
    padding: vw(10),
    borderColor: '#e0e0e0'
  },
  walletfirst: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  wallet: { 
    fontSize: vh(13) 
  },
  walletcost: { 
    fontSize: vh(15), 
    fontWeight: 'bold' 
  },
  low: {
    paddingHorizontal: vw(8),
    paddingVertical: vh(2),
    borderRadius: vw(20),
    marginTop: vh(5),
    alignSelf: 'flex-start',
  },
   
   
  badge: { 
    fontWeight: '600',
    fontSize: vh(12)
  },
  add: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgreen',
    padding: vh(4),
    borderRadius: vw(10),
  },
  addstyle: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: vh(15) 
  },
  secondsection: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: vh(20),
  },
  today: { 
    fontSize: vh(18), 
    fontWeight: 'bold' 
  },
  recent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(20),
  },
  recenttext: { 
    fontWeight: 'bold', 
    fontSize: vh(18) 
  },
  seeall: { 
    color: 'green', 
    fontWeight: 'bold',
    fontSize: vh(14)
  },
});

 