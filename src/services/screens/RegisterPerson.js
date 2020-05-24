import React from 'react';
import {View} from 'react-native';
import FormRegisterPerson from '../components/Register/FormRegisterPerson';
export default function RegisterPerson(props) {
  return (
    <View>
      <FormRegisterPerson
        navigation={props.navigation}
        userName={props.route.params.userName}
        idImage={props.route.params.getId}
      />
    </View>
  );
}
