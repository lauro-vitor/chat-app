import React from 'react';
import {View, StyleSheet} from 'react-native';
export default function(props) {
  return <View style={styles.container}>{props.children}</View>;
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
});
