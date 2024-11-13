import { auctionApi } from "@/API/auctionApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import filterReducer from "./feature/filters/filtersSlice";
import lotsReducer from "./feature/lots/lotsSlice";

export const store = configureStore({
  reducer: {
    lots: lotsReducer,
    filter: filterReducer,
    [auctionApi.reducerPath]: auctionApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(auctionApi.middleware)
});

setupListeners(store.dispatch);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
