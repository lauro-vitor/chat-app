import React, {useState, useEffect} from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import Input from './input';
import SendButton from './SendButton';
import {useSelector, useDispatch} from 'react-redux';
import {addMensage, updateMensage, setId} from '../actions';

export default function Form(props) {
  const state = useSelector(
    stateElment => stateElment.msg.messages[props.person] ?? [],
  );
  const id = useSelector(stateElement => stateElement.id);
  const dispatch = useDispatch();
  let alterMensage = state.find(mensage => mensage.alter);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (alterMensage) {
      setMsg(alterMensage.text);
    }
  }, [alterMensage]);
  return (
    <KeyboardAvoidingView behavior="" enabled>
      <View style={styles.formConteiner}>
        <View style={styles.inputConteiner}>
          <Input onChangeText={val => _onChangeText(val, setMsg)} value={msg} />
        </View>
        <SendButton
          onPress={() =>
            _onPress(msg, setMsg, alterMensage, dispatch, props, id)
          }
          option={alterMensage}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

function _onChangeText(msg, setMsg) {
  setMsg(msg);
}

function _onPress(msg, setMsg, alterMensage, dispatch, props, id) {
  dispatch(setId());
  if (msg && !alterMensage) {
    dispatch(
      addMensage(id, msg, props.user, props.person, new Date(), props.person),
    );
    dispatch(setId());
    setTimeout(function() {
      dispatch(
        addMensage(
          id + 1,
          `Resposta de ${props.person}`,
          props.person,
          props.user,
          new Date(),
          props.person,
        ),
      );
    }, 5000);
    setMsg('');
  } else if (alterMensage) {
    dispatch(updateMensage(alterMensage, msg, props.user));
    setMsg('');
    alterMensage = null;
  }
}
const styles = StyleSheet.create({
  formConteiner: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  inputConteiner: {
    flex: 4,
  },
});
