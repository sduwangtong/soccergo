import {FETCH_MATCHES, UPDATE_MATCH} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MATCHES:
    case UPDATE_MATCH:
      return [...state, ...action.payload];
  }

  return state;
}
