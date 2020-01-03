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

export class ShowQr extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    try {
      this.enableHotSpot();
    } catch (error) {
      console.log(`there is an error ${error}`);
    }
  }

  enableHotSpot() {
    Hotspotmanager.enable(
      () => {
        ToastAndroid.show('Hotspot Enabled', ToastAndroid.SHORT);
      },
      err => {
        ToastAndroid.show(err.toString(), ToastAndroid.SHORT);
      },
    );
  }

  enableHotSpotWithConfig() {
    const hotspot = {
      SSID: 'ASSEM',
      password: 'helloworld',
      authAlgorithms: Hotspotmanager.auth.OPEN,
      protocols: Hotspotmanager.protocols.WPA,
    };
    Hotspotmanager.create(
      hotspot,
      () => {
        ToastAndroid.show('Hotspot enstablished', ToastAndroid.SHORT);
      },
      err => {
        ToastAndroid.show(err.toString(), ToastAndroid.SHORT);
      },
    );
  }

  fetchHotspotConfig() {
    // config: {
    //   ssid: string,
    //   password: string,
    //   status: boolean ( true means enable, false means disable )
    //   networkId: Int
    // }
    Hotspotmanager.getConfig(
      config => {
        ToastAndroid.show('Hotspot SSID: ' + config.ssid, ToastAndroid.SHORT);
      },
      err => {
        ToastAndroid.show(err.toString(), ToastAndroid.SHORT);
      },
    );
  }

  disableHotSpot() {
    Hotspotmanager.disable(
      () => {
        ToastAndroid.show('Hotspot Disabled', ToastAndroid.SHORT);
      },
      err => {
        ToastAndroid.show(err.toString(), ToastAndroid.SHORT);
      },
    );
  }

  fetchPeerList() {
    // data: [
    //   results: {
    //     ip: 192.168.x.x,
    //     mac: A3:76:E1:33:79:F3,
    //     device: number
    //   }
    // ]
    this.props.navigation.navigate('connectionManager');
    // Hotspotmanager.peersList(
    //   data => {
    //     const peers = JSON.parse(data);
    //     ToastAndroid.show(JSON.stringify(peers), ToastAndroid.SHORT);
    //   },
    //   err => {
    //     ToastAndroid.show(err.toString(), ToastAndroid.SHORT);
    //   },
    // );
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
