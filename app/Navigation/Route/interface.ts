import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum RootParameterScreensList {
  home = 'Home',
  settings = 'Settings',
  tabs = 'Tabs',
}

export type RootStackParamList = {
  [RootParameterScreensList.home]: undefined;
  [RootParameterScreensList.settings]: undefined;
  [RootParameterScreensList.tabs]: undefined;
};

export type RootNavigationProp<P extends RootParameterScreensList> =
  StackNavigationProp<RootStackParamList, P>;

export type RootRouteProp<P extends RootParameterScreensList> = RouteProp<
  RootStackParamList,
  P
>;
