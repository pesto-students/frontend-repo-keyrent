import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./appSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ keyword, pageNumber }) => ({
              url: PRODUCTS_URL,
              params: { keyword, pageNumber },
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Products'],
          }),
    }),
});

export const {useGetProductsQuery} = productApiSlice;