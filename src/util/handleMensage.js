import {Alert} from 'react-native';
import {alterMensage, deleteMensage} from '../actions';

export function confirmAlterMensage(
  dispatch,
  mensageId,
  alterMensageOfOwner,
  alterMensageOfReceiver,
  userRequire,
) {
  Alert.alert(
    'Alterar Mensagem',
    'Deseja Alterar Mensagem ?',
    [
      {
        text: 'Cancel',
        onPress: () => false,
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(
            alterMensage(
              mensageId,
              alterMensageOfOwner,
              alterMensageOfReceiver,
              userRequire,
            ),
          );
        },
      },
    ],
    {cancelable: false},
  );
}
export function confirmRemoveMensage(
  dispatch,
  id,
  owner,
  receiver,
  userRequire,
) {
  Alert.alert(
    'Excluir Mensagem',
    'Deseja Excluir Mensagem ?',
    [
      {
        text: 'Cancel',
        onPress: () => false,
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(deleteMensage(id, owner, receiver, userRequire));
        },
      },
    ],
    {cancelable: false},
  );
} //end-removeMensage
