import { Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native';
import { increment, decrement } from './slice';
import { StyleSheet } from 'react-native';

const Counterscreen = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.one}>
      <Text style={{ fontSize: 30 }}>Counterscreen :{count}</Text>
      <View style={{ flexDirection: 'row', gap: 20 }}>
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
};

export default Counterscreen;
const styles = StyleSheet.create({
  one: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});
