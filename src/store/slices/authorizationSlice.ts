import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';

type AuthorizationSliceType = {
  authStatus: AuthorizationStatus;
}

const initialState: AuthorizationSliceType = {
  authStatus: AuthorizationStatus.Unknown,
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    changeAuthStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authStatus = action.payload;
    }
  }
});

export const authorizationReducer = authorizationSlice.reducer;

