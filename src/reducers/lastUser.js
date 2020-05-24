/*this struct data returns of last user register or login*/
import {SET_LAST_USER} from '../actions';
export default function(state = '', action) {
  switch (action.type) {
    case SET_LAST_USER: {
      return (state = action.login);
    }
    default:
      return state;
  }
}
