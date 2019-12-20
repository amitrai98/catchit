import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectFile} from './SharedataActions';

export class ShareData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>hello from ShareData</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {isFetching, error, data, success, failure} = state.ShareDataReducer;
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
    selectFile: bindActionCreators(selectFile, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareData);
const styles = StyleSheet.create({
  container: {},
});
