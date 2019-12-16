import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {attemptSignup} from './SignupActions';
type Props = {};

export class signUp extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>hello from signup</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {isFetching, error, data, success, failure} = state.SignupReducer;
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
    attemptSignup: bindActionCreators(attemptSignup, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(signUp);
const styles = StyleSheet.create({
  container: {},
});
