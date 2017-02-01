import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import contactReducer from './Contact/contactReducer';

// DO NOT USE UNLESS THERE ARE MULTIPLE REDUCERS
// Combine reducers 
export default combineReducers({
  contactReducer,
  routing: routerReducer
});
