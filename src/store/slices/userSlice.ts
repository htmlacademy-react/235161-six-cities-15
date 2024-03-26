import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoggedUserType } from '../../types/authorization';

type UserSliceType = {
  userData: LoggedUserType | null;
};

const initialState: UserSliceType = {
  userData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserData: (state, action: PayloadAction<LoggedUserType | null>) => {
      state.userData = action.payload;
    }
  }
});

export const userReducer = userSlice.reducer;
