import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { getOffers } from '../action';
import { OfferType, FullOfferType, ReviewItemType } from '../../types/offer';

type OffersSliceType = {
  cardsData: OfferType[];
  currentOfferData: {
    data: FullOfferType | null;
    nearbyOffers: OfferType[];
    comments: ReviewItemType[];
    offerLoadingStatus: boolean;
  };
  loadingStatus: boolean;
}

const initialState: OffersSliceType = {
  cardsData: [],
  currentOfferData: {
    data: null,
    nearbyOffers: [],
    comments: [],
    offerLoadingStatus: false,
  },
  loadingStatus: false,
};

//TODO: Нужно доработать, доработаю в 7 модуле
export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    loadOffers: (state, action: PayloadAction<OfferType[]>) => {
      state.cardsData = action.payload;
    },
    loadOfferById: (state, action: PayloadAction<FullOfferType | null>) => {
      state.currentOfferData.data = action.payload;
    },
    loadNearbyOffers: (state, action: PayloadAction<OfferType[]>) => {
      state.currentOfferData.nearbyOffers = action.payload;
    },
    loadComments: (state, action: PayloadAction<ReviewItemType[]>) => {
      state.currentOfferData.comments = action.payload;
    },
    changeLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loadingStatus = action.payload;
    },
    changeOfferLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.currentOfferData.offerLoadingStatus = action.payload;
    }
  },
});

export const offersReducer = offersSlice.reducer;
