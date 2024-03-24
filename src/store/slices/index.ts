import { combineReducers } from 'redux';
import { cityReducer } from './citySlice';
import { offersReducer } from './offersSlice';
import { sortingReducer } from './sortingSlice';
import { authorizationReducer } from './authorizationSlice';
import { userReducer } from './userSlice';

const rootReducer = combineReducers({
  city: cityReducer,
  offers: offersReducer,
  sorting: sortingReducer,
  authorization: authorizationReducer,
  user: userReducer,
});

export default rootReducer;
