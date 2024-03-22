import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from './reducer';
import rootReducer from './slices';

export const store = configureStore({reducer: rootReducer});
