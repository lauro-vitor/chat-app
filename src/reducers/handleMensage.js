import {
  ADD_MENSAGE,
  DELETE_MENSAGE,
  ALTER_MENSAGE,
  UPDATE_MENSAGE,
} from '../actions';
export default function reducer(state = {messages: {}}, action) {
  let actionMensage, messages, newMensages, oldMensages, index, message;
  switch (action.type) {
    case ADD_MENSAGE: {
      oldMensages = state.messages[action.chatOwner] ?? [];
      actionMensage = {
        id: action.id,
        text: action.text,
        owner: action.owner,
        receiver: action.receiver,
        timestamp: action.timestamp,
        deleted: false,
        alter: false,
        edited: false,
      };
      newMensages = [...oldMensages, actionMensage];
      messages = {
        ...state.messages,
      };
      messages[action.chatOwner] = [...newMensages];
      return {
        ...state,
        messages,
      };
      //  return state;
    }
    case DELETE_MENSAGE: {
      messages = {
        ...state.messages,
      };
      if (action.deleteMensageOfOwner === action.userRequire) {
        newMensages = messages[action.deleteMensageOfReceiver];
      } else {
        newMensages = messages[action.deleteMensageOfOwner];
      }
      index = newMensages.indexOf(
        newMensages.find(x => x.id === action.mensageId),
      );
      if (index >= 0) {
        newMensages.splice(index, 1);
      }
      //memory management
      if (action.deleteMensageOfOwner === action.userRequire) {
        messages[action.deleteMensageOfReceiver] = [...newMensages];
      } else {
        messages[action.deleteMensageOfOwner] = [...newMensages];
      }

      return {
        ...state,
        messages: messages,
      };
    }
    case ALTER_MENSAGE: {
      messages = {
        ...state.messages,
      };
      if (action.alterMensageOfWoner === action.userRequire) {
        message = messages[action.alterMensageOfReceiver].find(
          mensage => mensage.id === action.mensageId,
        );
      } else {
        message = messages[action.alterMensageOfWoner].find(
          mensage => mensage.id === action.mensageId,
        );
      }
      message.alter = true;
      return {
        ...state,
        messages: messages,
      };
    }
    case UPDATE_MENSAGE: {
      messages = {
        ...state.messages,
      };
      action.mensage.text = action.newText;
      action.mensage.alter = false;
      action.mensage.edited = true;
      if (action.mensage.owner === action.userRequire) {
        messages[action.mensage.receiver].map(mensage => {
          if (mensage.id === action.mensage.id) {
            return {...action.mensage};
          }
        });
      } else {
        messages[action.mensage.owner].map(mensage => {
          if (mensage.id === action.mensage.id) {
            return (mensage = action.mensage);
          }
        });
      }
      //memory management
      messages[action.mensage.receiver] = [
        ...messages[action.mensage.receiver],
      ];
      return {
        ...state,
        messages: messages,
      };
    }
    default:
      return state;
  }
}
