import axios from 'axios';
import { ROOT_URL } from '../helpers/constants';

// Action Types
// ==================

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function login(access_token) {
  const request = axios({
    method: 'post',
    data: access_token,
    url: `${ROOT_URL}/facebook-login`,
    headers : { 'Content-Type': 'application/octet-stream' }
  })

  return {
    type: LOGIN,
    payload: request
  }
}

export function loginSuccess(access_token) {
  return {
    type: LOGIN_SUCCESS,
    payload: access_token
  }
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}