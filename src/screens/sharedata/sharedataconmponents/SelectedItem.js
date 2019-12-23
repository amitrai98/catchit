import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

const SelectedItem = props => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <FastImage
        style={{width: 80, height: 80, alignSelf: 'center'}}
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.headerText}>
        {item.name != undefined ? item.name : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 115,
    width: 90,
    backgroundColor: '#dbdbdb',
    paddingVertical: 10,
    paddingHorizontal: 2,
    marginLeft: 8,
    marginTop: 8,
  },
  headerText: {
    alignSelf: 'center',
    color: '#5e5e5e',
  },
});

export default SelectedItem;
