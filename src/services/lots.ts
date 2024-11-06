import { ICard } from "@/types/card";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const auctionApi = createApi({
  reducerPath: 'auctionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://213.150.86.6:8086/api/',
  }),
  endpoints: (builder) => ({
    getLots: builder.query<ICard[], null>({
      query: () => 'lots',
    })
  })
});

export const { useGetLotsQuery } = auctionApi;
