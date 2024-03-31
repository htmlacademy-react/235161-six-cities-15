import { createSlice } from '@reduxjs/toolkit';
import { fetchFavoriteOffers } from '../api-actions';
import { FullOfferType, OfferType } from '../../types/offer';
import { NameSpace } from '../../const';

type FavoritesSliceType = {
  data: Array<OfferType | FullOfferType>;
  loadingStatus: boolean;
  errorStatus: boolean;
};

const initialState: FavoritesSliceType = {
  data: [],
  loadingStatus: false,
  errorStatus: false,
};

export const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.errorStatus = false;
        state.loadingStatus = true;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loadingStatus = false;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.errorStatus = true;
        state.loadingStatus = false;
      });
  }
});

export const favoritesReducer = favoritesSlice.reducer;
