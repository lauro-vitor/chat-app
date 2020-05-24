import React from 'react';
import {View} from 'react-native';
import FormRegisterUser from '../components/Register/FormRegisterUser';
export default function Home(props) {
  return (
    <View>
      <FormRegisterUser navigation={props.navigation} />
    </View>
  );
}
