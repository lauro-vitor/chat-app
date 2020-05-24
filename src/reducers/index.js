import {combineReducers} from 'redux';
import handleUser from './handleUser';
import lastUser from './lastUser';
import IdReducer from './IdReducer';
import HandleMensage from './handleMensage';

export default combineReducers({
  handleUser,
  lastUser,
  msg: HandleMensage,
  id: IdReducer,
});
