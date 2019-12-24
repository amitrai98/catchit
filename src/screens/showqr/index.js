import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showQrCode} from './ShowqrActions';
import AppHeader from '../../header/AppHeader';

export class ShowQr extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <AppHeader title={`Show QR`} />
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
