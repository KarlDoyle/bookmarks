import {
  FETCH_BOOKMARKS, FETCH_BOOKMARKS_SUCCESS, FETCH_BOOKMARKS_FAILURE, RESET_BOOKMARKS,
  CREATE_BOOKMARK, CREATE_BOOKMARK_SUCCESS, CREATE_BOOKMARK_FAILURE,
  UPDATE_BOOKMARK, UPDATE_BOOKMARK_SUCCESS, UPDATE_BOOKMARK_FAILURE,
  DELETE_BOOKMARK, DELETE_BOOKMARK_SUCCESS, DELETE_BOOKMARK_FAILURE
} from '../actions/bookmarks';

const INITIAL_STATE = {
  bookmarks: [], error: null, loading: false
};

const bookmarks = (state = INITIAL_STATE, action) => {
  let error, updatedList;
  switch(action.type) {

    case FETCH_BOOKMARKS:
      return { bookmarks: [], error: null, loading: true };

    case FETCH_BOOKMARKS_SUCCESS:
      return { bookmarks: action.payload, error: null, loading: false };

    case FETCH_BOOKMARKS_FAILURE:
      error = action.payload || {message: action.payload.message};
      return { bookmarks: [], error: error, loading: false };

    case RESET_BOOKMARKS:
      return { bookmarks: [], error: null, loading: false };


    case CREATE_BOOKMARK:
      return { ...state, loading: true };

    case CREATE_BOOKMARK_SUCCESS:
      updatedList = [action.payload.data, ...state.bookmarks.slice()]
      return { bookmarks: updatedList, error: null, loading: false };

    case CREATE_BOOKMARK_FAILURE:
      error = action.payload || {message: action.payload.message};
      return { ...state, error: error, loading: false };

    case UPDATE_BOOKMARK:
      return { ...state, error: null, loading: true };

    case UPDATE_BOOKMARK_SUCCESS:
      updatedList = state.bookmarks.map((item, index) => {
        return (item.id === action.payload.id) ? action.payload : item;
      })
      return { bookmarks: updatedList, error: null, loading: false };

    case UPDATE_BOOKMARK_FAILURE:
      error = action.payload || {message: action.payload.message};
      return { ...state, error: error, loading: false };

    case DELETE_BOOKMARK:
      return { ...state, error: null, loading: true };

    case DELETE_BOOKMARK_SUCCESS:
      updatedList = state.bookmarks.filter((item) => item.id !== action.payload)
      return { bookmarks: updatedList, error: null, loading: false };

    case DELETE_BOOKMARK_FAILURE:
      error = action.payload || {message: action.payload.message};
      return { ...state, error: error, loading: false };

    default:
      return state

  }
}

export default bookmarks;