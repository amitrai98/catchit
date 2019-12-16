import {put, takeLatest} from 'redux-saga/effects';
import * as types from './HomeActions';

export function* handleLoadHome(action) {
  yield put(types.loadHomeProgress());
  //perform work logic
}

export function* watchLoadHomeReducer() {
  yield takeLatest(types.LOAD_HOME, handleLoadHome);
}
