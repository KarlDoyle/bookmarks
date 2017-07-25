export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export function setAlert(data = null) {
  return {
    type: SET_ALERT,
    payload: data
  }
}

export function removeAlert() {
  return {
    type: REMOVE_ALERT
  }
}