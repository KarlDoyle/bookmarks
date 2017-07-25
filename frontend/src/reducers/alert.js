import { SET_ALERT, REMOVE_ALERT } from '../actions/alert';

const INITIAL_STATE = {
  message: null
};

const alert = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_ALERT:
      return { ...state, message:action.payload };
    case REMOVE_ALERT:
      return { ...state, message: null };
    default:
      return state
  }
}
export default alert;