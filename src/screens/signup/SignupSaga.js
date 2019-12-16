import {put, takeLatest} from 'redux-saga/effects';
import * as types from './SignupActions';

export function* handleAttemptSignup(action) {
  yield put(types.attemptSignupProgress());
  //perform work logic
}

export function* watchAttemptSignup() {
  yield takeLatest(types.ATTEMT_SIGNUP, handleAttemptSignup);
}
