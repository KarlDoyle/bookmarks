import { combineReducers } from 'redux';
import bookmarks from './bookmarks';
import session from './session';
import alert from './alert';
const bookmarkApp = combineReducers({alert, bookmarks, session})

export default bookmarkApp;