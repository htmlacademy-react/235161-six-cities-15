import { State } from '../../types/state';
import { FullOfferType, OfferType, ReviewItemType } from '../../types/offer';
import { NameSpace } from '../../const';

export const getOffers = (state: State): OfferType[] => state[NameSpace.Offers].cards.cardsData;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].cards.cardsLoadingStatus;
export const getOffersErrorStatus = (state: State): boolean => state[NameSpace.Offers].cards.cardsErrorStatus;

export const getCurrentOffer = (state:State): FullOfferType | null => state[NameSpace.Offers].currentOfferData.data;
export const getCurrentOfferId = (state: State): string | undefined => state[NameSpace.Offers].currentOfferData.data?.id;
export const getCurrentOfferLoadingStatus = (state:State): boolean => state[NameSpace.Offers].currentOfferData.offerLoadingStatus;
export const getCurrentOfferErrorStatus = (state:State): boolean => state[NameSpace.Offers].currentOfferData.offerErrorStatus;

export const getNearbyOffers = (state:State): OfferType[] => state[NameSpace.Offers].currentOfferData.nearbyOffers;

export const getComments = (state:State): ReviewItemType[] => state[NameSpace.Offers].currentOfferData.comments.commentsData;
export const getPostLoadingStatus = (state:State): boolean => state[NameSpace.Offers].currentOfferData.comments.postLoadingStatus;
export const getPostErrorStatus = (state:State): boolean => state[NameSpace.Offers].currentOfferData.comments.commentPostErrorStatus;
