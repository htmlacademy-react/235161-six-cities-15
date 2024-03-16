import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<{cityName: string}>('changeCity');

export const filterOffersByCity = createAction<{cityName: string}>('filterOffersByCity');

export const resetOffers = createAction('resetOffers');

export const changeSorting = createAction<{sorting: string}>('changeSorting');

