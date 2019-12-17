import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Image, Easing} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadHome} from './HomeActions';
import AppHeader from '../../header/AppHeader';
import Radar from './homecomp/Radar';

export class home extends Component {
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

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={{flex: 1}}>
        <AppHeader title={'Home'} />

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
