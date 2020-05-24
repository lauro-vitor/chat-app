import React from 'react';
import {StyleSheet} from 'react-native';
import {listMen, listWoman} from '../util';
import {Avatar} from 'react-native-paper';
export default function(props) {
  let objectImage;
  if (props.id >= 1 && props.id <= 3) {
    objectImage = searchObjectImage(listWoman, props);
  } else {
    objectImage = searchObjectImage(listMen, props);
  }
  return (
    <Avatar.Image source={objectImage.path} size={55} style={styles.avatar} />
  );
}
function searchObjectImage(list, props) {
  return list.find(element => element.id === props.id);
}
const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#fff',
  },
});
