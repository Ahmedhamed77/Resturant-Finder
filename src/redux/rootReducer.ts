import {combineReducers} from 'redux';

import {restaurantReducer} from './resturant/reducer';

const rootReducer = combineReducers({
  shops: restaurantReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
