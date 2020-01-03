import React from 'react';
import {View, Text} from 'react-native';
const Radar = props => {
  const {speed} = props;

  return (
    <View
      style={{
        width: 0,
        height: 360,
        borderLeftWidth: 80,
        borderLeftColor: 'transparent',
        borderRightWidth: 80,
        borderRightColor: 'transparent',
        borderTopWidth: 180,
        borderTopColor: 'rgba(176,196,222,0.7)',
        borderRadius: 160,
        alignSelf: 'center',
      }}
    />
  );
};

export default Radar;
