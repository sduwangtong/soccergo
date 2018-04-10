import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import commentsReducer from './comments';
import matchReducer from './matches';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  comments: commentsReducer,
  matches: matchReducer,
  form : formReducer
});

export default rootReducer;
