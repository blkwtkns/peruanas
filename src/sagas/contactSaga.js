import { put, call } from 'redux-saga/effects';
import { putRaicesForm } from '../Api/api';
import * as types from '../constants/actionTypes';

// Responsible for making PUT request to AWS API gateway
// and then instructing the saga middleware on the next line of action,
// for success or failure
export function* putFormSaga({ payload }){
  console.log('putFormSaga triggered')
  while(true){
    try {
      const status = yield call(putRaicesForm, payload);
      yield [
        put({ type: types.PUT_CONTACT_FORM_SUCCESS, status})
      ];
    } catch(error){
        put({ type: types.PUT_CONTACT_FORM_ERROR, status})
    }
  }
}
