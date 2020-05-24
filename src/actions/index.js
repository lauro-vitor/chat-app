export const ADD_USER = 'ADD_USER';
export function addUser(email, password, avatar, name) {
  return {
    type: ADD_USER,
    email: email,
    password: password,
    avatar: avatar,
    name: name,
  };
}
export const SET_LAST_USER = 'SET_LAST_USER';
export function setLastUser(login) {
  return {
    type: SET_LAST_USER,
    login: login,
  };
}
export const ADD_RECEIVER = 'ADD_RECEIVER';
export function addReceiver(name, avatar, ownerEmail) {
  return {
    type: ADD_RECEIVER,
    name: name,
    avatar: avatar,
    ownerEmail: ownerEmail,
  };
}
export const ADD_MENSAGE = 'ADD_MENSAGE';
export function addMensage(id, text, owner, receiver, timestamp, chatOwner) {
  return {
    type: ADD_MENSAGE,
    id: id,
    text: text,
    owner: owner,
    receiver: receiver,
    timestamp: timestamp,
    chatOwner,
  };
}

export const DELETE_MENSAGE = 'DELETE_MENSAGE';
export function deleteMensage(
  mensageId,
  deleteMensageOfOwner,
  deleteMensageOfReceiver,
  userRequire,
) {
  return {
    type: DELETE_MENSAGE,
    mensageId: mensageId,
    deleteMensageOfOwner: deleteMensageOfOwner,
    deleteMensageOfReceiver: deleteMensageOfReceiver,
    userRequire: userRequire,
  };
}

export const ALTER_MENSAGE = 'ALTER_MENSAGE';
export function alterMensage(
  mensageId,
  alterMensageOfWoner,
  alterMensageOfReceiver,
  userRequire,
) {
  return {
    type: ALTER_MENSAGE,
    mensageId: mensageId,
    alterMensageOfWoner: alterMensageOfWoner,
    alterMensageOfReceiver: alterMensageOfReceiver,
    userRequire: userRequire,
  };
}

export const UPDATE_MENSAGE = 'UPDATE_MENSAGE';
export function updateMensage(mensage, newText, userRequire) {
  return {
    type: UPDATE_MENSAGE,
    mensage: mensage,
    newText: newText,
    userRequire: userRequire,
  };
}
/*ID*/
export const SET_ID = 'SET_ID';
export function setId() {
  return {
    type: SET_ID,
    value: 1,
  };
}
export const ADD_LAST_MESSAGE = 'ADD_LAST_MESSAGE';
export function addLastMessage(object) {
  return {
    type: ADD_LAST_MESSAGE,
    object,
  };
}
