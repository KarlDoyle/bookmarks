import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { createBookmark, createBookmarkSuccess, createBookmarkFailure } from '../actions/bookmarks';
import { setAlert, removeAlert } from '../actions/alert';
import { logoutUser } from '../actions/auth';
import { loadState } from '../helpers/localStorage';

import App from '../components/App';

const mapStateToProps = (state) => {

  return {
    isAuthenticated: state.session.isAuthenticated,
    avatar: (state.session.user && state.session.user.avatar) ? state.session.user.avatar : undefined,
    loading: state.bookmarks.loading,
    alert: state.alert ? state.alert.message : undefined
  }
}

const mapDispatchToProps = (dispatch) => {
  let createBookmarkValue;
  return {
    logout: () => {
      dispatch(logoutUser())
      if (hashHistory.getCurrentLocation().pathname !== '/home') {
        hashHistory.push('/home')
      }
    },
    // onchange function of create bookmark value
    handleChange: (e) => {
      createBookmarkValue = e.target.value;
    },
    // submission of create bookmark
    handleSubmit: (e) => {
      e.preventDefault()
      const token = loadState().session.token;
      dispatch(createBookmark(createBookmarkValue, token)).then((response) => {
        if (!response.error) {
          dispatch(createBookmarkSuccess(response.payload))
          dispatch(setAlert(`${response.payload.data.title} has been saved !`))
          setTimeout(function(){
            dispatch(removeAlert())
          }, 4000)
          // e.target[0].value = '';
        } else {
          dispatch(createBookmarkFailure(response.error || response.payload.message))
          dispatch(setAlert(response.payload.message))
          setTimeout(function(){
            dispatch(removeAlert())
          }, 4000)
          if (response.payload && response.payload.response.status === 401) {
            dispatch(logoutUser())
            if (hashHistory.getCurrentLocation().pathname !== '/home') {
              hashHistory.push('/home')
            }
          }
          dispatch(setAlert(`There has been an issue saving a bookmark`))
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);