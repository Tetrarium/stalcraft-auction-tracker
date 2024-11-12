import { useEffect } from "react";

import { useGetLotsQuery } from "@/services/lots";
import { addLot } from "@/store/feature/lots/lotsSlice";

import { useAppDispatch } from "./typedHooks";

export default function useRefreshLots() {
  const dispatch = useAppDispatch();
  const { data } = useGetLotsQuery(null, {
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
