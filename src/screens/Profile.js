import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import RegisterInput from '../components/RegisterInput';
import RegisterButton from '../components/RegisterButton';
import FormRow from '../components/FormRow';
import {listWoman, listMen} from '../util';
import MensageError from '../components/MensageError';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, setLastUser, addReceiver} from '../actions';
export default function(props) {
  const dispatch = useDispatch();
  const handleUser = useSelector(state => state.handleUser);
  const lastUser = useSelector(state => state.lastUser);
  const userRequired = handleUser.find(element => element.email === lastUser);
  const [getPresentId, setPresentId] = useState(0);
  const [getName, setName] = useState('');
  const [getMessageErrorName, setMessageErrorName] = useState('');
  const [getMessageErrorAvatar, setMessageErrorAvatar] = useState('');
  return (
    <View>
      <ScrollView>
        <FormRow>
          <RegisterInput
            label="Name"
            onChangeText={value => _onChangeText(value, setName)}
            value={getName}
          />
        </FormRow>
        <FormRow>
          <MensageError mensageError={getMessageErrorName} />
        </FormRow>
        <FormRow>
          {imageListItem(listWoman, getPresentId, setPresentId)}
        </FormRow>
        <FormRow>{imageListItem(listMen, getPresentId, setPresentId)}</FormRow>
        <FormRow>
          <MensageError mensageError={getMessageErrorAvatar} />
        </FormRow>
        <FormRow>
          <RegisterButton
            title="SAVE"
            onPress={() =>
              _onPress(
                getName,
                setName,
                setMessageErrorName,
                getPresentId,
                setPresentId,
                setMessageErrorAvatar,
                props,
                dispatch,
                userRequired,
              )
            }
          />
        </FormRow>
      </ScrollView>
    </View>
  );
}
function _onPress(
  getName,
  setName,
  setMessageErrorName,
  getPresentId,
  setPresentId,
  setMessageErrorAvatar,
  props,
  dispatch,
  userRequired,
) {
  if (!getName) {
    setMessageErrorName('Name is required');
  } else if (getPresentId === 0) {
    setMessageErrorName('');
    setMessageErrorAvatar('Image of an Avatar is required');
  } else {
    setMessageErrorAvatar('');
    if (props.route.params.sentFrom === 'RegisterUser') {
      let user = {
        email: props.route.params.email,
        password: props.route.params.password,
        avatar: getPresentId,
        name: getName,
      };
      dispatch(addUser(user.email, user.password, user.avatar, user.name));
      dispatch(setLastUser(user.email));
      props.navigation.navigate('Index');
    } else {
      if (searchReceiver(userRequired, getName)) {
        setMessageErrorName('Name Already Exists');
      } else {
        setMessageErrorName('');
        dispatch(addReceiver(getName, getPresentId, userRequired.email));
        props.navigation.navigate('Index');
      }
    }
    setName('');
    setPresentId(0);
  }
}
const searchReceiver = (user, nameNewReceiver) => {
  for (var key in user.receivers) {
    if (user.receivers[key].find(element => element.name === nameNewReceiver)) {
      return true;
    }
  }
  return false;
};
function _onChangeText(value, set) {
  set(value);
}
function imageListItem(list, getPresentId, setPresentId) {
  return (
    <View style={styles.line}>
      {list.map(element => (
        <TouchableOpacity
          key={element.id}
          style={getPresentId === element.id ? styles.containerImage : null}
          onPress={() => onPressImage(setPresentId, element.id)}>
          <Image source={element.path} style={styles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
function onPressImage(setPresentId, id) {
  setPresentId(id);
}
const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
  },
  containerImage: {
    backgroundColor: '#d9d7d7',
    borderRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});
