import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {getTime, confirmAlterMensage, confirmRemoveMensage} from '../util';
import {useDispatch} from 'react-redux';
export default function MensagelistItem({mensage}) {
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          confirmRemoveMensage(
            dispatch,
            mensage.id,
            mensage.owner,
            mensage.receiver,
            mensage.owner,
          );
        }}
        onLongPress={() => {
          confirmAlterMensage(
            dispatch,
            mensage.id,
            mensage.owner,
            mensage.receiver,
            mensage.owner,
          );
        }}>
        <View style={styles.containerRight}>
          <Text style={mensage.edited ? styles.mensageEdited : styles.display}>
            Mensagem Editada
          </Text>
          <View style={[styles.container, styles.containerMensage]}>
            <Text style={styles.mensage}>{mensage.text}</Text>
          </View>
          <Text style={styles.time}>
            {getTime(new Date(mensage.timestamp))}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
  containerMensage: {
    backgroundColor: '#2672ed',
  },
  containerRight: {
    alignSelf: 'flex-end',
  },
  mensageEdited: {
    color: '#a6a6a6',
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  display: {
    display: 'none',
  },
  mensage: {
    color: 'white',
  },
  time: {
    alignSelf: 'flex-end',
  },
});
