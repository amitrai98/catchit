import {put, takeLatest} from 'redux-saga/effects';
import * as types from './ShowqrActions';

export function* handleShowQrRequest(action) {
  yield put(types.SHOWQRCODE());
  //perform work logic
}

export function* watchShowQrCodeRequst() {
  yield takeLatest(types.SHOWQRCODE, handleShowQrRequest);
}
