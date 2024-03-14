import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<{cityName: string}>('changeCity');

//TODO: сделать экшн для заполнения офферов в стейте
