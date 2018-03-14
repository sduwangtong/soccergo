import React from 'react';
import ReactDOM from 'react-dom';


import {Router, Route, browserHistory} from 'react-router';

import App from './components/app';
import Resources from './components/resources';
import requireAuth from './components/require_authentication'

import { Provider } from 'react-redux';
import reducers from './reducers';
//import Asyn from './middlewares/async';
import reduxThunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin} />
        <Route path="resources" component={requireAuth(Resources)} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
