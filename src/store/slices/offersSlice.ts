import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { getOffers } from '../action';
import { OfferType } from '../../types/offer';
import { offers } from '../../mock/offers';

type OffersSliceType = {
  cardsData: OfferType[];
}

const initialState: OffersSliceType = {
  cardsData: [],
};

//TODO: Нужно доработать, доработаю в 7 модуле
const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    getOffers: (state) => {
      state.cardsData = offers;
    },
    loadOffers: (state, action: PayloadAction<OfferType[]>) => {
      state.cardsData = action.payload;
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getOffers, () => [...offers]);
  // }
});

export const offersReducer = offersSlice.reducer;
