import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import {mapStyle} from './mapStyle';
import {styles} from './style';

export const HomeScreen = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      customMapStyle={mapStyle}
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};
