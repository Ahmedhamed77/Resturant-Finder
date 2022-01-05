import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {RootParameterScreensList} from './interface';
import {HomeScreenTab} from '../BottomTaps';

const Main = createStackNavigator();
export const Route = () => {
  return (
    <NavigationContainer>
      <Main.Navigator
        initialRouteName={RootParameterScreensList.home}
        screenOptions={{headerTitleAlign: 'center'}}>
        <Main.Screen
          name={RootParameterScreensList.tabs}
          component={HomeScreenTab}
          options={{headerShown: false, ...TransitionPresets.SlideFromRightIOS}}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
};
