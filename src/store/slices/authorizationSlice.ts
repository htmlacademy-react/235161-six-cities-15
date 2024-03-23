import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';

type AuthorizationSliceType = {
  authStatus: string;
}

const initialState: AuthorizationSliceType = {
  authStatus: AuthorizationStatus.Unknown,
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    changeAuthStatus: (state, action: PayloadAction<string>) => {
      state.authStatus = action.payload;
    }
  }
});

export const authorizationReducer = authorizationSlice.reducer;

