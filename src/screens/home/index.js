import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  Easing,
  ToastAndroid,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadHome} from './HomeActions';
import AppHeader from '../../header/AppHeader';
import HotspotConfigurator from './homecomp/HotspotConfigurator';
import Hotspotmanager from 'react-native-hotspotmanager';

export class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
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
    Hotspotmanager.peersList(
      data => {
        const peers = JSON.parse(data);
        ToastAndroid.show(JSON.stringify(peers), ToastAndroid.SHORT);
      },
      err => {
        ToastAndroid.show(err.toString(), ToastAndroid.SHORT);
      },
    );
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 8000,
      easing: Easing.linear,
    }).start(() => this.spin());
  }

  showQR() {
    this.props.navigation.navigate('showQr');
  }

  scanQR() {
    this.props.navigation.navigate('scanQr');
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={{flex: 1}}>
        <AppHeader title={'Home'} />
        <HotspotConfigurator
          enableHotspot={() => this.enableHotSpot()}
          enableHotspotWithConfig={() => this.enableHotSpotWithConfig()}
          fetchPeerList={() => this.fetchPeerList()}
          disableHotspot={() => this.disableHotSpot()}
          showQR={() => this.showQR()}
          scanQR={() => {
            this.scanQR();
          }}
        />

        {/* <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            borderColor: 'red',
            borderwidth: 5,
            padding: 5,
            margin: 4,
            flex: 1,
            backgroundColor: 'transparent',
          }}>
          <Animated.View
            style={{
              width: 407,
              height: 200,
              transform: [{rotate: spin}],
              justifyContent: 'center',
            }}>
            <Radar speed={90} />
          </Animated.View>
        </View> */}
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {isFetching, error, data, success, failure} = state.HomeReducer;
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
    loadHome: bindActionCreators(loadHome, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(home);
const styles = StyleSheet.create({
  container: {},
});
