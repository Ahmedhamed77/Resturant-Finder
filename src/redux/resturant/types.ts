import {Restaurant} from '../../api/restaurants/types';

export enum ActionType {
  GET_RESTAURANTS_LIST = 'GET_RESTAURANTS_LIST',
  RESTAURANTS_LOADING = 'RESTAURANTS_LOADING',
  RESTAURANTS_ERROR = 'RESTAURANTS_ERROR',
}

interface GetRestaurant {
  type: ActionType.GET_RESTAURANTS_LIST;
  payload: Restaurant[];
}

interface RestaurantLoading {
  type: ActionType.RESTAURANTS_LOADING;
}

interface RestaurantError {
  type: ActionType.RESTAURANTS_ERROR;
  payload: string;
}

export type Action = GetRestaurant | RestaurantLoading | RestaurantError;
