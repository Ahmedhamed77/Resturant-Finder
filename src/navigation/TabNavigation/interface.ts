import {StackNavigationProp} from '@react-navigation/stack';
import {NavigatorScreenParams} from '@react-navigation/native';

import {HomeStackParamsParamList} from '../HomeStack/interface';
import {RestaurantsStackParamsParamList} from '../RestuarantStack/interface';
import {ProfileStackParamsParamList} from '../ProfileStack/interface';

export type NO_PARAMS = undefined;

export enum TabNavigationParams {
  HomeTab = 'HomeTab',
  ProfileTab = 'ProfileTab',
  RestaurantTab = 'RestaurantTab',
}

export type TabNavigationParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamsParamList>;
  RestaurantTab: NavigatorScreenParams<RestaurantsStackParamsParamList>;
  ProfileTab: NavigatorScreenParams<ProfileStackParamsParamList>;
};

export type RootNavigation = StackNavigationProp<
  TabNavigationParamList,
  TabNavigationParams
>;
