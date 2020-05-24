import React from 'react';
import {View, Alert, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Menu, MenuOptions, MenuTrigger} from 'react-native-popup-menu';
import {IconButton} from 'react-native-paper';
export default function(props) {
  return (
    <View style={styles.container}>
      <Menu>
        <MenuTrigger>
          <IconButton icon="dots-vertical" size={32} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOptions>
            <TouchableOpacity onPress={() => onPressAccountPlus(props)}>
              <Text style={styles.textMenu}>Add Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressLogOut(props)}>
              <Text style={styles.textMenu}>LogOut</Text>
            </TouchableOpacity>
          </MenuOptions>
        </MenuOptions>
      </Menu>
    </View>
  );
}
function onPressAccountPlus(props) {
  props.navigation.navigate('Profile', {
    title: 'Register Contact',
    sentFrom: 'Index',
  });
}
function onPressLogOut(props) {
  Alert.alert(
    'LogOut',
    'Deseja Sair?',
    [
      {
        text: 'Cancel',
        onPress: () => false,
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          return props.navigation.navigate('Login');
        },
      },
    ],
    {cancelable: false},
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textMenu: {
    padding: 15,
  },
});
