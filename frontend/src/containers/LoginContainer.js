import { connect } from 'react-redux';
import Login from '../components/Login.js';
import { login, loginSuccess, loginFailure } from '../actions/login';
import { setAlert, removeAlert } from '../actions/alert';
import { setUser } from '../actions/auth';
import decodeJWT from '../helpers/decodeJWT';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.session.isAuthenticated
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    facebookCallback: (fb) => {
      dispatch(login(fb.accessToken)).then((response) => {
        if (!response.error) {
          let token = response.payload.data.access_token;
          let decoded = decodeJWT(token)
          dispatch(loginSuccess(token))
          let user = decoded.identity;
          dispatch(setUser(user))
        } else {
          dispatch(loginFailure(response.payload.message))
          dispatch(setAlert(response.payload.message))
          setTimeout(function(){
            dispatch(removeAlert())
          }, 4000)
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);