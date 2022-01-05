import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProfileStackParams, ProfileStackParamsParamList} from './interface';
import {SettingScreen} from '../../screens';

const Stack = createNativeStackNavigator<ProfileStackParamsParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={ProfileStackParams.Profile}
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
