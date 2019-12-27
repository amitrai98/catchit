import {all} from 'redux-saga/effects';
import {watchAttemptLoginRequest} from '../screens/login/LoginSaga';
import {watchLoadHomeReducer} from '../screens/home/HomeSaga';
import {watchAttemptSignup} from '../screens/signup/SignupSaga';
import {watchSelectFileRequest} from '../screens/sharedata/SharedataSaga';
import {watchShowQrCodeRequst} from '../screens/showqr/ShowqrSaga';
import {watchQrScanRequest} from '../screens/scanqr/ScanqrSaga';
import {watchDiscoverPeersRequest} from '../screens/connectionmanager/ConnectionManagerSaga';

export default function* rootSaga() {
  yield all([
    watchAttemptLoginRequest(),
    watchLoadHomeReducer(),
    watchAttemptSignup(),
    watchSelectFileRequest(),
    watchShowQrCodeRequst(),
    watchQrScanRequest(),
    watchDiscoverPeersRequest(),
  ]);
}
