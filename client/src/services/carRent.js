import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let URL = "http://localhost:8000/api/"

export const carRentApi = createApi({
    reducerPath: 'carRentApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        // get car by type
        getCar: builder.query({
            query: (filter) => `vehicle/`,
        }),
        // getItemById: builder.query({
        //     query: (id) => `items/${id}`,
        // }),
        addCar: builder.mutation({
            query: (body) => ({
                url: 'vehicle/',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const {
    useGetCarQuery,
    useAddCarMutation,
} = carRentApi;