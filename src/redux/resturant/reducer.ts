import {Restaurant} from '../../api/restaurants/types';
import {Action, ActionType} from './types';

interface RestaurantReducer {
  restaurants: Restaurant[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  restaurants: [],
  loading: false,
  error: null,
};

export const restaurantReducer = (
  state: RestaurantReducer = initialState,
  action: Action,
): RestaurantReducer => {
  switch (action.type) {
    case ActionType.GET_RESTAURANTS_LIST:
      return {
        loading: false,
        restaurants: action.payload,
        error: null,
      };
    case ActionType.RESTAURANTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.RESTAURANTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
