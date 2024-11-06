import { ICard } from "@/types/card";
import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

export interface LotsState {
  lots: ICard[];
}

const initialState: LotsState = {
  lots: [],
};

export const lotsSlice = createSlice({
  name: 'lots',
  initialState,
  reducers: {
    addLot: (state, action: PayloadAction<ICard>) => {
      const uniqueIds = new Set<number>();
      uniqueIds.add(action.payload.uniqueId);

      const oldFilteredLots = state.lots.filter(lot => {
        if (uniqueIds.has(lot.uniqueId)) return false;
        return true;
      });

      state.lots = [action.payload, ...oldFilteredLots];
    },
    clearLots: (state) => {
      state.lots = [];
    }
  }
});

export const { addLot } = lotsSlice.actions;
export default lotsSlice.reducer;