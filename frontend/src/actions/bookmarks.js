import axios from 'axios';
import { ROOT_URL } from '../helpers/constants';

// Action Types
// ==================

// Bookmarks List
export const FETCH_BOOKMARKS = 'FETCH_BOOKMARKS';
export const FETCH_BOOKMARKS_SUCCESS = 'FETCH_BOOKMARKS_SUCCESS';
export const FETCH_BOOKMARKS_FAILURE = 'FETCH_BOOKMARKS_FAILURE';
export const RESET_BOOKMARKS = 'RESET_BOOKMARKS';

// Create bookmark
export const CREATE_BOOKMARK = 'CREATE_BOOKMARK';
export const CREATE_BOOKMARK_SUCCESS = 'CREATE_BOOKMARK_SUCCESS';
export const CREATE_BOOKMARK_FAILURE = 'CREATE_BOOKMARK_FAILURE';
export const RESET_NEW_BOOKMARK = 'RESET_NEW_BOOKMARK';

// Update bookmark
export const UPDATE_BOOKMARK = 'UPDATE_BOOKMARK';
export const UPDATE_BOOKMARK_SUCCESS = 'UPDATE_BOOKMARK_SUCCESS';
export const UPDATE_BOOKMARK_FAILURE = 'UPDATE_BOOKMARK_FAILURE';
export const RESET_UPDATE_BOOKMARK = 'RESET_UPDATE_BOOKMARK';

// Create bookmark
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK';
export const DELETE_BOOKMARK_SUCCESS = 'DELETE_BOOKMARK_SUCCESS';
export const DELETE_BOOKMARK_FAILURE = 'DELETE_BOOKMARK_FAILURE';
export const RESET_DELETED_BOOKMARK = 'RESET_DELETED_BOOKMARK';


// Action Creators
// ==================


export function fetchBookmarks(tokenFromStorage) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/bookmarks`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  })

  return {
    type: FETCH_BOOKMARKS,
    payload: request
  }
}

export function fetchBookmarksSuccess(bookmarks) {
  return {
    type: FETCH_BOOKMARKS_SUCCESS,
    payload: bookmarks
  }
}

export function fetchBookmarksFailure(error) {
  return {
    type: FETCH_BOOKMARKS_FAILURE,
    payload: error
  }
}

export function resetBookmarks() {
  return {
    type: RESET_BOOKMARKS
  }
}

//

export function createBookmark(props, tokenFromStorage) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/bookmarks`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`,
      'Content-Type': `application/json`
    }
  })

  return {
    type: CREATE_BOOKMARK,
    payload: request
  }
}

export function createBookmarkSuccess(bookmark) {
  return {
    type: CREATE_BOOKMARK_SUCCESS,
    payload: bookmark
  }
}

export function createBookmarkFailure(error) {
  return {
    type: CREATE_BOOKMARK_FAILURE,
    payload: error
  }
}

export function resetNewBookmark() {
  return {
    type: RESET_NEW_BOOKMARK
  }
}

//

export function updateBookmark(id, type, tokenFromStorage) {
  const request = axios({
    method: 'put',
    url: `${ROOT_URL}/bookmarks/${id}`,
    data: type,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`,
      'Content-Type': 'application/json'
    }
  })

  return {
    type: UPDATE_BOOKMARK,
    payload: request
  }
}

export function updateBookmarkSuccess(bookmark) {
  return {
    type: UPDATE_BOOKMARK_SUCCESS,
    payload: bookmark
  }
}

export function updateBookmarkFailure(error) {
  return {
    type: UPDATE_BOOKMARK_FAILURE,
    payload: error
  }
}

export function resetUpdateBookmark() {
  return {
    type: RESET_UPDATE_BOOKMARK
  }
}

//

export function deleteBookmark(id, tokenFromStorage) {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/bookmarks/${id}`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  })

  return {
    type: DELETE_BOOKMARK,
    payload: request
  }
}

export function deleteBookmarkSuccess(bookmark) {
  return {
    type: DELETE_BOOKMARK_SUCCESS,
    payload: bookmark
  }
}

export function deleteBookmarkFailure(error) {
  return {
    type: DELETE_BOOKMARK_FAILURE,
    payload: error
  }
}

export function resetDeleteBookmark() {
  return {
    type: RESET_DELETED_BOOKMARK
  }
}