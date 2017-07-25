import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { loadState } from './helpers/localStorage';
// import decodeJWT from './helpers/decodeJWT';
import App from './scenes/App'
import Home from './scenes/Home';
import configureStore from './store';

const persistedState = loadState();
configureStore(persistedState);


// const redirectNonUser = (nextState, replace) => {
//   let decodedToken = decodeJWT(loadState().session.token)
//   let dateNow = new Date();
//   let expired = (decodedToken.exp > dateNow.getTime())
//   let authedUser = (loadState().session.isAuthenticated === false);
//   let validUser = (decodedToken.identity.email !== loadState().session.user.email);
//   if (authedUser || expired || validUser) {
//     replace({pathname: '/home'});
//   }
// };

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/home" component={Home} />
    {/*<Route path="/account" component={Account} onEnter={redirectNonUser} />*/}
  </Route>
)