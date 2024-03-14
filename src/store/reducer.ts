import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { offers } from '../mock/offers';

const initialState = {
  city: 'Amsterdam',
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {cityName} = action.payload;
      state.city = cityName;
    });
});

export {reducer};
