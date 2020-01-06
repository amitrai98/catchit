import React, {Component} from 'react';
import {View, Text, StyleSheet, Linking, ToastAndroid} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showQrCode} from './ShowqrActions';
import AppHeader from '../../header/AppHeader';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera, FaceDetector} from 'react-native-camera';
import CameraScreen from './CameraScreen';
import Hotspotmanager from 'react-native-hotspotmanager';
import {getUniqueGroupName} from '../../util/Utility';

export class ShowQr extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(`${getUniqueGroupName()}`);
  }

  render() {
    return (
      <View>
        <AppHeader title={`Show QR`} />
        <View style={{alignSelf: 'center', margin: 100}}>
          <QRCode value="https://github.com/amitrai98" />

          {/* <CameraScreen /> */}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {isFetching, error, data, success, failure} = state.ShowqrReducer;
  return {
    isFetching,
    error,
    data,
    success,
    failure,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showQrCode: bindActionCreators(showQrCode, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowQr);
const styles = StyleSheet.create({
  container: {},
});
