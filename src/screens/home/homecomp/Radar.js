import React from 'react';
import {View, Text} from 'react-native';
const Radar = props => {
  const {speed} = props;

  return (
    <View
      style={{
        width: 0,
        height: '100%',
        borderLeftWidth: 40,
        borderLeftColor: 'transparent',
        borderRightWidth: 40,
        borderRightColor: 'transparent',
        borderTopWidth: 100,
        borderTopColor: 'green',
        borderRadius: 55,
        alignSelf: 'center',
      }}
    />
  );
};

export default Radar;
