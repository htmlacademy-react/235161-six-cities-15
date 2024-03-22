import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
// import {saveToken, dropToken} from '../services/token';
import {APIRoute} from '../const';
import { OfferType } from '../types/offer.js';
import { offersSlice } from './slices/offersSlice.js';

const {loadOffers, changeLoadingStatus} = offersSlice.actions;

export const fetchOffers = createAsyncThunk<void, undefined , {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(changeLoadingStatus(true));
    const response = await api.get<OfferType[]>(APIRoute.Offers);
    dispatch(changeLoadingStatus(false));
    dispatch(loadOffers(response.data));
  }
);
