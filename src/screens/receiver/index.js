import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
  Button,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {initiateReceiver} from './ReceiverActions';
import Radar from './receivercomponents/Radar';
import * as p2p from 'react-native-wifi-p2p';
import {PermissionsAndroid} from 'react-native';

export class Receiver extends Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
    this.state = {devices: []};
  }
  componentDidMount() {
    this.spin();
    try {
      p2p.initialize();
      p2p.isSuccessfulInitialize().then(status => {
        console.log('Sucessfull init');
        console.log(status);
      });
      p2p
        .startDiscoveringPeers()
        .then(() => {
          console.log('Sucessfull');
          console.log('Sucessfull while init');
        })
        .catch(err => {
          console.log(`err in init`);
          console.log(err);
        });

      p2p.subscribeOnPeersUpdates(({devices}) => this.handleNewPeers(devices));
      p2p.subscribeOnConnectionInfoUpdates(this.handleNewInfo);
    } catch (error) {
      console.log(`there is an error ${error}`);
    }
  }

  componentWillUnmount() {
    p2p.unsubscribeFromConnectionInfoUpdates(event =>
      console.log('unsubscribeFromConnectionInfoUpdates', event),
    );
    p2p.unsubscribeFromPeersUpdates(event =>
      console.log('unsubscribeFromPeersUpdates', event),
    );
  }

  handleNewInfo = (info, sceondParam) => {
    console.log(64646776467, info);
  };

  handleNewPeers = peers => {
    console.log(754862162442324, peers);
    this.setState({devices: peers});
  };

  connectToFirstDevice = () => {
    console.log(this.state.devices[0]);
    p2p
      .connect(this.state.devices[0].deviceAddress)
      .then(() => console.log('Successfully connected'))
      .catch(err => console.error('Something gone wrong. Details: ', err));
  };

  disconnectFromDevice = () => {
    p2p
      .disconnect()
      .then(() => console.log('Successfully disconnected'))
      .catch(err => console.error('Something gone wrong. Details: ', err));
  };

  onCreateGroup = () => {
    p2p
      .createGroup()
      .then(() => console.log('Group created successfully!'))
      .catch(err => console.error('Something gone wrong. Details: ', err));
  };

  onRemoveGroup = () => {
    p2p
      .removeGroup()
      .then(() => console.log("Currently you don't belong to group!"))
      .catch(err => console.error('Something gone wrong. Details: ', err));
  };

  onStopInvestigation = () => {
    p2p
      .stopDiscoveringPeers()
      .then(() => console.log('Stopping of discovering was successful'))
      .catch(err =>
        console.error(
          `Something is gone wrong. Maybe your WiFi is disabled? Error details`,
          err,
        ),
      );
  };

  onStartInvestigate = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: 'Access to wi-fi P2P mode',
        message: 'ACCESS_COARSE_LOCATION',
      },
    )
      .then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the p2p mode');
        } else {
          console.log('Permission denied: p2p mode will not work');
        }
      })
      .then(() => p2p.startDiscoveringPeers())
      .then(() => console.log(`Peers searching started`))
      .catch(err =>
        console.error(
          `Something is gone wrong. Maybe your WiFi is disabled? Error details: ${err}`,
        ),
      );
  };

  onGetAvailableDevices = () => {
    p2p.getAvailablePeers().then(peers => console.log(peers));
  };

  onSendFile = () => {
    //const url = '/storage/sdcard0/Music/Rammstein:Amerika.mp3';
    const url =
      '/storage/emulated/0/Music/Bullet For My Valentine:Letting You Go.mp3';
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Access to read',
        message: 'READ_EXTERNAL_STORAGE',
      },
    )
      .then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
        } else {
          console.log('Camera permission denied');
        }
      })
      .then(() => {
        return PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Access to write',
            message: 'WRITE_EXTERNAL_STORAGE',
          },
        );
      })
      .then(() => {
        return p2p
          .sendFile(url)
          .then(() => console.log('File sent successfully'))
          .catch(err => console.log('Error while file sending', err));
      })
      .catch(err => console.log(err));
  };

  onReceiveFile = () => {
    p2p
      .receiveFile()
      .then(() => console.log('File received successfully'))
      .catch(err => console.log('Error while file receiving', err));
  };

  onGetConnectionInfo = () => {
    p2p.getConnectionInfo().then(info => console.log(info));
  };

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

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 8000,
      easing: Easing.linear,
    }).start(() => this.spin());
  }

  scanQR() {
    this.props.navigation.navigate('scanQr');
  }
  render() {
    const {devices} = this.state;
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      // <View style={{flex: 1, justifyContent: 'center'}}>
      //   <TouchableOpacity onPress={() => this.scanQR()}>
      //     <Text
      //       style={{
      //         paddingHorizontal: 10,
      //         paddingVertical: 6,
      //         backgroundColor: 'green',
      //         color: 'white',
      //         alignSelf: 'flex-end',
      //         borderRadius: 10,
      //         margin: 10,
      //       }}>
      //       Scan Qr
      //     </Text>
      //   </TouchableOpacity>
      //   <View
      //     style={{
      //       justifyContent: 'center',
      //       alignContent: 'center',
      //       borderColor: 'red',
      //       borderwidth: 5,
      //       padding: 5,
      //       margin: 4,
      //       flex: 1,
      //       backgroundColor: 'transparent',
      //     }}>
      //     <Animated.View
      //       style={{
      //         width: 407,
      //         height: 200,
      //         transform: [{rotate: spin}],
      //         justifyContent: 'center',
      //       }}>
      //       <Radar speed={90} />
      //     </Animated.View>
      //     <Text
      //       style={{
      //         alignSelf: 'center',
      //         marginTop: 200,
      //       }}>{`${devices.length}  devices`}</Text>
      //   </View>
      // </View>

      <View style={styles.container}>
        <Button title="Connect" onPress={this.connectToFirstDevice} />
        <Button title="Disconnect" onPress={this.disconnectFromDevice} />
        <Button title="Create group" onPress={this.onCreateGroup} />
        <Button title="Remove group" onPress={this.onRemoveGroup} />
        <Button title="Investigate" onPress={this.onStartInvestigate} />
        <Button
          title="Prevent Investigation"
          onPress={this.onStopInvestigation}
        />
        <Button
          title="Get Available Devices"
          onPress={this.onGetAvailableDevices}
        />
        <Button
          title="Get connection Info"
          onPress={this.onGetConnectionInfo}
        />
        <Button title="Send file" onPress={this.onSendFile} />
        <Button title="Receive file" onPress={this.onReceiveFile} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {isFetching, error, data, success, failure} = state.ReceiverReducer;
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
    initiateReceiver: bindActionCreators(initiateReceiver, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Receiver);
const styles = StyleSheet.create({
  container: {},
});
