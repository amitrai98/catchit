import {put, takeLatest} from 'redux-saga/effects';
import * as types from './SharedataActions';

export function* handleSelectFile(action) {
  yield put(types.selectFileProgress());
  //perform work logic
}

export function* watchSelectFileRequest() {
  yield takeLatest(types.SELECT_FILE, handleSelectFile);
}
