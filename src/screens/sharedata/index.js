import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectFile} from './SharedataActions';
import AppHeader from '../../header/AppHeader';
import SelectedItem from './sharedataconmponents/SelectedItem';
import FileBrowser from './sharedataconmponents/FileBrowser';
import DocumentPicker from 'react-native-document-picker';

export class ShareData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemList: [{name: 'abra'}],
      selectFile: false,
    };
  }

  async pickMultipleFiles() {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      for (const res of results) {
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size,
        );
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }

  showFileBrowser() {}

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
            this.pickMultipleFiles();
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
        <View style={{flex: 1}}>{this.showSelectedFiles()}</View>
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
