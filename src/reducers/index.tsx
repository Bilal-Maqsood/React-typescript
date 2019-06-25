import { combineReducers } from 'redux'
import UsersReducer from '../containers/Users/reducer';
import ReposReducer from '../containers/Repos/reducer';

export default combineReducers({
  UsersReducer,
  ReposReducer
});