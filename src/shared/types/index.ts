import {TabNavigationParams} from '../../navigation/TabNavigation/interface';

export interface UserLocation {
  accuracy?: number;
  altitude: number;
  course?: number;
  latitude: number;
  longitude: number;
  speed: number;
  time: number;
  verticalAccuracy?: number;
}

export interface Restaurant {
  id: number;
  name: string;
  resturantlatitude: number;
  resturantlongitude: number;
}

export type Tabs = {
  id: number;
  component: () => JSX.Element;
  name: TabNavigationParams;
  options: {
    title: string;
    tabBarIcon: ({color}: {color: string}) => JSX.Element;
  };
};
