import GetLocation from 'react-native-get-location';
import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {UserLocation} from '../Types';

export const useGetUserLocation = () => {
  const [location, setLocation] = useState<UserLocation>();
  const [loading, setLoading] = useState<boolean>(false);

  const getLocation = () => {
    setLoading(true);
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(res => {
        setLocation(res);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        const {code, message} = error;
        Alert.alert(code, message);
      });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return {loading, location};
};
