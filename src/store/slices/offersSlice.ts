import { createSlice } from '@reduxjs/toolkit';
// import { getOffers } from '../action';
import { OfferType } from '../../types/offer';
import { offers } from '../../mock/offers';

const initialState: OfferType[] = [];

//TODO: Нужно доработать, доработаю в 7 модуле
const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    getOffers: () => [...offers]
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getOffers, () => [...offers]);
  // }
});

export const offersReducer = offersSlice.reducer;
