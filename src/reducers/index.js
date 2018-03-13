import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import commentsReducer from './comments';
import usersReducer from './users';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  comments: commentsReducer,
  users: usersReducer,
  form : formReducer
});

export default rootReducer;
