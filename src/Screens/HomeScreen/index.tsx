import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useGetUserLocation} from '../../shared/hooks/useGetUserLocation';
import {Text} from 'react-native';
import {mapStyle} from './mapStyle';
import {styles} from './style';
import {resturants} from '../../assets/Data/resturatns';

export const HomeScreen = () => {
  const {location, loading} = useGetUserLocation();

  if (loading || !location) {
    return <Text>Loading...</Text>;
  }
  const {longitude, latitude} = location;

  console.log(longitude, latitude, 'longitude, latitude');

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      customMapStyle={mapStyle}
      style={styles.map}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {resturants.map(resturant => {
        return (
          <Marker
            key={resturant.id}
            coordinate={{
              latitude: resturant.resturantlatitude,
              longitude: resturant.resturantlongitude,
            }}
          />
        );
      })}
      <Marker
        description={'You Are Here'}
        title={'You'}
        coordinate={{
          latitude: latitude,
          longitude: longitude,
        }}
      />
    </MapView>
  );
};
