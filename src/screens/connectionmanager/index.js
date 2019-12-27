import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {discoverPeers} from './ConnectionManagerActions';
import AppHeader from '../../header/AppHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Thumbnail from '../common/Thumbnail';
import {upload} from '../../assets/icons/upload.png';
import images from '../../assets/images';

export class ConnectionManager extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  initiateSender() {
    this.props.navigation.navigate('sheareData');
  }

  initiateReceiver() {
    this.props.navigation.navigate('receiver');
  }

  render() {
    return (
      <View>
        <AppHeader title={`Connect`} />

        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            paddingVertical: 20,
            justifyContent: 'space-evenly',
            alignContent: 'center',
          }}>
          <Thumbnail
            onPress={() => this.initiateSender()}
            imageuri={images.upload}
            text={`Send Data`}
          />
          <Thumbnail
            onPress={() => this.initiateReceiver()}
            imageuri={images.download}
            text={`Receive Data`}
            thbg={'transparent'}
          />
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
