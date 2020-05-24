import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {getTime, confirmRemoveMensage} from '../util';
import {useDispatch} from 'react-redux';

export default function MensageAnswerItem({mensage}) {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        confirmRemoveMensage(
          dispatch,
          mensage.id,
          mensage.owner,
          mensage.receiver,
        );
      }}>
      <View style={styles.container}>
        <Text style={mensage.edited ? styles.mensageEdited : styles.display}>
          Mensagem Editada
        </Text>
        <View style={styles.mensageContainer}>
          <Text style={styles.mensage}> {mensage.text} </Text>
        </View>
        <Text style={styles.time}>{getTime(new Date(mensage.timestamp))}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mensageContainer: {
    backgroundColor: '#e0dede',
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
  container: {
    alignSelf: 'flex-start',
  },
  mensageEdited: {
    color: '#a6a6a6',
    fontSize: 12,
    alignSelf: 'flex-start',
  },
  display: {
    display: 'none',
  },
});
