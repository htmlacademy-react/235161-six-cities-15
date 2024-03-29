import { createSlice } from '@reduxjs/toolkit';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { LoggedUserType } from '../../types/authorization';
import { NameSpace } from '../../const';

type UserSliceType = {
  userData: LoggedUserType | null;
};

const initialState: UserSliceType = {
  userData: null,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.userData = action.payload;
      })

      .addCase(loginAction.fulfilled, (state, action) => {
        state.userData = action.payload;
      })

      .addCase(logoutAction.fulfilled, (state) => {
        state.userData = null;
      });
  }
});

export const userReducer = userSlice.reducer;
