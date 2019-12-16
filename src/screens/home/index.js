import React, {Component} from 'react';
import {View, Text, StyleSheet, ToastAndroid} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadHome} from './HomeActions';
import AppHeader from '../../header/AppHeader';

export class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View>
        <AppHeader title={'Home'} />
        <Text>hello from home</Text>
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
