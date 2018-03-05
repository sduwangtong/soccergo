import React from 'react';
import ReactDOM from 'react-dom';


import {Router, Route, browserHistory} from 'react-router';

import App from './components/app';
import Resources from './components/resources';
import requireAuth from './components/require_authentication'

import { Provider } from 'react-redux';
import reducers from './reducers';
import Asyn from './middlewares/async';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware(Asyn)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="resources" component={requireAuth(Resources)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
