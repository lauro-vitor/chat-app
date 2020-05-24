import React from 'react';
import {View} from 'react-native';
import {List} from 'react-native-paper';
import ContactListItem from './ContactListItem';
export default props => {
  if (props.receivers !== null) {
    return Object.keys(props.receivers).map(letter => {
      return (
        <View key={letter}>
          <List.Section>
            <List.Subheader>{letter}</List.Subheader>
            <ContactListItem
              list={props.receivers[letter]}
              navigation={props.navigation}
              user={props.user}
              whoRequired="Contact"
            />
          </List.Section>
        </View>
      );
    });
  } else {
    return null;
  }
};
