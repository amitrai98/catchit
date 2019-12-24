import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectFile} from './SharedataActions';
import AppHeader from '../../header/AppHeader';
import SelectedItem from './sharedataconmponents/SelectedItem';
import DocumentPicker from 'react-native-document-picker';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
export class ShareData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemList: [],
    };
  }

  setAnimation = () => {
    LayoutAnimation.configureNext({
      duration: 250,
      update: {
        type: LayoutAnimation.Types.easeIn,
        springDamping: 0.7,
      },
    });
    LayoutAnimation.configureNext({
      duration: 500,
      create: {
        type: LayoutAnimation.Types.easeIn,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7,
      },
    });
  };

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
        console.log(`user canceled ${err}`);
        let newItems = [];
        for (let index = 1; index <= 15; index++) {
          newItems.push({
            uri: index,
            type: 'image',
            name: `file name ${index}`,
            size: `20${index} mb`,
          });
        }
        this.setState({selectedItemList: newItems});
      } else {
        throw err;
      }
    }
  }

  removeFile(file, index) {
    if (file != undefined) {
      let array = [...this.state.selectedItemList];
      let index = array.indexOf(file);
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({selectedItemList: array});
      }
    }
  }

  sendfiles() {
    let array = [...this.state.selectedItemList];
    array.splice(0, array.length);
    this.setState({selectedItemList: array});
  }

  showSelectedFiles() {
    const {selectedItemList} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#959999'}}>
        {selectedItemList.length > 0 ? (
          <View style={{flex: 1, backgroundColor: 'transparent'}}>
            <FlatList
              data={selectedItemList}
              numColumns={4}
              renderItem={({item, index}) => (
                <SelectedItem
                  item={item}
                  index={index}
                  removeFile={(file, index) => this.removeFile(file, index)}
                />
              )}
            />
            <TouchableOpacity
              onPress={() => this.sendfiles()}
              style={{
                paddingHorizontal: 5,
                position: 'absolute',
                left: '35%',
                bottom: 0,
              }}>
              <Text
                style={{
                  backgroundColor: 'green',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 10,
                  alignSelf: 'center',
                  margin: 10,
                  color: 'white',
                }}>
                {selectedItemList.length > 1 ? 'Share Files' : 'Share File'}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={{alignSelf: 'center', marginTop: 200}}>
            No files selected
          </Text>
        )}

        <TouchableOpacity
          onPress={() => {
            this.pickMultipleFiles();
          }}
          style={{
            alignContent: 'flex-end',
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: '#347083',
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
