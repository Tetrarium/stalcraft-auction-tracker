import { useEffect } from "react";

import { useGetLotsQuery } from "@/API/auctionApi";
import { addLot } from "@/store/feature/lotsSlice";

import { useAppDispatch, useAppSelector } from "./typedHooks";

export default function useRefreshLots() {
  const dispatch = useAppDispatch();

  const { filter } = useAppSelector(state => state.filter);

  const { data } = useGetLotsQuery(filter, {
    pollingInterval: 10000,
  });

  useEffect(() => {
    if (data && data.length > 0) {
      (async () => {
        for (const lot of data) {
          dispatch(addLot(lot));
          await new Promise<void>(res => setTimeout(() => res(), 1000));
        }
      })();
    }
  }, [data]);
}
