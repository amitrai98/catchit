import {all} from 'redux-saga/effects';
import {watchAttemptLoginRequest} from '../screens/login/LoginSaga';
import {watchLoadHomeReducer} from '../screens/home/HomeSaga';
import {watchAttemptSignup} from '../screens/signup/SignupSaga';

export default function* rootSaga() {
  yield all([
    watchAttemptLoginRequest(),
    watchLoadHomeReducer(),
    watchAttemptSignup(),
  ]);
}
