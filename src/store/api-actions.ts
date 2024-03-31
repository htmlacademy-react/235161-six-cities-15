import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {saveToken, dropToken} from '../services/token';
import { FullOfferType, OfferType, ReviewItemType } from '../types/offer';
import { AuthInfoType, LoggedUserType } from '../types/authorization';
import { APIRoute } from '../const';

export const fetchOffers = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferType[]>(APIRoute.Offers);

    return data;
  }
);

export const fetchOfferById = createAsyncThunk<FullOfferType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOfferById',
  async (id, {extra: api}) => {
    const {data} = await api.get<FullOfferType>(`${APIRoute.Offers}/${id}`);
    return data;
  }
);

export const fetchComments = createAsyncThunk<ReviewItemType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchComments',
  async (id, {extra: api}) => {
    const {data} = await api.get<ReviewItemType[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

type postReviewType = {
  id: string;
  reviewData: {
    review: string;
    rating: number;
  };
}

export const postReview = createAsyncThunk<ReviewItemType, postReviewType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/postReview',
  async ({id, reviewData}, {extra: api}) => {
    const {data} = await api.post<ReviewItemType>(`${APIRoute.Comments}/${id}`, {comment: reviewData.review, rating: reviewData.rating});
    return data;
  }
);

export const fetchNearbyOffers = createAsyncThunk<OfferType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchNearbyOffers',
  async (id, {extra: api}) => {
    const {data} = await api.get<OfferType[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  }
);

export const fetchFavoriteOffers = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchFavoriteOffers',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<OfferType[]>(APIRoute.Favorite);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<LoggedUserType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<LoggedUserType>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<LoggedUserType, AuthInfoType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<LoggedUserType>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
