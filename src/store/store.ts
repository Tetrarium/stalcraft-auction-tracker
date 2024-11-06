import lotsReducer from "@/feature/lots/lotsSlice";
import { auctionApi } from "@/services/lots";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    lots: lotsReducer,
    [auctionApi.reducerPath]: auctionApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(auctionApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;