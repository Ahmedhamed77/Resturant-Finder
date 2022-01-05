import React from 'react';

import {styles} from './style';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  RestaurantsStackParams,
  RestaurantsStackParamsParamList,
} from '../../navigation/RestuarantStack/interface';

interface RestaurantDetailsScreenProps {
  navigation: StackNavigationProp<
    RestaurantsStackParamsParamList,
    RestaurantsStackParams.Restaurants
  >;
}

export const RestaurantDetailsScreen: React.FC<RestaurantDetailsScreenProps> =
  () => {
    return (
      <View style={styles.container}>
        <Text>RestaurantDetailsScreen</Text>
      </View>
    );
  };
