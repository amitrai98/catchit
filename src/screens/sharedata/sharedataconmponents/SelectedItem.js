import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SelectedItem = props => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        {item.name != undefined ? item.name : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 2,
    marginTop: 10,
  },
  headerText: {
    paddingHorizontal: 20,
    color: 'white',
  },
});

export default SelectedItem;
