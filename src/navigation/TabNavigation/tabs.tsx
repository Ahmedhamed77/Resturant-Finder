import React from 'react';

import {TabNavigationParams} from './interface';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import RestaurantsStack from '../RestuarantStack';
import ProfileStack from '../ProfileStack';
import HomeStack from '../HomeStack';
import {Tabs} from '../../shared';

export const tabs: Tabs[] = [
  {
    id: 1,
    component: HomeStack,
    name: TabNavigationParams.HomeTab,
    options: {
      title: 'HOME',
      tabBarIcon: ({color}: {color: string}) => (
        <Entypo name="home" size={27} color={color} />
      ),
    },
  },
  {
    id: 2,
    component: RestaurantsStack,
    name: TabNavigationParams.RestaurantTab,
    options: {
      title: 'RESTAURANTS',
      tabBarIcon: ({color}: {color: string}) => (
        <MaterialIcons name="fastfood" size={27} color={color} />
      ),
    },
  },
  {
    id: 3,
    component: ProfileStack,
    name: TabNavigationParams.ProfileTab,
    options: {
      title: 'PROFILE',
      tabBarIcon: ({color}: {color: string}) => (
        <FontAwesome name="user" size={27} color={color} />
      ),
    },
  },
];
