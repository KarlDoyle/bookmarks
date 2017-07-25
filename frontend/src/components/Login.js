import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { FBID, FBSCOPE } from '../helpers/constants';
import '../assets/button.css';

const styles = 'button button--facebook';

const Login = (props) => {
  return (
    !props.isAuthenticated ? <FacebookLogin
      cssClass={styles} appId={FBID} autoLoad={false}
      scope={FBSCOPE} callback={props.facebookCallback} />
    : null
  );
}

export default Login;