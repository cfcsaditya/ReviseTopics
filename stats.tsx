import { Image, StyleSheet, Text, View } from 'react-native';
import { vh, vw } from './src/constants/dimensions';

const stats = [
  {
    id: 1,
    images: require('./assets/images/Gre.png'),
    number: '12',
    sub: 'Trips',
    arrowup: require('./assets/images/arrows.png'),
    perc: '20% vs',
    date: 'yesterday',
  },
  {
    id: 2,
    images: require('./assets/images/Gre.png'),
    number: '5h 40m',
    sub: 'Hours ',
    arrowup: require('./assets/images/down.png'),
    perc: '10% vs',
    date: 'today',
  },
  {
    id: 3,
    images: require('./assets/images/Gre.png'),
    number: '$2,850',
    sub: 'Earnings',
    arrowup: require('./assets/images/arrows.png'),
    perc: ' 15% vs',
    date: 'yesterday',
  },
];
export const Statsbox = () => {
  return (
    <View style={styles.statsContainer}>
      {stats.map(item => (
        <View key={item.id} style={styles.statsboxes}>
          <View style={styles.boxesfirst}>
            <View style={styles.imagebg}>
              <Image style={styles.imagesize} source={item.images} />
            </View>
            <View style={styles.cols}>
              <Text style={styles.bold}>{item.number}</Text>
              <Text>{item.sub}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Image source={item.arrowup} style={styles.arrow} />
            <Text style={{ color: item.id == 2 ? 'red' : 'green' }}>
              {item.perc}
            </Text>
          </View>
          <Text>{item.date}</Text>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  row:{ flexDirection: 'row' },
  bold: { 
    fontWeight: 'bold' 
  },
  arrow:{ height: 20, width: 20 },
  cols:{ flexDirection: 'column' },
  statsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 7,
    marginBottom: 5,
  },
  statsboxes: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'rgb(210,214,218)',
    flex: 1,
    width: '30%',
    padding: 10,
    borderRadius: 10,
    paddingBottom: 12,
  },
  boxesfirst: { flexDirection: 'row', gap: 10 },

  imagesize: { height: vh(20), width: vw(20) },
  title: { fontWeight: 'bold', fontSize: 15 },

  cost: { fontWeight: 'bold', fontSize: 15 },
  imagebg: {
    backgroundColor: 'rgb(217,240,224)',
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 15,
  },
});
