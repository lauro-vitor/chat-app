import React from 'react';
import AvatarItem from './AvatarItem';
import ContactListItemDescription from './ContactListItemDescription';
import {List, TouchableRipple} from 'react-native-paper';
export default props => {
  if (props.whoRequired === 'Contact') {
    return props.list.map(element => {
      return (
        <TouchableRipple
          key={element.name}
          onPress={() => _onPress(props, element.name, element.avatar)}>
          <List.Item
            title={element.name}
            description=" "
            left={() => <AvatarItem id={element.avatar} />}
            descriptionStyle={styles}
          />
        </TouchableRipple>
      );
    });
  } else {
    return props.list.map(element => {
      let idAvatar = searchIdAvatar(props.receivers, element);
      return (
        <TouchableRipple
          key={element.owner}
          onPress={() => _onPress(props, element.owner, idAvatar)}>
          <List.Item
            title={element.owner}
            description={() => <ContactListItemDescription message={element} />}
            left={() => <AvatarItem id={idAvatar} />}
            descriptionStyle={styles}
          />
        </TouchableRipple>
      );
    });
  }
};
function searchIdAvatar(receivers, message) {
  let id = 0;
  for (let key in receivers) {
    receivers[key].map(e => {
      if (e.name === message.owner) {
        id = e.avatar;
      }
    });
  }
  return id;
}
function _onPress(props, paramName, paramAvatar) {
  props.navigation.navigate('Conversation', {
    name: paramName,
    image: paramAvatar,
    user: props.user,
  });
}
const styles = {
  borderBottomWidth: 1,
  borderColor: '#c2c2c2',
};
