import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParams, HomeStackParamsParamList} from './interface';
import {HomeScreen} from '../../screens';

const Stack = createNativeStackNavigator<HomeStackParamsParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={HomeStackParams.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
