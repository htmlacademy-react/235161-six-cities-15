import { combineReducers } from 'redux';
import { cityReducer } from './city-slice';
import { offersReducer } from './offers-slice';
import { sortingReducer } from './sorting-slice';
import { authorizationReducer } from './authorization-slice';
import { userReducer } from './user-slice';
import { favoritesReducer } from './favorites-slice';
import { NameSpace } from '../../const';

const rootReducer = combineReducers({
  [NameSpace.City]: cityReducer,
  [NameSpace.Offers]: offersReducer,
  [NameSpace.Sorting]: sortingReducer,
  [NameSpace.Authorization]: authorizationReducer,
  [NameSpace.User]: userReducer,
  [NameSpace.Favorites]: favoritesReducer,
});

export default rootReducer;
