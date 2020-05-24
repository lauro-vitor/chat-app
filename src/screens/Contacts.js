import React from 'react';
import {View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import ContactList from '../components/ContactList';
export default props => {
  const handleUser = useSelector(state => state.handleUser);
  const lastUser = useSelector(state => state.lastUser);
  const user = handleUser.find(element => element.email === lastUser);
  return (
    <View>
      <ScrollView>
        <ContactList
          user={user.name}
          receivers={user.receivers}
          navigation={props.navigation}
        />
      </ScrollView>
    </View>
  );
};
