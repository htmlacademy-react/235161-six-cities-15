import { createReducer } from '@reduxjs/toolkit';
import { changeCity, filterOffersByCity, resetOffers, changeSorting } from './action';
import { offers } from '../mock/offers';
import { CITIES } from '../const';
import { OfferType } from '../types/offer';
import { CityType } from '../types/offer';

type InitialStateType = {
  city: CityType;
  offers: OfferType[];
  sorting: string;
};

const initialState: InitialStateType = {
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 12
    }
  },
  offers: [],
  sorting: 'Popular',
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
    })
    .addCase(changeSorting, (state, action) => {
      const {sorting} = action.payload;
      state.sorting = sorting;
    });
});

export {reducer};
