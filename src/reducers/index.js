import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import commentsReducer from './comments';
import usersReducer from './users'

const rootReducer = combineReducers({
  authenticated: authenticationReducer,
  comments: commentsReducer,
  users: usersReducer
});

export default rootReducer;
