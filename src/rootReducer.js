import { combineReducers } from 'redux';
import stats from './Contact/contactReducer';

// Combine reducers (only one for now)
const rootReducer = combineReducers({
  stats
});

export default rootReducer;
