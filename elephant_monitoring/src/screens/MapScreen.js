import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const elephantLocation = {
    latitude: 0, // Dummy latitude
    longitude: 0, // Dummy longitude
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Marker coordinate={elephantLocation} title="Elephant Location" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;