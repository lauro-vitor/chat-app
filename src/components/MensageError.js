import React from 'react';
import {Text, StyleSheet} from 'react-native';
export default function(props) {
  if (props.mensageError) {
    return <Text style={styles.text}>{props.mensageError}</Text>;
  } else {
    return <Text />;
  }
}
const styles = StyleSheet.create({
  text: {
    color: '#bd0000',
  },
});
