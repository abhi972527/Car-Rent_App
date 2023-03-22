import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carRentApi = createApi({
    reducerPath: 'carRentApi',
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    endpoints: (builder) => ({
        // get car by type
        getCar: builder.query({
            query: () => `/blah/blah/blah`,
        }),
    }),
});

export const {
    useGetCarQuery
} = carRentApi;