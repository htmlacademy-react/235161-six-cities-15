import { createSlice } from '@reduxjs/toolkit';
import { changeSorting } from '../action';
import { Setting } from '../../const';

const initialState: string = Setting.defaultSorting;

//TODO: Нужно доработать
const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeSorting, (state, action) => {
        const {sorting} = action.payload;
        return sorting;
      });
  }
});

export const sortingReducer = sortingSlice.reducer;
