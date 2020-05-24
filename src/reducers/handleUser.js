import {ADD_USER, ADD_RECEIVER} from '../actions';
export default function(state = [], action) {
  let newUser, oldUser, user;
  let receive,
    newReceiver,
    oldReceivers,
    auxReceivers,
    key,
    ordered = {},
    auxState = [],
    auxUser = {},
    index = 0;
  switch (action.type) {
    case ADD_USER: {
      newUser = {
        email: action.email,
        password: action.password,
        avatar: action.avatar,
        name: action.name,
        receivers: {},
      };
      oldUser = state[action.name] ?? [];
      newUser = [...oldUser, newUser];
      user = state;
      user = [...newUser];
      return [...state, user[user.length - 1]];
    }
    case ADD_RECEIVER: {
      // step 1: pointing to new memory address with properties of state
      auxState = [...state];
      auxUser = {
        ...state.find(element => element.email === action.ownerEmail),
      };
      auxReceivers = {
        ...state.find(element => element.email === action.ownerEmail).receivers,
      };
      key = action.name[0].toUpperCase();
      receive = {
        name: action.name,
        avatar: action.avatar,
      };
      oldReceivers = auxReceivers[key] ?? [];
      newReceiver = [...oldReceivers, receive];
      newReceiver.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      auxReceivers[key] = [...newReceiver];
      Object.keys(auxReceivers)
        .sort()
        .forEach(function(k) {
          ordered[k] = auxReceivers[k];
        });
      index = auxState.indexOf(
        auxState.find(element => element.email === action.ownerEmail),
      );
      auxUser.receivers = ordered;
      auxState[index] = auxUser;
      return [...auxState];
    }
    default:
      return state;
  }
}
