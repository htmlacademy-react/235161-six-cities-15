import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { FullOfferType, OfferType } from '../../types/offer';

export const getFavoriteOffers = (state: State): OfferType[] | FullOfferType[] => state[NameSpace.Favorites].data;
export const getChangeFavoritesLoadingStatus = (state: State): boolean => state[NameSpace.Favorites].changeFavoritesLoadingStatus;
