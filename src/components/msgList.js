import React from 'react';
import {View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import MensageListItem from './MensageListItem';
import MensageAnswerItem from './MensageAnswerItem';
export default function MsgList(props) {
  const myChatMessages = useSelector(state => state.msg.messages[props.person]);
  if (myChatMessages) {
    return (
      <ScrollView>
        {myChatMessages.map(mensage => {
          if (mensage.owner === props.user) {
            return (
              <View key={mensage.id}>
                <MensageListItem mensage={mensage} />
              </View>
            );
          } else if (mensage.owner === props.person) {
            return (
              <View key={mensage.id}>
                <MensageAnswerItem mensage={mensage} />
              </View>
            );
          } else {
            return null;
          }
        })}
      </ScrollView>
    );
  } else {
    return null;
  }
}
