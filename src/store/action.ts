import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<{cityName: string}>('city/changeCity');

// export const getOffers = createAction('offers/getOffers');

export const changeSorting = createAction<{sorting: string}>('offers/changeSorting');
