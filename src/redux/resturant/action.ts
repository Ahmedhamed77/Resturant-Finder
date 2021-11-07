import {Dispatch} from 'redux';

import {getRestaurants} from '../../api/restaurants/getRestaurants';
import {Action, ActionType} from './types';

export const getRestaurantsList = () => async (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionType.RESTAURANTS_LOADING});
  try {
    const res = await getRestaurants();
    dispatch({type: ActionType.GET_RESTAURANTS_LIST, payload: res.data.Result});
  } catch (error: any) {
    console.log('error fetching restaurants', error);
    dispatch({type: ActionType.RESTAURANTS_ERROR, payload: error});
  }
};
