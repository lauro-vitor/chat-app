import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Form from '../components/form';
import MsgList from '../components/msgList';
// declaramos route para receber os dados através da página
export default function Conversation({route}) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View>
          <MsgList person={route.params.name} user={route.params.user} />
        </View>
      </ScrollView>
      <View style={styles.containerForm}>
        <Form person={route.params.name} user={route.params.user} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentContainerStyle: {
    flexDirection: 'column-reverse',
    flex: 1,
  },
});
