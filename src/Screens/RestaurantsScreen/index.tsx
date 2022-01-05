import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ListRenderItem,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Restaurant} from '../../api/restaurants/types';
import {getRestaurantsList} from '../../redux/resturant/action';
import {RootState} from '../../redux/rootReducer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  RestaurantsStackParams,
  RestaurantsStackParamsParamList,
} from '../../navigation/RestuarantStack/interface';
import {RouteProp} from '@react-navigation/core';

interface RestaurantsScreenProps {
  navigation: StackNavigationProp<
    RestaurantsStackParamsParamList,
    RestaurantsStackParams.Restaurants
  >;
  route: RouteProp<
    RestaurantsStackParamsParamList,
    RestaurantsStackParams.Restaurants
  >;
}

export const RestaurantsScreen: React.FC<RestaurantsScreenProps> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const {restaurants, error, loading} = useSelector(
    (state: RootState) => state.shops,
  );

  useEffect(() => {
    dispatch(getRestaurantsList());
  }, [dispatch]);

  const openDetailsScreen = () => {
    navigation.navigate(RestaurantsStackParams.RestaurantDetails);
  };

  const renderItem: ListRenderItem<Restaurant> = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.touchableOpacityContainer}
        onPress={openDetailsScreen}>
        <View style={styles.imageContainer}>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}> {item.businessname}</Text>
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.descStyle}>
              Экоактивизм для начинающих: что могу сделать в своем городе
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.dateStyle}>12 сентября</Text>
            <MaterialIcons name="favorite" size={22} color={'red'} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return <ActivityIndicator style={styles.handlerContainer} />;
  }

  if (error) {
    return (
      <View style={styles.handlerContainer}>
        <Text>Error fetching data</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={restaurants}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};
