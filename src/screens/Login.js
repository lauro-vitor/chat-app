import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RegisterInput from '../components/RegisterInput';
import RegisterButton from '../components/RegisterButton';
import FormRow from '../components/FormRow';
import MensageError from '../components/MensageError';
import {validityEmail, validityPassword} from '../util';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {setLastUser} from '../actions';
export default function Login(props) {
  const dispatch = useDispatch();
  const [getLogin, setLogin] = useState('');
  const [getPassword, setPassword] = useState('');
  const [getMensageErrorLogin, setMensageErrorLogin] = useState('');
  const [getMensageErrorPassword, setMensageErrorPassword] = useState('');
  const handleUser = useSelector(state => state.handleUser);
  return (
    <View>
      <FormRow>
        <RegisterInput
          label="Email"
          onChangeText={value => _onChangeText(value, setLogin)}
          value={getLogin}
          keyboardType="email-address"
        />
      </FormRow>
      <FormRow>
        <MensageError mensageError={getMensageErrorLogin} />
      </FormRow>
      <FormRow>
        <RegisterInput
          label="password"
          type="password"
          onChangeText={value => _onChangeText(value, setPassword)}
          value={getPassword}
        />
      </FormRow>
      <FormRow>
        <MensageError mensageError={getMensageErrorPassword} />
      </FormRow>
      <FormRow>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('RegisterUser')}>
          <Text style={styles.text}>Create Account Here</Text>
        </TouchableOpacity>
      </FormRow>
      <FormRow>
        <RegisterButton
          title="LOG IN"
          onPress={() =>
            _onPress(
              getLogin,
              setLogin,
              getPassword,
              setPassword,
              setMensageErrorLogin,
              setMensageErrorPassword,
              handleUser,
              props,
              dispatch,
            )
          }
        />
      </FormRow>
    </View>
  );
}

function _onPress(
  getLogin,
  setLogin,
  getPassword,
  setPassword,
  setMensageErrorLogin,
  setMensageErrorPassword,
  handleUser,
  props,
  dispatch,
) {
  if (
    validityEmail(getLogin, setMensageErrorLogin) &&
    validityPassword(getPassword, setMensageErrorPassword)
  ) {
    const user = handleUser.find(element => element.email === getLogin);
    if (!user) {
      setMensageErrorLogin('email addres is not registered');
    } else if (getPassword !== user.password) {
      setMensageErrorPassword('password incorrect');
    } else {
      setLogin('');
      setPassword('');
      dispatch(setLastUser(getLogin));
      props.navigation.navigate('Index');
    }
  }
}
function _onChangeText(value, set) {
  set(value);
}
const styles = StyleSheet.create({
  text: {
    color: '#3b5998',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
});
