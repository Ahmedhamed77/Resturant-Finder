import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigationParamList} from './interface';
import {tabs} from './tabs';
import {COLORS} from '../../shared';

const Tab = createBottomTabNavigator<TabNavigationParamList>();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: COLORS.lightGrey,
        tabBarActiveTintColor: COLORS.black,
      }}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.id}
          name={tab.name}
          component={tab.component}
          options={{
            title: tab.options.title,
            tabBarIcon: tab.options.tabBarIcon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
