import React from 'react';
import {Button} from 'react-native-paper';
export default function(props) {
  return (
    <Button mode="contained" onPress={props.onPress}>
      {props.title}
    </Button>
  );
}
