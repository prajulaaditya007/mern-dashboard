import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    reducerPath: "main",
    tagTypes:["Kpis"],
    endpoints: (build) => ({
        getKpis: build.query<void, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"]
        })
    })
});

/*
kpi --> keep performance indicator
using the endpoint Kpi and using the base url from the .env file and making the call to base url/kpi/kpis --> this is how this kpi is setup!!

This is a boilerplate code for the api call, once this is done, we can use this api call in the component and multiple times, just need to add another endpoint as getKpis2, getKpis3 etc
*/

export const { useGetKpisQuery } = api;