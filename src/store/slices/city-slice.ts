import { createSlice } from '@reduxjs/toolkit';
import { CityType } from '../../types/offer';
import { changeCity } from '../action';
import { Setting, CITIES } from '../../const';

const initialState: CityType = {
  name: Setting.defaultCity.name,
  location: Setting.defaultCity.location
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeCity, (state, action) => {
        const {cityName} = action.payload;
        const newCity = CITIES.find((city) => city.name === cityName);

        if (newCity) {
          state.name = newCity.name;
          state.location = newCity.location;
        }
      });
  }
});

export const cityReducer = citySlice.reducer;
