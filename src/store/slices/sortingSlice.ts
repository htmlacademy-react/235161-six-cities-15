import { createSlice } from '@reduxjs/toolkit';
import { changeSorting } from '../action';
import { Setting } from '../../const';

const initialState: string = Setting.defaultSorting;

const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeSorting, (state, action) => {
        const {sorting} = action.payload;
        //TODO: Нужно доработать, пока что сделал так, чтобы линтер не выдавал ошибок
        state = sorting;
        return state;
      });
  }
});

export const sortingReducer = sortingSlice.reducer;
