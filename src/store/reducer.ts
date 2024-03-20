import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOffers, changeSorting } from './action';
import { offers } from '../mock/offers';
import { CITIES } from '../const';
import { OfferType } from '../types/offer';
import { CityType } from '../types/offer';
import { Setting } from '../const';

type InitialStateType = {
  city: CityType;
  offers: OfferType[];
  sorting: string;
};

const initialState: InitialStateType = {
  city: Setting.defaultCity,
  offers: [],
  sorting: Setting.defaultSorting,
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
    .addCase(getOffers, (state) => {
      state.offers = offers;
    })
    .addCase(changeSorting, (state, action) => {
      const {sorting} = action.payload;
      state.sorting = sorting;
    });
});

export {reducer};
