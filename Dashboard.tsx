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

function Dashboard() {
  const stats = [
    {
      id: 1,
      images: require('./assets/images/user.png'),
      number: 12,
      sub: 'Trips',
      perc: '↑ 20% vs',
      date: 'yesterday',
    },
    {
      id: 2,
      images: require('./assets/images/user.png'),
      number: '5h 40m',
      sub: 'Hours ',
      perc: '↓ 10% vs',
      date: 'yesterday',
    },
    {
      id: 3,
      images: require('./assets/images/user.png'),
      number: '$2,850',
      sub: 'Earnings',
      perc: '↑ 15% vs',
      date: 'yesterday',
    },
  ];
  const recent = [
    {
      id: 1,
      images: require('./assets/images/user.png'),
      title: 'Trip to Cyber City,Gurugram',
      subtitle: 'Today,2:30 PM . 12 km . 25 min',
      cost: '+ ₹320',
    },
    {
      id: 2,
      images: require('./assets/images/user.png'),
      title: 'Trip to IGI Airport,Delhi',
      subtitle: 'Today,11:15 AM . 12 km . 25 min',
      cost: '+ ₹450',
    },
    {
      id: 3,
      images: require('./assets/images/user.png'),
      title: 'Toll & Parking Charges',
      subtitle: 'Today,11:15 AM . 12 km . 25 min',
      cost: '- ₹120',
    },
    {
      id: 4,
      images: require('./assets/images/user.png'),
      title: 'Trip to Noida Sector 62',
      subtitle: 'Today,11:15 AM . 12 km . 25 min',
      cost: '+ ₹380',
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.parent} showsVerticalScrollIndicator={false}>
        <View style={styles.firstsection}>
          <View style={styles.firstleftsection}>
            <Image
              style={styles.four}
              source={require('./assets/images/arrow.png')}
            />
            <Text style={styles.five}>Driver Dashboard</Text>
          </View>
          <View style={styles.firstrightsection}>
            <Image
              style={styles.seven}
              source={require('./assets/images/bell.png')}
            />
            <Image
              style={styles.eight}
              source={require('./assets/images/user.png')}
            />
          </View>
        </View>
        <View style={styles.nine}>
          <View style={styles.rohit}>
            <Image
              style={styles.eleven}
              source={require('./assets/images/user.png')}
            />
            <View style={styles.twelve}>
              <Text style={styles.thirteen}>Rohit</Text>
              <Text>4.8(356 trips)</Text>
              <Text>DL- HR26AB</Text>
            </View>
            <View style={{...styles.low,backgroundColor:'rgb(205,243,213)'}}>
                <Text style={{ fontWeight: '600', color: 'darkgreen' }}>Online</Text>
              </View>
          </View>
          <View style={styles.wallet}>
            <View style={styles.walletfirst}>
              <View>
                <Text style={{ fontSize: 15 }}>Wallet Balance</Text>
                <Text style={styles.walletcost}>₹3450.00</Text>
              </View>
              <View style={{...styles.low,backgroundColor: 'rgb(253,213,214)'}}>
                <Text style={{ fontWeight: '600', color: 'red' }}>Low</Text>
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
        <View style={styles.thirdsection}>
          {stats.map(item => (
            <View key={item.id} style={styles.boxes}>
              <View style={styles.boxesfirst}>
                <Image style={{ height: 30, width: 30 }} source={item.images} />
                <View style={{ flexDirection: 'column' }}>
                  <Text style={{ fontWeight: 'bold' }}>{item.number}</Text>
                  <Text>{item.sub}</Text>
                </View>
              </View>
              <Text style={{ color: item.id == 2 ? 'red' : 'green' }}>
                {item.perc}
              </Text>
              <Text>{item.date}</Text>
            </View>
          ))}
        </View>
        <Text style={{ fontSize: 18, fontWeight: 'bold',marginTop:10 }}>Active Rental</Text>
        <View style={styles.rental}>
          <View style={styles.rentalfirst}>
            <Text style={{fontSize:15}}>
              Cab Number:<Text style={{ fontWeight: 'bold' }}> HR26AB1234</Text>
            </Text>
            <View style={styles.ontrip}>
              <Text style={{ color: 'blue' }}>On Trip</Text>
            </View>
          </View>
          <View style={styles.rentalsecond}>
            <Text>
              Time: <Text style={styles.bolding}>8:00 AM-6:00 PM</Text>
            </Text>
            <Text>
              Km Used: <Text style={styles.bolding}>120/220 km</Text>
            </Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <View style={styles.lineone}>
              <View style={styles.linetwo} />
            </View>
            <Text style={{ top: 3 }}>54%</Text>
          </View>

          <View style={styles.extrakm}>
            <View style={styles.extrakmone}>
              <Text>Extra Km</Text>
              <View style={styles.kmone}>
                <Text style={styles.bolding}>₹12/km .</Text>
                <Text style={styles.bolding}>20 km .</Text>
                <Text style={styles.bolding}>₹240</Text>
              </View>
            </View>
            <View style={styles.extrahours}>
              <Text>Extra Hours</Text>
              <View style={styles.kmone}>
                <Text style={styles.bolding}>₹50/hr .</Text>
                <Text style={styles.bolding}>1 hr 20m .</Text>
                <Text style={styles.bolding}>₹100</Text>
              </View>
            </View>
          </View>
          <View style={styles.rentallast}>
            <View style={styles.end}>
              <Text style={styles.endtext}>End Trip</Text>
            </View>
            <View style={styles.extend}>
              <Text style={styles.extendtext}>Extend</Text>
            </View>
          </View>
        </View>
        <View style={styles.recent}>
          <Text style={styles.recenttext}>Recent Activity</Text>
          <Text style={styles.seeall}>See all</Text>
        </View>
        <View style={styles.recentbox}>
          {recent.map(item => (
            <View key={item.id} style={{...styles.recenteach,borderBottomWidth: item.id < 4 ? 1 : 0,}}>
              <View style={styles.recentfirst}>
                <Image style={styles.imagesize} source={item.images} />
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.title}>
                    {item.title}
                  </Text>
                  <Text>{item.subtitle}</Text>
                </View>
              </View>
              <View style={styles.recentsecond}>
                <Text style={styles.cost}>
                  {item.cost}
                </Text>
                <Image source={require('./assets/images/arrowside.png')} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  parent: { flex: 1 },
  firstsection: { flexDirection: 'row', justifyContent: 'space-between' },
  firstleftsection: { flexDirection: 'row', gap: vw(10) },
  four: { height: vh(18), width: vw(18), top: vh(2) },
  five: { fontSize: 18, fontWeight: 'bold' },
  firstrightsection: { flexDirection: 'row', gap: vw(10), marginRight: vh(10) },
  seven: { height: vh(18), width: vw(18), top: vh(2) },
  eight: { height: vh(18), width: vw(18), top: vh(2) },
  nine: { flexDirection: 'row', marginTop: vh(15), gap: vw(8), flex: 1.3 },
  rohit: {
    flex: 1.2,
    flexDirection: 'row',
    borderWidth: vw(1),
    borderColor: 'black',
    borderRadius: vw(15),
    gap: vw(5),
    justifyContent: 'center',
    padding: 12,
    backgroundColor: 'rgb(241,250,244)',
  },
  eleven: { height: 45, width: 45, top: 10, marginLeft: 5 },
  twelve: { flexDirection: 'column', gap: 3, marginLeft: 5 },
  thirteen: { fontSize: 15, fontWeight: 'bold' },
  wallet: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    borderWidth: 1,
    borderRadius: vw(15),
    padding: 10,
  },
  walletfirst: { flexDirection: 'row', justifyContent: 'space-between' },
  walletcost: { fontSize: 20, fontWeight: 'bold' },
  low: {
      
    paddingHorizontal: vw(8),
    paddingVertical: vh(2),
    borderRadius: vw(10),
    marginTop: vh(5),

    alignSelf: 'flex-start',
  },
  add: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgreen',
    padding: 3,
    borderRadius: 10,
    
  },
  addstyle: { color: 'white', fontWeight: 'bold', fontSize: 15 },
  secondsection: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
  today: { fontSize: 18, fontWeight: 'bold' },
  thirdsection: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
    marginBottom: 5,
  },
  boxes: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    width: '30%',
    padding: 10,
    borderRadius: 10,
  },
  boxesfirst: { flexDirection: 'row', gap: 10 },
  rental: {
    flexDirection: 'column',
    width: vw('98%'),
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop:5,
  },
  rentalfirst: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 255, 0.05)',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },
  ontrip: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 13,
    paddingVertical: 3,
    borderRadius: 20,
  },
  rentalsecond: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 10,
    paddingLeft: 10,
  },
  bolding: {
    fontWeight: 'bold',
  },
  lineone: {
    height: 6,
    backgroundColor: 'grey',
    width: '86%',
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  linetwo: {
    height: '100%',
    width: '54%',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  extrakm: { flexDirection: 'row', marginTop: 10 },
  extrakmone: { flexDirection: 'column', flex: 1, paddingLeft: 5 },
  extrahours: { flexDirection: 'column', flex: 1, marginRight: 10 },
  kmone: { flexDirection: 'row', gap: 5 },
  rentallast: {
    flexDirection: 'row',
    gap: 7,
    marginTop: 10,
    marginBottom: 8,
    padding:10,
  },
  end: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
    backgroundColor: 'rgba(255, 0, 0, 0.05)',
  },
  endtext: { color: 'red', fontSize: 15, fontWeight: 'bold' },
  extend: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: vw(20),
    paddingVertical: vh(5),
    borderWidth: 1,
    borderRadius: vw(10),
    borderColor: 'blue',
    backgroundColor: 'rgba(0, 0, 255, 0.05)',
  },
  extendtext: { color: 'blue', fontSize: 15, fontWeight: 'bold' },
  recent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(10),
  },
  recenttext: { fontWeight: 'bold', fontSize: 17 },
  seeall: { color: 'green', fontWeight: 'bold' },
  recentbox: {
    width: '98%',
    gap: vw(10),
    borderWidth: 1,
    borderRadius: vw(10),
    
    marginTop: vh(10),
  },
  recenteach: {
    flexDirection: 'row',
    justifyContent: 'space-between',
     
    padding: 10,
  },
  recentfirst:{ flexDirection: 'row', gap: vw(15) },
  imagesize:{ height: vh(40), width: vw(30) },
  title:{ fontWeight: 'bold', fontSize: 15 },
  recentsecond:{ flexDirection: 'row', gap: 10, marginTop: vh(10) },
  cost:{ fontWeight: 'bold', fontSize: 15 }
});
