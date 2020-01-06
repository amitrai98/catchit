import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {discoverPeers} from './ConnectionManagerActions';
import AppHeader from '../../header/AppHeader';
import Thumbnail from '../common/Thumbnail';
import images from '../../assets/images';
import CryptoJS from 'react-native-crypto-js';

export class ConnectionManager extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  initiateSender() {
    // this.props.navigation.navigate('showQr');

    // Encrypt
    let ciphertext = CryptoJS.AES.encrypt(
      'my IMPORTANT message',
      'secret key 123',
    ).toString();
    console.log(ciphertext); // 'my message'

    // Decrypt
    let bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    let originalText = bytes.toString(CryptoJS.enc.Utf8);

    console.log(originalText); // 'my message'
  }

  initiateReceiver() {
    this.props.navigation.navigate('receiver');
  }

  render() {
    return (
      <View style={{backgroundColor: 'rgb(229,229,229)', flex: 1}}>
        <AppHeader title={`Connect`} />

        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            justifyContent: 'space-evenly',
            alignContent: 'center',
          }}>
          <View style={{backgroundColor: 'white'}}>
            <Thumbnail
              onPress={() => this.initiateSender()}
              imageuri={images.upload}
              text={`Send Data`}
              thbg={'transparent'}
            />
          </View>

          <View style={{backgroundColor: 'white'}}>
            <Thumbnail
              onPress={() => this.initiateReceiver()}
              imageuri={images.download}
              text={`Receive Data`}
              thbg={'transparent'}
            />
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {
    isFetching,
    error,
    data,
    success,
    failure,
  } = state.ConnectionManagerReducer;
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
    discoverPeers: bindActionCreators(discoverPeers, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionManager);
const styles = StyleSheet.create({
  container: {},
});
