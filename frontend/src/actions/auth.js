export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';
export const SET_TOKEN = 'SET_TOKEN'
export const SET_USER = 'SET_USER'
export const LOGOUT = 'LOGOUT'

export function IsAuthenticated(boolean = false) {
  return {
    type: IS_AUTHENTICATED,
    isAuthenticated: boolean
  }
}

export function setToken(token = null) {
  return {
    type: SET_TOKEN,
    token: token
  }
}

export function setUser(user = null) {
  return {
    type: SET_USER,
    user: user
  }
}

export function logoutUser() {
  return {
    type: LOGOUT
  }
}