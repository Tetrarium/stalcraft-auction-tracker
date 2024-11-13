import { useEffect } from "react";

import { useGetLotsQuery } from "@/API/auctionApi";
import { addLot } from "@/store/feature/lotsSlice";

import { useAppDispatch, useAppSelector } from "./typedHooks";

const audio = new Audio('/audio/notification.mp3');
audio.volume = 0.5;

export default function useRefreshLots() {
  const dispatch = useAppDispatch();
  const { lotNotification } = useAppSelector(state => state.appSettings);

  const { filter } = useAppSelector(state => state.filter);

  const { data } = useGetLotsQuery(filter, {
    pollingInterval: 10000,
  });

  useEffect(() => {
    if (data && data.length > 0) {
      (async () => {
        for (const lot of data) {
          dispatch(addLot(lot));

          if (lotNotification) {
            audio.play()
              .catch((e) => {
                console.error('Error playing audio:', e.message);
              });
          }

          await new Promise<void>(res => setTimeout(() => res(), 1000));
        }
      })();
    }
  }, [data]);
}
