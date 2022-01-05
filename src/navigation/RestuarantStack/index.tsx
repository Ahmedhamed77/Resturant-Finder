import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  RestaurantsStackParams,
  RestaurantsStackParamsParamList,
} from './interface';
import {RestaurantDetailsScreen, RestaurantsScreen} from '../../screens';

const Stack = createNativeStackNavigator<RestaurantsStackParamsParamList>();

const RestaurantsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={RestaurantsStackParams.Restaurants}
        component={RestaurantsScreen}
      />
      <Stack.Screen
        name={RestaurantsStackParams.RestaurantDetails}
        component={RestaurantDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default RestaurantsStack;
