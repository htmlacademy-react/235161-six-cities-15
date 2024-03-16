import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<{cityName: string}>('changeCity');

export const getOffers = createAction('getOffers');

export const changeSorting = createAction<{sorting: string}>('changeSorting');
