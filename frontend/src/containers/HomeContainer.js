import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { fetchBookmarks, fetchBookmarksSuccess, fetchBookmarksFailure } from '../actions/bookmarks';
import { deleteBookmark, deleteBookmarkSuccess, deleteBookmarkFailure } from '../actions/bookmarks';
import { updateBookmark, updateBookmarkSuccess, updateBookmarkFailure } from '../actions/bookmarks';
import { logoutUser } from '../actions/auth';
import { loadState } from '../helpers/localStorage';

import Home from '../components/Home';

const mapStateToProps = (state) => {
  return {
    bookmarkList: state.bookmarks.bookmarks
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchBookmarks: () => {
      const token = loadState().session.token;
      if (!loadState()) return;
      dispatch(fetchBookmarks(token)).then((response) => {
          console.log(response)
          if (!response.error) {
            dispatch(fetchBookmarksSuccess(response.payload.data))
          } else {
            dispatch(fetchBookmarksFailure(response.error))
            if (response.payload.response.status === 401) {
              dispatch(logoutUser())
              if (hashHistory.getCurrentLocation().pathname !== '/home') {
                hashHistory.push('/home')
              }
            }
          }
      })
    },
    deleteBookmark: (event, bookmarkId) => {
      event.preventDefault();
      const token = loadState().session.token;
      if (!loadState()) return;
      dispatch(deleteBookmark(bookmarkId, token)).then((response) => {
          if (!response.error) {
            dispatch(deleteBookmarkSuccess(response.payload.data))
          } else {
            dispatch(deleteBookmarkFailure(response.error))
            if (response.payload.response && response.payload.response.status === 401) {
              dispatch(logoutUser())
              if (hashHistory.getCurrentLocation().pathname !== '/home') {
                hashHistory.push('/home')
              }
            }
          }
      })
    },
    updateBookmark: (event, bookmarkId, type) => {
      event.preventDefault();
      const token = loadState().session.token;
      if (!loadState()) return;
      dispatch(updateBookmark(bookmarkId, type, token)).then((response) => {
          if (!response.error) {
            dispatch(updateBookmarkSuccess(response.payload.data))
          } else {
            dispatch(updateBookmarkFailure(response.error))
            if (response.payload.response.status === 401) {
              dispatch(logoutUser())
              if (hashHistory.getCurrentLocation().pathname !== '/home') {
                hashHistory.push('/home')
              }
            }
          }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);