import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';

type AuthorizationSliceType = {
  authStatus: AuthorizationStatus;
  authErrorStatus: boolean;
}

const initialState: AuthorizationSliceType = {
  authStatus: AuthorizationStatus.Unknown,
  authErrorStatus: false,
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    changeAuthStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authStatus = action.payload;
    },
    changeAuthErrorStatus: (state, action: PayloadAction<boolean>) => {
      state.authErrorStatus = action.payload;
    }
  }
});

export const authorizationReducer = authorizationSlice.reducer;

