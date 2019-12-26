import React, {Component} from 'react';
import {View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showQrCode} from './ShowqrActions';
import AppHeader from '../../header/AppHeader';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera, FaceDetector} from 'react-native-camera';
import CameraScreen from './CameraScreen';

export class ShowQr extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  render() {
    return (
      <View>
        <AppHeader title={`Show QR`} />
        <View style={{alignSelf: 'center', margin: 100}}>
          {/* <QRCode value="https://github.com/amitrai98" /> */}

          {/* <CameraScreen /> */}
          <QRCodeScanner
            onRead={this.onSuccess.bind(this)}
            topContent={
              <Text style={styles.centerText}>
                Go to{' '}
                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{' '}
                on your computer and scan the QR code.
              </Text>
            }
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>OK. Got it!</Text>
              </TouchableOpacity>
            }
          />
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
