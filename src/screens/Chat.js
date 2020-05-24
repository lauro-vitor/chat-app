import React from 'react';
import {useSelector} from 'react-redux';
import {View, ScrollView} from 'react-native';
import ContactListItem from '../components/ContactListItem';

export default props => {
  const messages = useSelector(state => state.msg.messages);
  const handleUser = useSelector(state => state.handleUser);
  const lastUser = useSelector(state => state.lastUser);
  const user = handleUser.find(element => element.email === lastUser);
  let listChat = [];
  if (messages) {
    Object.keys(messages).map(element => {
      for (let key in user.receivers) {
        let searchReceiver = user.receivers[key].find(
          element2 => element2.name === element,
        );
        if (searchReceiver) {
          let message = lastMessage(messages, searchReceiver.name);
          if (message.owner !== user.name) {
            listChat.push(message);
            listChat.sort((a, b) => {
              if (a.id < b.id) {
                return 1;
              }
              if (a.id > b.id) {
                return -1;
              }
              return 0;
            });
          }
        }
      }
    });
    return (
      <View>
        <ScrollView>
          <ContactListItem
            list={listChat}
            navigation={props.navigation}
            user={user.name}
            whoRequired="Chat"
            receivers={user.receivers}
          />
        </ScrollView>
      </View>
    );
  } else {
    return null;
  }
};

function lastMessage(messages, name) {
  return messages[name][messages[name].length - 1];
}
