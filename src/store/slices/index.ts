import { combineReducers } from 'redux';
import { cityReducer } from './city-slice';
import { offersReducer } from './offers-slice';
import { sortingReducer } from './sorting-slice';
import { authorizationReducer } from './authorization-slice';
import { userReducer } from './user-slice';

const rootReducer = combineReducers({
  city: cityReducer,
  offers: offersReducer,
  sorting: sortingReducer,
  authorization: authorizationReducer,
  user: userReducer,
});

export default rootReducer;
