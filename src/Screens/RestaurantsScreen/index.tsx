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

export const RestaurantsScreen = () => {
  const dispatch = useDispatch();
  const {restaurants, error, loading} = useSelector(
    (state: RootState) => state.shops,
  );

  useEffect(() => {
    dispatch(getRestaurantsList());
  }, [dispatch]);

  const renderItem: ListRenderItem<Restaurant> = ({item}) => {
    return (
      <TouchableOpacity style={styles.touchableOpacityContainer}>
        <View style={styles.containerHeaderCard}>
          <Image
            source={{uri: item.image, width: 120, height: 120}}
            borderRadius={8}
          />
          <MaterialIcons name="favorite" size={22} color={'red'} />
        </View>

        <View style={styles.containerFooterCard}>
          <Text style={styles.textCardStyle}>{item.restauranttype}</Text>
          <Text style={styles.textCardStyle}>{item.businessname}</Text>
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
