import { createSlice } from '@reduxjs/toolkit';
import { getOffers } from '../action';
import { OfferType } from '../../types/offer';
import { offers } from '../../mock/offers';

const initialState: OfferType[] = [];

//TODO: Нужно доработать
const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOffers, () => [...offers]);
  }
});

export const offersReducer = offersSlice.reducer;
