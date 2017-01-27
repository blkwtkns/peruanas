import { takeLatest } from 'redux-saga/effects';
import { putFormSaga } from './contactSaga';
import * as types from '../constants/actionTypes';

// Watches for PUT_CONTACT_FORM action type asynchronously
export default function* watchPutForm(){
  yield* takeLatest(types.PUT_CONTACT_FORM, putFormSaga);
}
