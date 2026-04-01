import { Image, StyleSheet, Text, View } from 'react-native';
import { vh, vw } from './src/constants/dimensions';
import { Colors } from './src/constants/color';

export const ActiveRental = () => {
  return (
    <View style={styles.rental}>
      <View style={styles.rentalfirst}>
        <Text style={styles.font}>
          Cab Number:<Text style={styles.bold}> HR26AB1234</Text>
        </Text>
        <View style={styles.ontrip}>
          <Text style={styles.blue}>On Trip</Text>
        </View>
      </View>
      <View style={styles.rentalsecond}>
        <View style={styles.rows}>
          <Image
            style={styles.alarm}
            source={require('./assets/images/alarming.png')}
          />
          <Text>Time:</Text>
          <Text style={styles.bold}>8:00 AM -6:00 PM</Text>
        </View>

        <View style={styles.rows}>
          <Image
            style={styles.alarm}
            source={require('./assets/images/alarming.png')}
          />
          <Text>Km used:</Text>
          <Text style={styles.bold}>120/220km</Text>
        </View>
      </View>
      <View style={styles.progress}>
        <View style={styles.lineone}>
          <View style={styles.linetwo} />
        </View>
        <Text style={{ top: 3 }}>54%</Text>
      </View>
      <View style={styles.divider}/>
      <View style={styles.extrakm}>
        <View style={styles.extrakmone}>
          <Text>Extra Km</Text>
          <View style={styles.kmone}>
            <Text style={styles.bolding}>₹12/km .</Text>
            <Text style={styles.bolding}>20 km .</Text>
            <Text style={styles.bolding}>₹240</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.extrahours}>
          <Text>Extra Hours</Text>
          <View style={styles.kmone}>
            <Text style={styles.bolding}>₹50/hr .</Text>
            <Text style={styles.bolding}>1 hr 20m .</Text>
            <Text style={styles.bolding}>₹100</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider}/>
      <View style={styles.rentallast}>
        <View style={styles.end}>
          <Text style={styles.endtext}>End Trip</Text>
        </View>
        <View style={styles.extend}>
          <Text style={styles.extendtext}>Extend</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  divider:{height:1,backgroundColor:Colors.grey,width:'100%',marginTop:10},
 
  rental: {
    flexDirection: 'column',
    width: '100%',
    borderRadius: vw(7),
    borderWidth: 1,
    borderColor: Colors.grey,
    marginTop: vh(5),
   
  },
  rentalfirst: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 255, 0.05)',
    paddingVertical: vh(15),
    paddingHorizontal: vw(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  },
  font: { 
    fontSize: vh(15) 
  },
  bold: { 
    fontWeight: 'bold' 
  },
  ontrip: {
    backgroundColor: 'lightblue',
    paddingHorizontal: vw(13),
    paddingVertical: vh(3),
    borderRadius: vw(20),
  },
  blue: { 
    color: 'blue',
    fontSize: vh(14),
  },
  rentalsecond: {
    flexDirection: 'row',
    gap: vw(10),
    marginTop: vh(10),
    paddingHorizontal: vw(10),
  },
  rows: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  alarm: { 
    height: vh(15), 
    width: vw(15), 
    marginRight: vw(5) 
  },
  progress: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: vw(10),
    marginTop: vh(10) 
  },
  lineone: {
    height: vh(6),
    backgroundColor: '#e0e0e0',
    width: '80%',
    marginLeft: vw(10),
    borderRadius: vw(10),
  },
  linetwo: {
    height: '100%',
    width: '44%',
    backgroundColor: 'blue',
    borderRadius: vw(10),
  },
  extrakm: { 
    flexDirection: 'row', 
    marginTop: vh(10), 
    paddingHorizontal: vw(10) 
  },
  extrakmone: { 
    flex: 1 
  },
  extrahours: { 
    flex: 1.2
  },
  kmone: { 
    flexDirection: 'row', 
    gap: vw(5), 
    marginTop: vh(4) 
  },
  bolding: {
    fontWeight: 'bold',
    fontSize: vh(14),
  },
  separator: { 
    width: 1, 
    backgroundColor: '#e0e0e0', 
    marginRight:vw(20)
     
  },
  rentallast: {
    flexDirection: 'row',
    gap: vw(10),
    marginTop: vh(15),
    marginBottom: vh(10),
    paddingHorizontal: vw(10),
  },
  end: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: vh(8),
    borderWidth: 1,
    borderRadius: vw(10),
    borderColor: 'red',
    backgroundColor: Colors.end,
  },
  endtext: { 
    color: 'red', 
    fontSize: vh(15), 
    fontWeight: 'bold' 
  },
  extend: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: vh(8),
    borderWidth: 1,
    borderRadius: vw(10),
    borderColor: 'blue',
    backgroundColor: Colors.extend,
  },
  extendtext: { 
    color: 'blue', 
    fontSize: vh(15), 
    fontWeight: 'bold' 
  },
});


