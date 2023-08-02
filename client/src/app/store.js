import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
// import { setupListeners } from '@reduxjs/toolkit/query';

import { carRentApi } from '../services/carRent';
import { userSlice } from './features/userSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
    [carRentApi.reducerPath]: carRentApi.reducer,
    user: userSlice.reducer,
}));

const store = configureStore({
    reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(carRentApi.middleware),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     thunk: {
    //         extraArgument: carRentApi,
    //     },
    //     serializableCheck: false,
    // }),
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(carRentApi.middleware),
})

// const rootReducer = combineReducers({
//     [carRentApi.reducerPath]: carRentApi.reducer,
//     user: userSlice.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(carRentApi.middleware),
// });

// setupListeners(store.dispatch);

const persistor = persistStore(store);

export { store, persistor };