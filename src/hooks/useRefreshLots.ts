import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { addLot } from "@/feature/lots/lotsSlice";
import { useGetLotsQuery } from "@/services/lots";

export default function useRefreshLots() {
  const dispatch = useDispatch();
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
