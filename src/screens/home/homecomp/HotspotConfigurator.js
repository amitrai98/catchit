import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const HotspotConfigurator = props => {
  const {
    enableHotspot,
    enableHotspotWithConfig,
    fetchPeerList,
    disableHotspot,
    showQR,
    scanQR,
  } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => enableHotspot()}
        style={styles.enableHotspotButton}>
        <Text style={styles.headerText}>{`EnableHotspot`}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => enableHotspotWithConfig()}
        style={styles.enableHotspotButton}>
        <Text style={styles.headerText}>{`EnableHotspot with config`}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => disableHotspot()}
        style={styles.enableHotspotButton}>
        <Text style={styles.headerText}>{`Disable Hotspot`}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => fetchPeerList()}
        style={styles.enableHotspotButton}>
        <Text style={styles.headerText}>{`Fetch PeerList`}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => showQR()}
        style={styles.enableHotspotButton}>
        <Text style={styles.headerText}>{`Show Qr`}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => scanQR()}
        style={styles.enableHotspotButton}>
        <Text style={styles.headerText}>{`Scan Qr`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 2,
    marginTop: 10,
  },
  headerText: {
    alignSelf: 'center',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 80,
  },
  enableHotspotButton: {
    backgroundColor: '#468189',
    marginHorizontal: '10%',
    marginTop: 30,
    borderRadius: 5,
  },
});

export default HotspotConfigurator;
