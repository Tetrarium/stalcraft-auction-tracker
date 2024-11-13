import { ICard } from "@/types/card";
import { IFilter } from "@/types/filter";
import { IInitData } from "@/types/initData";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const auctionApi = createApi({
  reducerPath: 'auctionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://213.150.86.6:8086/api/',
  }),
  endpoints: (builder) => ({
    getLots: builder.query<ICard[], IFilter>({
      query: (filter) => {
        const serilizedParams = getSerializedFilterParams(filter);

        return serilizedParams
          ? `lots?${serilizedParams}`
          : 'lots';
      },
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

const getSerializedFilterParams = (filter: IFilter) => {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(filter)) {
    if (value === '') continue;

    if (key === 'profitPercent') {
      // Костыль. Нужно будет устранить, перед этим пофиксив profitPercent в filter
      const val = parseInt(value).toString();
      params.append(key, val);
      continue;
    }
    params.append(key, value);
  }

  return params.size > 0
    ? params.toString()
    : null;
};
