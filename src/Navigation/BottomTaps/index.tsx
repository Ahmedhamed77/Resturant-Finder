import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {RootParameterScreensList, RootStackParamList} from '../Route/interface';
import {HomeScreen, RestaurantsScreen, SettingScreen} from '../../Screens';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const HomeScreenTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#9381ff',
      }}>
      <Tab.Screen
        name={RootParameterScreensList.home}
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={RootParameterScreensList.restaurants}
        component={RestaurantsScreen}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="fastfood" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={RootParameterScreensList.settings}
        component={SettingScreen}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="gear" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
