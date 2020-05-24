import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
// separando os props
export default ({onChangeText, value}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder="Type a mensage ..."
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 10,
  },
});
