import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
    GetKpisResponse,
    GetProductsResponse,
    GetTransactionsResponse,
} from "./types";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products", "Transactions"],
    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"],
        }),
        getProducts: build.query<Array<GetProductsResponse>, void>({
            query: () => "product/products/",
            providesTags: ["Products"],
        }),
        getTransactions: build.query<Array<GetTransactionsResponse>, void>({
            query: () => "transaction/transactions/",
            providesTags: ["Transactions"],
        }),
    }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
    api;
/*
kpi --> keep performance indicator
using the endpoint Kpi and using the base url from the .env file and making the call to base url/kpi/kpis --> this is how this kpi is setup!!

This is a boilerplate code for the api call, once this is done, we can use this api call in the component and multiple times, just need to add another endpoint as getKpis2, getKpis3 etc
*/

