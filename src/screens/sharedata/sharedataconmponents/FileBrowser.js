import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const FileBrowser = props => {
  const {fileSelected, canceled} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{`select fils`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 2,
  },
  headerText: {
    alignSelf: 'center',
  },
});

export default FileBrowser;
