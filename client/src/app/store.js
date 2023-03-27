import { configureStore } from '@reduxjs/toolkit';

import { carRentApi } from '../services/carRent';

export default configureStore({
    reducer: {
        [carRentApi.reducerPath]: carRentApi.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(carRentApi.middleware),
})