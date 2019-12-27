import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

const Thumbnail = props => {
  const {
    text,
    textPosition,
    textAlignment,
    textColor,
    thumbnailImageUri,
    onPress,
    thbg,
    resizeAuto,
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: getWidth(text, resizeAuto),
          height: getHeight(text, resizeAuto),
          alignSelf: 'center',
          backgroundColor: thbg != undefined ? thbg : 'transparent',
        },
      ]}>
      <FastImage
        style={{
          width: getWidth(text, resizeAuto),
          height: getHeight(text, resizeAuto),
          alignSelf: 'center',
        }}
        resizeMode={'center'}
      />
      {text != undefined ? <Text style={styles.headerText}>{text}</Text> : null}
    </TouchableOpacity>
  );
};

const getWidth = (text, resizeAuto) => {
  let val = 70;
  if (text != undefined && resizeAuto == undefined && resizeAuto)
    val = text.length * 8;

  return val;
};

const getHeight = (text, resizeAuto) => {
  let val = 80;
  if (text != undefined && resizeAuto == undefined && resizeAuto)
    val = text.length * 8;

  return val;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    paddingHorizontal: 2,
    width: 70,
  },
  headerText: {
    alignSelf: 'center',
    color: 'white',
    paddingBottom: 3,
    backgroundColor: 'transparent',
  },
});

export default Thumbnail;
