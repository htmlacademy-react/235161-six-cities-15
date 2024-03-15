import { createReducer } from '@reduxjs/toolkit';
import { changeCity, filterOffersByCity, resetOffers } from './action';
import { offers } from '../mock/offers';
import { CITIES } from '../const';

const initialState = {
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 12
    }
  },
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {cityName} = action.payload;
      const newCity = CITIES.find((city) => city.name === cityName);

      if (newCity) {
        state.city = newCity;
      }
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
