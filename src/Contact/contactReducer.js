import * as types from '../constants/actionTypes';

// Handle Contact related actions

const contactReducer = (state = {}, action) => {
  switch (action.type) {
    case types.PUT_CONTACT_FORM_SUCCESS:
      return {
        ...state,
        dbInfo: true,
      };
    case types.PUT_CONTACT_FORM_ERROR:
      return {
        ...state,
        dbInfo: 'error',
      };
    default:
      return state;
  }
};

export default contactReducer;
