import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectFile} from './SharedataActions';
import AppHeader from '../../header/AppHeader';
import SelectedItem from './sharedataconmponents/SelectedItem';
import FileBrowser from './sharedataconmponents/FileBrowser';

export class ShareData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemList: [{name: 'abra'}],
      selectFile: false,
    };
  }

  showFileBrowser() {
    return (
      <FileBrowser
        filesSelected={selectedFileArray => {
          console.log(`list of files selected`);
        }}
        canceled={() => {
          console.log(`canceled File selection`);
        }}
      />
    );
  }

  showSelectedFiles() {
    const {selectedItemList} = this.state;
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={selectedItemList}
          renderItem={({item, index}) => <SelectedItem item={item} />}
        />
        <TouchableOpacity
          onPress={() => {
            this.setState({selectFile: true});
          }}
          style={{
            alignContent: 'flex-end',
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: 'red',
            position: 'absolute',
            right: 0,
            bottom: 0,
            margin: 10,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              color: 'white',
              fontSize: 33,
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const {selectFile} = this.state;
    return (
      <View style={{flex: 1}}>
        <AppHeader title={`Share Data`} />
        <View style={{flex: 1}}>
          {selectFile ? this.showFileBrowser() : this.showSelectedFiles()}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {isFetching, error, data, success, failure} = state.SharedataReducer;
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
