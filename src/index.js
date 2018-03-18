import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/app';
import Resources from './components/resources';
import requireAuth from './components/require_authentication'
import { Provider } from 'react-redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Welcome from './components/welcome'
import {AUTH_USER} from './actions/types';

// we need to update application state before render
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
if(token) {
  store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome}/>
        <Route path="signin" component={Signin} />
        <Route path="resources" component={requireAuth(Resources)} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
