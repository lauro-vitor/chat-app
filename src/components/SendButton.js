import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
export default function SendButton(props) {
  if (!props.option) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <Icon name="paper-plane" size={32} style={styles.container} />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <Icon name="save" size={32} style={styles.container} />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
});
