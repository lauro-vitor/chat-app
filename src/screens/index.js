import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import Contacts from './Contacts';
import Chat from './Chat';
export default function() {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      activeColor="#000"
      inactiveColor="#c2c2c2"
      barStyle={barColor}>
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color}) => <Icon name="chat" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({color}) => (
            <Icon name="contacts" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const barColor = {backgroundColor: '#fff'};
