import {SAVE_COMMENT, FETCH_USERS, AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_REG_USERS} from './types';
import axios from 'axios';
import {browserHistory} from 'react-router';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
};

export function authenticate(isLoggedIn){
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
};

export function fetchUsers() {
  const request = axios.get('https://jsonplaceholder.typicode.com/users');
  return {
    type: FETCH_USERS,
    payload: request
  }
}

const ROOT_URL = 'http://localhost:3090';
export function signinUser({email, password}) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email, password})
    .then(response => {
      dispatch({type : AUTH_USER});
      // save the JwtlocalStorage
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/resources');
    })
    .catch(() => {
      // if request is bad, show error
      dispatch(authError('Bad Login'));
    })
  }
}

export function signupUser({email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email, password})
    .then(response => {
      dispatch({type : AUTH_USER});
      // save the JwtlocalStorage
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/resources');
    })
    .catch((response) => {
      // TODO add response.data.error to authError();
      dispatch(authError('something wrong, please try again with differe username'));
    });
  }
}

export function signoutUser() {
  localStorage.removeItem('token');

  return {type : UNAUTH_USER};
}

export function authError(error) {
  return {
    type : AUTH_ERROR,
    payload: error
  }
}

export function fetchRegisteredUsers() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers : {
        authorization : localStorage.getItem('token')
      }
    })
    .then(response =>{
      dispatch({
        type : FETCH_REG_USERS,
        payload : response.data.message
      });
    });
  }
}
