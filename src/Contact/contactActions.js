import * as types from '../constants/actionTypes';

// Returns action type and PUT_FORM
export const putFormAction = (payload) => ({
  type: types.PUT_CONTACT_FORM_SUCCESS,
  payload
})
