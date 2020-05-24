import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AvatarItem from './AvatarItem';
export default function HeaderChat({image, name}) {
  return (
    <View style={styles.container}>
      <AvatarItem id={image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    left: -30,
    flexDirection: 'row',
    alignItems: 'center',
    width: 317,
    height: 55,
    padding: 0,
  },
  avatar: {
    flex: 1,
  },
  name: {
    marginLeft: 10,
    fontSize: 20,
    flex: 5,
  },
});
