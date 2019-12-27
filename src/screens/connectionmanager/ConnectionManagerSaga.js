import {put, takeLatest} from 'redux-saga/effects';
import * as types from './ConnectionManagerActions';

export function* handleDiscoverPeerRequest(action) {
  yield put(types.discoverPeersProgress());
  //perform work logic
}

export function* watchDiscoverPeersRequest() {
  yield takeLatest(types.DISCOVER_PEERS, handleDiscoverPeerRequest);
}
