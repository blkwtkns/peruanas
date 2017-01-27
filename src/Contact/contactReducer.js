import initialState from '../store/initialState';
import * as types from '../constants/actionTypes';

// Handle Contact related actions

export default function (state = initialState, action){
  switch(action.type){
    case types.PUT_CONTACT_FORM_SUCCESS:
      return [...state, action.payload];
    case types.PUT_CONTACT_FORM_ERROR:
      return [...state, action.payload];
    default: 
      return state;
  }
}
