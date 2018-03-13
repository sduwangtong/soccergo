import {SAVE_COMMENT, CHANGE_AUTH, FETCH_USERS, AUTH_USER, AUTH_ERROR} from './types';
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


export function authError(error) {
  return {
    type : AUTH_ERROR,
    payload: error
  }
}
