import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { getOffers } from '../action';
import { OfferType } from '../../types/offer';

type OffersSliceType = {
  cardsData: OfferType[];
  loadingStatus: boolean;
}

const initialState: OffersSliceType = {
  cardsData: [],
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
    changeLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loadingStatus = action.payload;
    }
  },
});

export const offersReducer = offersSlice.reducer;
