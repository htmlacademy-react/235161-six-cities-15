import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {saveToken, dropToken} from '../services/token';
import { OfferType } from '../types/offer';
import { AuthInfoType, LoggedUserType } from '../types/authorization';
import { offersSlice } from './slices/offersSlice';
import { authorizationSlice } from './slices/authorizationSlice';
import { userSlice } from './slices/userSlice';
import { APIRoute, AuthorizationStatus } from '../const';

const {loadOffers, changeLoadingStatus} = offersSlice.actions;
const {changeAuthStatus} = authorizationSlice.actions;
const {saveUserData} = userSlice.actions;

export const fetchOffers = createAsyncThunk<void, undefined, {
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

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<LoggedUserType>(APIRoute.Login);

      dispatch(saveUserData(data));
      dispatch(changeAuthStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(changeAuthStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthInfoType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<LoggedUserType>(APIRoute.Login, {email, password});

    saveToken(data.token);
    dispatch(saveUserData(data));
    dispatch(changeAuthStatus(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(saveUserData(null));
    dispatch(changeAuthStatus(AuthorizationStatus.NoAuth));
  }
);
