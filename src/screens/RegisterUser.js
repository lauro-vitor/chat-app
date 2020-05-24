import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import RegisterInput from '../components/RegisterInput';
import RegisterButton from '../components/RegisterButton';
import FormRow from '../components/FormRow';
import MensageError from '../components/MensageError';
import {
  validityEmail,
  validityPassword,
  validityConfirmPassword,
} from '../util';
const REGISTER = 'REGISTER';
import {useSelector} from 'react-redux';
export default function(props) {
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');
  const [getConfirmPassword, setConfirmPassword] = useState('');
  const [getMensageErrorEmail, setMensageErrorEmail] = useState('');
  const [getMensageErrorPassword, setMensageErrorPassword] = useState('');
  const [
    getMensageErrorConfirmPassword,
    setMensageErrorConfirmPassword,
  ] = useState('');
  const listUser = useSelector(state => state.handleUser);
  return (
    <View>
      <ScrollView>
        <FormRow>
          <RegisterInput
            label="Email"
            value={getEmail}
            onChangeText={value => _onChangeText(value, setEmail)}
          />
          <MensageError mensageError={getMensageErrorEmail} />
        </FormRow>
        <FormRow>
          <RegisterInput
            label="Password"
            value={getPassword}
            onChangeText={value => _onChangeText(value, setPassword)}
            type="password"
          />
          <MensageError mensageError={getMensageErrorPassword} />
        </FormRow>
        <FormRow>
          <RegisterInput
            label="Confirm Password"
            value={getConfirmPassword}
            onChangeText={value => _onChangeText(value, setConfirmPassword)}
            type="password"
          />
          <MensageError mensageError={getMensageErrorConfirmPassword} />
        </FormRow>
        <FormRow>
          <RegisterButton
            title="CREATE NEW ACCOUNT"
            onPress={() =>
              _onPress(
                getEmail,
                setEmail,
                getPassword,
                setPassword,
                getConfirmPassword,
                setConfirmPassword,
                setMensageErrorEmail,
                setMensageErrorPassword,
                setMensageErrorConfirmPassword,
                props,
                listUser,
              )
            }
          />
        </FormRow>
      </ScrollView>
    </View>
  );
}

function _onPress(
  getEmail,
  setEmail,
  getPassword,
  setPassword,
  getConfirmPassword,
  setConfirmPassword,
  setMensageErrorEmail,
  setMensageErrorPassword,
  setMensageErrorConfirmPassword,
  props,
  listUser,
) {
  if (
    validityEmail(getEmail, setMensageErrorEmail, listUser, REGISTER) &&
    validityPassword(getPassword, setMensageErrorPassword) &&
    validityConfirmPassword(
      getPassword,
      getConfirmPassword,
      setMensageErrorConfirmPassword,
    )
  ) {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    props.navigation.navigate('Profile', {
      sentFrom: 'RegisterUser',
      email: getEmail,
      password: getPassword,
      title: 'Profile User',
    });
  }
}
function _onChangeText(value, set) {
  set(value);
}
