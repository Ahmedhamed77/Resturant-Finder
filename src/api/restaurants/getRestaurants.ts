import {Endpoints} from '..';
import {axios} from '../axios';
import {GetRestaurants} from './types';

export const getRestaurants = () => {
  return axios.get<GetRestaurants>(Endpoints.restaurant.getAllRestaurants);
};
