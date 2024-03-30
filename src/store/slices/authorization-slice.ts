import { createSlice } from '@reduxjs/toolkit';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { AuthorizationStatus, NameSpace } from '../../const';

type AuthorizationSliceType = {
  authStatus: AuthorizationStatus;
  authLoadingStatus: boolean;
  authErrorStatus: boolean;
}

const initialState: AuthorizationSliceType = {
  authStatus: AuthorizationStatus.Unknown,
  authLoadingStatus: false,
  authErrorStatus: false,
};

export const authorizationSlice = createSlice({
  name: NameSpace.Authorization,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      })

      .addCase(loginAction.pending, (state) => {
        state.authLoadingStatus = true;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authLoadingStatus = false;
        state.authErrorStatus = false;
        state.authStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authLoadingStatus = false;
        state.authErrorStatus = true;
        state.authStatus = AuthorizationStatus.NoAuth;
      })

      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const authorizationReducer = authorizationSlice.reducer;

