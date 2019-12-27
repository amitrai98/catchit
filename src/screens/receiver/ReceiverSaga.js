import {put, takeLatest} from 'redux-saga/effects';
import * as types from './ReceiverActions';

export function* handleInitiateRecieverAction(action) {
  yield put(types.INTIATE_RECEIVER_INPROGRESS());
  //perform work logic
}

export function* watchIntiateReceiverRequest() {
  yield takeLatest(types.INTIATE_RECEIVER, handleInitiateRecieverAction);
}
