import { createReducer } from '@reduxjs/toolkit';
import { changeCity, filterOffersByCity, resetOffers } from './action';
import { offers } from '../mock/offers';

const initialState = {
  city: 'Paris',
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {cityName} = action.payload;
      state.city = cityName;
    })
    .addCase(filterOffersByCity, (state, action) => {
      const {cityName} = action.payload;
      state.offers = offers.filter((offer) => offer.city.name === cityName);
    })
    .addCase(resetOffers, (state) => {
      state.offers = offers;
    });
});

export {reducer};
