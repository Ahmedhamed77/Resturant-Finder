import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getRestaurantsList} from '../../redux/resturant/action';
import {RootState} from '../../redux/rootReducer';

export const RestaurantsScreen = () => {
  const dispatch = useDispatch();
  const {restaurants, error, loading} = useSelector(
    (state: RootState) => state.shops,
  );

  useEffect(() => {
    dispatch(getRestaurantsList());
  }, [dispatch]);

  console.log(restaurants, '===restaurants');
  return (
    <View>
      <Text>RestaurantsScreen</Text>
    </View>
  );
};
