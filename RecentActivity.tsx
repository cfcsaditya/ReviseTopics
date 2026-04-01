import { Image, StyleSheet, Text, View } from 'react-native';
import { vh, vw } from './src/constants/dimensions';
import { Colors } from './src/constants/color';

const recent = [
  {
    id: 1,
    images: require('./assets/images/Gre.png'),
    title: 'Trip to Cyber City,Gurugram',
    subtitle: 'Today,2:30 PM . 12 km . 25 min',
    cost: '+₹320',
  },
  {
    id: 2,
    images: require('./assets/images/Gre.png'),
    title: 'Trip to IGI Airport,Delhi',
    subtitle: 'Today,11:15 AM . 12 km . 25 min',
    cost: '+₹450',
  },
  {
    id: 3,
    images: require('./assets/images/Gre.png'),
    title: 'Toll & Parking Charges',
    subtitle: 'Today,11:15 AM . 12 km . 25 min',
    cost: '-₹120',
  },
  {
    id: 4,
    images: require('./assets/images/Gre.png'),
    title: 'Trip to Noida Sector 62',
    subtitle: 'Today,11:15 AM . 12 km . 25 min',
    cost: '+₹380',
  },
];
export const RecentActivity = () => {
  return (
    <View style={styles.recentActivityContainer}>
      {recent.map(item => (
        <View
          key={item.id}
          style={{
            ...styles.recentCard,
            borderBottomWidth: item.id < 4 ? 1 : 0,
          }}
        >
          <View style={styles.recentFirst}>
            <View style={styles.imagebg}>
              <Image style={styles.imagesize} source={item.images} />
            </View>

            <View style={styles.recentSecond}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.subtitle}</Text>
            </View>
          </View>
          <View style={styles.recentThird}>
            <Text style={styles.cost}>{item.cost}</Text>
            <Image source={require('./assets/images/arrowside.png')} />
          </View>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  
  recent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: vh(10),
  },
  recentSecond: { fontWeight: 'bold', fontSize: 18 },
   
  recentActivityContainer: {
    width: '100%',
    gap: vw(10),
    borderWidth: 1,
    borderRadius: vw(10),
    borderColor: Colors.grey,

    marginTop: vh(10),
  },
  recentCard: {
    flexDirection: 'row',
   
    borderBottomColor: Colors.grey,
    padding: 10,
    justifyContent:'space-between'
  },
  recentFirst: { flexDirection: 'row', gap: vw(5) },
  imagesize: { height: vh(20), width: vw(20) },
  title: { fontWeight: 'bold', fontSize: 15 },
  recentThird: { flexDirection: 'row', gap: 2, marginTop: vh(10) },
  cost: { fontWeight: 'bold', fontSize: 15 },
  imagebg: {
    backgroundColor: Colors.imagebg,
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 15,
  },
});
