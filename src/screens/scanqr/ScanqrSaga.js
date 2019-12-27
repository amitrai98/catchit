import {put, takeLatest} from 'redux-saga/effects';
import * as types from './ScanqrActions';

export function* handleQrCodeScanRequest(action) {
  yield put(types.startQrScannerProgress());
  //perform work logic
}

export function* watchQrScanRequest() {
  yield takeLatest(types.STARTSCANER, handleQrCodeScanRequest);
}
