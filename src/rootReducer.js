import { combineReducers } from 'redux';
import contactReducer from './Contact/contactReducer';

// DO NOT USE UNLESS THERE ARE MULTIPLE REDUCERS
// Combine reducers 
const rootReducer = combineReducers({
  contactReducer
});

export default rootReducer;
