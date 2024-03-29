import { State } from '../../types/state';
import { OfferType } from '../../types/offer';
import { NameSpace } from '../../const';

export const getOffers = (state: State): OfferType[] => state[NameSpace.Offers].cards.cardsData;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].cards.cardsLoadingStatus;
