import { createSlice } from '@reduxjs/toolkit';
import { fetchFavoriteOffers, changeFavoriteStatus } from '../api-actions';
import { FullOfferType, OfferType } from '../../types/offer';
import { NameSpace } from '../../const';

type FavoritesSliceType = {
  data: Array<OfferType | FullOfferType>;
  loadingStatus: boolean;
  errorStatus: boolean;
  changeFavoritesLoadingStatus: boolean;
  changeFavoritesErrorStatus: boolean;
};

const initialState: FavoritesSliceType = {
  data: [],
  loadingStatus: false,
  errorStatus: false,
  changeFavoritesLoadingStatus: false,
  changeFavoritesErrorStatus: false,
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
      })

      .addCase(changeFavoriteStatus.pending, (state) => {
        state.changeFavoritesErrorStatus = false;
        state.changeFavoritesLoadingStatus = true;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        state.changeFavoritesLoadingStatus = false;
        if (action.payload.isFavorite) {
          state.data.push(action.payload);
        } else {
          state.data = state.data.filter((offer) => offer.id !== action.payload.id);
        }
      })
      .addCase(changeFavoriteStatus.rejected, (state) => {
        state.changeFavoritesErrorStatus = true;
        state.changeFavoritesLoadingStatus = false;
      });
  }
});

export const favoritesReducer = favoritesSlice.reducer;
