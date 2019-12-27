import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {initiateReceiver} from './ReceiverActions';
import Radar from './receivercomponents/Radar';

export class Receiver extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.spinValue = new Animated.Value(0);
  }
  componentDidMount() {
    this.spin();
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
    console.log(`start scan`);
  }
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity onpres={() => this.scanQR()}>
          <Text
            style={{
              paddingHorizontal: 10,
              paddingVertical: 6,
              backgroundColor: 'green',
              color: 'white',
              alignSelf: 'flex-end',
              borderRadius: 10,
              margin: 10,
            }}>
            Scan Qr
          </Text>
        </TouchableOpacity>
        <View
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
        </View>
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
