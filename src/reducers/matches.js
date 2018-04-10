import {FETCH_MATCHES} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MATCHES:
      return [...state, ...action.payload.data];
  }

  return state;
}
