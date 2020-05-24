import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getTime, getDate} from '../util/';
export default props => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.message.text}</Text>
    <View style={styles.time}>
      <Text style={[styles.text]}>
        {getDate(new Date(props.message.timestamp))}
      </Text>
      <Text style={[styles.text]}>
        {getTime(new Date(props.message.timestamp))}
      </Text>
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    color: '#919191',
  },

  time: {
    flex: 1,
    alignItems: 'flex-end',
    position: 'relative',
    top: -20,
  },
});
