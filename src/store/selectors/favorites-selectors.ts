import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { FullOfferType, OfferType } from '../../types/offer';

export const getFavoriteOffers = (state: State): OfferType[] | FullOfferType[] => state[NameSpace.Favorites].data;
export const getFavoritesLoadingStatus = (state: State): boolean => state[NameSpace.Favorites].loadingStatus;
export const getFavoritesErrorStatus = (state: State): boolean => state[NameSpace.Favorites].errorStatus;
