import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/login';
import { IS_AUTHENTICATED, SET_TOKEN, SET_USER, LOGOUT } from '../actions/auth';


const INITIAL_STATE = {
  isAuthenticated : false,
  token: null,
  user: null,
  error: null
};

const session = (state = INITIAL_STATE, action) => {
  let error;
  switch(action.type) {
    case LOGIN:
      return { ...state, isAuthenticated:false, token:null, user:null, error:null };

    case LOGIN_SUCCESS:
      return Object.assign({}, state, { isAuthenticated: true, token: action.payload })

    case LOGIN_FAILURE:
      error = action.payload || {message: action.payload.message};
      return { ...state, isAuthenticated:false, token:null, user:null, error:error };

    case IS_AUTHENTICATED:
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated,
        token: action.isAuthenticated ? state.token : null
      })

    case SET_TOKEN:
      return Object.assign({}, state, {token: action.token})

    case SET_USER:
      return Object.assign({}, state, {user: action.user})

    case LOGOUT:
      return { ...state, isAuthenticated:false, token:null, user:null, error:null };

    default:
      return state
  }
}
export default session;