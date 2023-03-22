import {configureStore} from '@reduxjs/toolkit';

import { carRentApi } from '../services/carRent';

export default configureStore({
    reducer: {
        [carRentApi.reducerPath] : carRentApi.reducer,
    },
})