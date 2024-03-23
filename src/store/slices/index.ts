import { combineReducers } from 'redux';
import { cityReducer } from './citySlice';
import { offersReducer } from './offersSlice';
import { sortingReducer } from './sortingSlice';
import { authorizationReducer } from './authorizationSlice';

const rootReducer = combineReducers({
  city: cityReducer,
  offers: offersReducer,
  sorting: sortingReducer,
  authorization: authorizationReducer,
});

export default rootReducer;
