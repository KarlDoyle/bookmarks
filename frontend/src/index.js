import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { loadState, saveState } from './helpers/localStorage';
import './assets/index.css';
import routes from './routes';
import configureStore from './store';

const persistedState = loadState();
const store = configureStore(persistedState);

store.subscribe(() => {
  if (process.env.NODE_ENV !== 'production' || (location && location.hostname === 'localhost')) {
    console.log(store.getState())
  }
  saveState({
    session: store.getState().session
  })
})

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
), document.getElementById('root'))