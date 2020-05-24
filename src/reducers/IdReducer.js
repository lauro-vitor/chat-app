import {SET_ID} from '../actions';
const Reducer = (state = 1, action) => {
  switch (action.type) {
    case SET_ID:
      return state + action.value;
    default:
      return state;
  }
};

export default Reducer;
