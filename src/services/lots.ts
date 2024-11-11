import { ICard } from "@/types/card";
import { IInitData } from "@/types/initData";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const auctionApi = createApi({
  reducerPath: 'auctionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://213.150.86.6:8086/api/',
  }),
  endpoints: (builder) => ({
    getLots: builder.query<ICard[], null>({
      query: () => 'lots',
    }),
    getInitData: builder.query<IInitData, void>({
      query: () => 'init'
    })
  })
});

export const {
  useGetLotsQuery,
  useGetInitDataQuery
} = auctionApi;
