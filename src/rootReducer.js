import { combineReducers } from 'redux';
import forms from './Contact/contactReducer';

// Combine reducers (only one for now)
const rootReducer = combineReducers({
  forms
});

export default rootReducer;
