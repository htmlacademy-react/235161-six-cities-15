import { combineReducers } from 'redux';
import { cityReducer } from './citySlice';
import { offersReducer } from './offersSlice';
import { sortingReducer } from './sortingSlice';

const rootReducer = combineReducers({
  city: cityReducer,
  offers: offersReducer,
  sorting: sortingReducer,
});

export default rootReducer;
